import { m } from "framer-motion";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { shallow } from "zustand/shallow";

import { Timezone as PlatformTimezoneSelect } from "@calcom/atoms/monorepo";
import { useEmbedUiConfig, useIsEmbed } from "@calcom/embed-core/embed-iframe";
import { EventDetails, EventMembers, EventMetaSkeleton, EventTitle } from "@calcom/features/bookings";
import { SeatsAvailabilityText } from "@calcom/features/bookings/components/SeatsAvailabilityText";
import { EventMetaBlock } from "@calcom/features/bookings/components/event-meta/Details";
import { useTimePreferences } from "@calcom/features/bookings/lib";
import type { BookerEvent } from "@calcom/features/bookings/types";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { Icon } from "@calcom/ui";

import { fadeInUp } from "../config";
import { useBookerStore } from "../store";
import "./styles/scale.css";

const MOBILE_WIDTH = 768;

const WebTimezoneSelect = dynamic(
  () => import("@calcom/ui/components/form/timezone-select/TimezoneSelect").then((mod) => mod.TimezoneSelect),
  {
    ssr: false,
  }
);

export const EventMeta = ({
  event,
  isPending,
  isPlatform = true,
  isOcurrence,
  classNames,
}: {
  event?: Pick<
    BookerEvent,
    | "lockTimeZoneToggleOnBookingPage"
    | "schedule"
    | "seatsPerTimeSlot"
    | "users"
    | "length"
    | "schedulingType"
    | "profile"
    | "entity"
    | "description"
    | "title"
    | "metadata"
    | "locations"
    | "currency"
    | "requiresConfirmation"
    | "recurringEvent"
    | "price"
    | "isDynamic"
  > | null;
  isPending: boolean;
  isPlatform?: boolean;
  isOcurrence: boolean;
  classNames?: {
    eventMetaContainer?: string;
    eventMetaTitle?: string;
    eventMetaTimezoneSelect?: string;
  };
}) => {
  const { setTimezone, timeFormat, timezone: timeZone } = useTimePreferences();
  const selectedDuration = useBookerStore((state) => state.selectedDuration);
  const selectedTimeslot = useBookerStore((state) => state.selectedTimeslot);
  const bookerState = useBookerStore((state) => state.state);
  const bookingData = useBookerStore((state) => state.bookingData);
  const rescheduleUid = useBookerStore((state) => state.rescheduleUid);
  const [seatedEventData, setSeatedEventData] = useBookerStore(
    (state) => [state.seatedEventData, state.setSeatedEventData],
    shallow
  );
  const { i18n, t } = useLocale();
  const embedUiConfig = useEmbedUiConfig();
  const isEmbed = useIsEmbed();
  const pathname = usePathname();
  const [showMessage, setShowMessage] = useState(false);
  const hideEventTypeDetails = isEmbed ? embedUiConfig.hideEventTypeDetails : false;
  const [TimezoneSelect] = useMemo(
    () => (isPlatform ? [PlatformTimezoneSelect] : [WebTimezoneSelect]),
    [isPlatform]
  );

  useEffect(() => {
    //In case the event has lockTimeZone enabled ,set the timezone to event's attached availability timezone
    if (event && event?.lockTimeZoneToggleOnBookingPage && event?.schedule?.timeZone) {
      setTimezone(event.schedule?.timeZone);
    }
  }, [event, setTimezone]);

  useEffect(() => {
    const hasRecurrenceInPath = pathname.includes("semanal") || pathname.includes("quinzenal");
    const handleResize = () => {
      setShowMessage(window.innerWidth < MOBILE_WIDTH && hasRecurrenceInPath);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  if (hideEventTypeDetails) {
    return null;
  }
  // If we didn't pick a time slot yet, we load bookingData via SSR so bookingData should be set
  // Otherwise we load seatedEventData from useBookerStore
  const bookingSeatAttendeesQty = seatedEventData?.attendees || bookingData?.attendees.length;
  const eventTotalSeats = seatedEventData?.seatsPerTimeSlot || event?.seatsPerTimeSlot;

  const isHalfFull =
    bookingSeatAttendeesQty && eventTotalSeats && bookingSeatAttendeesQty / eventTotalSeats >= 0.5;
  const isNearlyFull =
    bookingSeatAttendeesQty && eventTotalSeats && bookingSeatAttendeesQty / eventTotalSeats >= 0.83;

  const colorClass = isNearlyFull
    ? "text-rose-600"
    : isHalfFull
    ? "text-yellow-500"
    : "text-bookinghighlight";

  const startDate = selectedTimeslot ? new Date(selectedTimeslot) : new Date();
  const date = new Intl.DateTimeFormat(i18n.language, {
    timeZone,
    dateStyle: "full",
  }).format(startDate);

  const time = new Intl.DateTimeFormat(i18n.language, {
    timeZone,
    timeStyle: "short",
    hour12: false,
  })
    .format(startDate)
    .toLowerCase();

  return (
    <div
      className={`${classNames?.eventMetaContainer || ""} relative z-10 p-4 md:p-10`}
      data-testid="event-meta">
      {isPending && (
        <m.div {...fadeInUp} initial="visible" layout>
          <EventMetaSkeleton />
        </m.div>
      )}
      {!isPending && !!event && (
        <m.div {...fadeInUp} layout transition={{ ...fadeInUp.transition, delay: 0.3 }}>
          {!isPlatform && (
            <EventMembers
              schedulingType={event.schedulingType}
              users={event.users}
              profile={event.profile}
              entity={event.entity}
            />
          )}
          <EventTitle
            className={`${classNames?.eventMetaTitle} title-class-font-size my-2 mt-4 hidden sm:block`}>
            {event?.title}
          </EventTitle>
          <p className="title-class-font-size my-4 mb-8 sm:hidden">{event?.title}</p>
          {event.description && (
            <>
              <EventMetaBlock contentClassName=" hidden sm:block mb-8 break-words max-w-full max-h-[180px] scroll-bar pr-4 description-class-font-size">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </EventMetaBlock>

              <EventMetaBlock contentClassName=" sm:hidden mb-8 break-words max-w-full max-h-[180px] scroll-bar  description-class-font-size">
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </EventMetaBlock>
            </>
          )}
          <div>
            <div
              className={`${
                showMessage ? "flex-col items-start " : "items-center "
              }mb-4 flex gap-4 space-y-4 font-medium md:ml-28 md:pl-2`}>
              {/* {rescheduleUid && bookingData && (
                <EventMetaBlock icon="calendar">
                  {t("former_time")}
                  <br />
                  <span className="line-through" data-testid="former_time_p">
                    <FromToTime
                      date={bookingData.startTime.toString()}
                      duration={null}
                      timeFormat={timeFormat}
                      timeZone={timezone}
                      language={i18n.language}
                    />
                  </span>
                </EventMetaBlock>
              )} */}
              {/* {selectedTimeslot && (
                <EventMetaBlock icon="calendar">
                  <FromToTime
                    date={selectedTimeslot}
                    duration={selectedDuration || event.length}
                    timeFormat={timeFormat}
                    timeZone={timezone}
                    language={i18n.language}
                  />
                </EventMetaBlock>
              )} */}
              {showMessage && (
                <span className="-mb-4 ml-0.5 flex items-center gap-2 text-base">
                  <Icon
                    name="calendar"
                    data-testid="calendar-icon"
                    className="calendar-scale mr-2 h-3 w-3 stroke-[3px]"
                  />
                  A partir de {date}, {time}
                </span>
              )}
              <EventDetails event={event} isOcurrence={isOcurrence} />
              {/* <EventMetaBlock
                className=".event-meta-block-fix cursor-pointer [&_.current-timezone:before]:focus-within:opacity-100 [&_.current-timezone:before]:hover:opacity-100"
                contentClassName="relative max-w-[90%]"
                icon="globe">
                {bookerState === "booking" ? (
                  <>{timezone}</>
                ) : (
                  <span
                    className={`min-w-32 current-timezone before:bg-subtle -mt-[2px] flex h-6 max-w-full items-center justify-start before:absolute before:inset-0 before:bottom-[-3px] before:left-[-30px] before:top-[-3px] before:w-[calc(100%_+_35px)] before:rounded-md before:py-3 before:opacity-0 before:transition-opacity ${
                      event.lockTimeZoneToggleOnBookingPage ? "cursor-not-allowed" : ""
                    }`}>
                    <TimezoneSelect
                      menuPosition="fixed"
                      timezoneSelectCustomClassname={classNames?.eventMetaTimezoneSelect}
                      classNames={{
                        control: () => "!min-h-0 p-0 w-full border-0 bg-transparent focus-within:ring-0",
                        menu: () => "!w-64 max-w-[90vw]",
                        singleValue: () => "text-text py-1",
                        indicatorsContainer: () => "ml-auto",
                        container: () => "max-w-full",
                      }}
                      value={timezone}
                      onChange={(tz) => setTimezone(tz.value)}
                      isDisabled={event.lockTimeZoneToggleOnBookingPage}
                    />
                  </span>
                )}
              </EventMetaBlock> */}
              {bookerState === "booking" && eventTotalSeats && bookingSeatAttendeesQty ? (
                <EventMetaBlock icon="user" className={`${colorClass}`}>
                  <div className="text-bookinghighlight flex items-start text-sm">
                    <p>
                      <SeatsAvailabilityText
                        showExact={!!seatedEventData.showAvailableSeatsCount}
                        totalSeats={eventTotalSeats}
                        bookedSeats={bookingSeatAttendeesQty || 0}
                        variant="fraction"
                      />
                    </p>
                  </div>
                </EventMetaBlock>
              ) : null}
            </div>
            {showMessage && (
              <span className="text-base">
                O dia da semana e horário escolhidos serão reservados para você nas próximas semanas conforme
                o plano escolhido.
              </span>
            )}
          </div>
        </m.div>
      )}
    </div>
  );
};
