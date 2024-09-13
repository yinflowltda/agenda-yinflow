import { EventTypesRepository_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/event-types.repository";
import { InputEventTypesService_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/services/input-event-types.service";
import { OutputEventTypesService_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/services/output-event-types.service";
import { SchedulesRepository_2024_06_11 } from "src/ee/schedules/schedules_2024_06_11/schedules.repository";
import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile, UsersRepository } from "src/modules/users/users.repository";

import { EventTypesPublic } from "@calcom/platform-libraries";
import {
  CreateEventTypeInput_2024_06_14,
  UpdateEventTypeInput_2024_06_14,
  GetEventTypesQuery_2024_06_14,
  EventTypeOutput_2024_06_14,
} from "@calcom/platform-types";
import { EventType } from "@calcom/prisma/client";

export declare class EventTypesService_2024_06_14 {
  private readonly eventTypesRepository;
  private readonly inputEventTypesService;
  private readonly outputEventTypesService;
  private readonly membershipsRepository;
  private readonly usersRepository;
  private readonly usersService;
  private readonly selectedCalendarsRepository;
  private readonly dbWrite;
  private readonly schedulesRepository;
  constructor(
    eventTypesRepository: EventTypesRepository_2024_06_14,
    inputEventTypesService: InputEventTypesService_2024_06_14,
    outputEventTypesService: OutputEventTypesService_2024_06_14,
    membershipsRepository: MembershipsRepository,
    usersRepository: UsersRepository,
    usersService: UsersService,
    selectedCalendarsRepository: SelectedCalendarsRepository,
    dbWrite: PrismaWriteService,
    schedulesRepository: SchedulesRepository_2024_06_11
  );
  createUserEventType(
    user: UserWithProfile,
    body: CreateEventTypeInput_2024_06_14
  ): Promise<{
    id: number;
    ownerId: number;
    lengthInMinutes: number;
    title: string;
    slug: string;
    description: string;
    locations: any;
    bookingFields: any;
    recurrence: any;
    disableGuests: boolean;
    slotInterval: number | null;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    metadata: {
      apps?:
        | {
            stripe?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            alby?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            basecamp3?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            campsite?: {} | undefined;
            closecom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            dailyvideo?: {} | undefined;
            fathom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            feishucalendar?: {} | undefined;
            ga4?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            giphy?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  thankYouPage?: string | undefined;
                }
              | undefined;
            googlecalendar?: {} | undefined;
            googlevideo?: {} | undefined;
            gtm?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            hubspot?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            intercom?: {} | undefined;
            jelly?: {} | undefined;
            jitsivideo?: {} | undefined;
            larkcalendar?: {} | undefined;
            make?: {} | undefined;
            matomo?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  MATOMO_URL?: string | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            metapixel?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            "mock-payment-app"?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            office365calendar?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            office365video?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            paypal?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            "pipedrive-crm"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            plausible?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                  PLAUSIBLE_URL?: string | undefined;
                }
              | undefined;
            posthog?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  TRACKING_ID?: string | undefined;
                  API_HOST?: string | undefined;
                }
              | undefined;
            qr_code?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "routing-forms"?: any;
            salesforce?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  roundRobinLeadSkip?: boolean | undefined;
                  skipContactCreation?: boolean | undefined;
                }
              | undefined;
            shimmervideo?: {} | undefined;
            tandemvideo?: {} | undefined;
            "booking-pages-tag"?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "event-type-app-card"?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            twipla?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            umami?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                  SCRIPT_URL?: string | undefined;
                }
              | undefined;
            vital?: {} | undefined;
            webex?: {} | undefined;
            wordpress?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zapier?: {} | undefined;
            "zoho-bigin"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zohocalendar?: {} | undefined;
            zohocrm?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zoomvideo?: {} | undefined;
          }
        | undefined;
      config?:
        | {
            useHostSchedulesForTeamEvent?: boolean | undefined;
          }
        | undefined;
      smartContractAddress?: string | undefined;
      blockchainId?: number | undefined;
      multipleDuration?: number[] | undefined;
      giphyThankYouPage?: string | undefined;
      additionalNotesRequired?: boolean | undefined;
      disableSuccessPage?: boolean | undefined;
      disableStandardEmails?:
        | {
            all?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
            confirmation?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
          }
        | undefined;
      managedEventConfig?:
        | {
            unlockedFields?:
              | {
                  length?: true | undefined;
                  schedule?: true | undefined;
                  profile?: true | undefined;
                  bookings?: true | undefined;
                  description?: true | undefined;
                  title?: true | undefined;
                  timeZone?: true | undefined;
                  availability?: true | undefined;
                  userId?: true | undefined;
                  slug?: true | undefined;
                  locations?: true | undefined;
                  bookingFields?: true | undefined;
                  disableGuests?: true | undefined;
                  slotInterval?: true | undefined;
                  minimumBookingNotice?: true | undefined;
                  beforeEventBuffer?: true | undefined;
                  afterEventBuffer?: true | undefined;
                  scheduleId?: true | undefined;
                  onlyShowFirstAvailableSlot?: true | undefined;
                  offsetStart?: true | undefined;
                  schedulingType?: true | undefined;
                  hosts?: true | undefined;
                  assignAllTeamMembers?: true | undefined;
                  metadata?: true | undefined;
                  requiresConfirmation?: true | undefined;
                  price?: true | undefined;
                  currency?: true | undefined;
                  lockTimeZoneToggleOnBookingPage?: true | undefined;
                  seatsPerTimeSlot?: true | undefined;
                  forwardParamsSuccessRedirect?: true | undefined;
                  successRedirectUrl?: true | undefined;
                  seatsShowAvailabilityCount?: true | undefined;
                  isInstantEvent?: true | undefined;
                  teamId?: true | undefined;
                  parentId?: true | undefined;
                  destinationCalendar?: true | undefined;
                  team?: true | undefined;
                  hashedLink?: true | undefined;
                  secondaryEmail?: true | undefined;
                  webhooks?: true | undefined;
                  workflows?: true | undefined;
                  _count?: true | undefined;
                  users?: true | undefined;
                  parent?: true | undefined;
                  children?: true | undefined;
                  position?: true | undefined;
                  hidden?: true | undefined;
                  profileId?: true | undefined;
                  eventName?: true | undefined;
                  periodType?: true | undefined;
                  periodStartDate?: true | undefined;
                  periodEndDate?: true | undefined;
                  periodDays?: true | undefined;
                  periodCountCalendarDays?: true | undefined;
                  requiresConfirmationWillBlockSlot?: true | undefined;
                  requiresBookerEmailVerification?: true | undefined;
                  recurringEvent?: true | undefined;
                  hideCalendarNotes?: true | undefined;
                  seatsShowAttendees?: true | undefined;
                  bookingLimits?: true | undefined;
                  durationLimits?: true | undefined;
                  instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                  useEventTypeDestinationCalendarEmail?: true | undefined;
                  isRRWeightsEnabled?: true | undefined;
                  eventTypeColor?: true | undefined;
                  rescheduleWithSameRoundRobinHost?: true | undefined;
                  secondaryEmailId?: true | undefined;
                  owner?: true | undefined;
                  customInputs?: true | undefined;
                  aiPhoneCallConfig?: true | undefined;
                }
              | undefined;
          }
        | undefined;
      requiresConfirmationThreshold?:
        | {
            time: number;
            unit: import("dayjs").UnitTypeLongPlural;
          }
        | undefined;
      bookerLayouts?:
        | {
            enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
            defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
          }
        | null
        | undefined;
    };
    requiresConfirmation: boolean;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    seatsShowAvailabilityCount: boolean | null;
    isInstantEvent: boolean;
    users: {
      id: number;
      name: string | null;
      username: string | null;
      avatarUrl: string | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      weekStart: string;
      metadata: {
        proPaidForByTeamId?: number | undefined;
        stripeCustomerId?: string | undefined;
        vitalSettings?:
          | {
              connected?: boolean | undefined;
              selectedParam?: string | undefined;
              sleepValue?: number | undefined;
            }
          | undefined;
        isPremium?: boolean | undefined;
        sessionTimeout?: number | undefined;
        defaultConferencingApp?:
          | {
              appSlug?: string | undefined;
              appLink?: string | undefined;
            }
          | undefined;
        defaultBookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
        emailChangeWaitingForVerification?: string | undefined;
        migratedToOrgFrom?:
          | {
              username?: string | null | undefined;
              lastMigrationTime?: string | undefined;
              reverted?: boolean | undefined;
              revertTime?: string | undefined;
            }
          | undefined;
      };
    }[];
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  }>;
  checkCanCreateEventType(userId: number, body: CreateEventTypeInput_2024_06_14): Promise<void>;
  getEventTypeByUsernameAndSlug(
    username: string,
    eventTypeSlug: string
  ): Promise<{
    id: number;
    ownerId: number;
    lengthInMinutes: number;
    title: string;
    slug: string;
    description: string;
    locations: any;
    bookingFields: any;
    recurrence: any;
    disableGuests: boolean;
    slotInterval: number | null;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    metadata: {
      apps?:
        | {
            stripe?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            alby?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            basecamp3?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            campsite?: {} | undefined;
            closecom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            dailyvideo?: {} | undefined;
            fathom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            feishucalendar?: {} | undefined;
            ga4?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            giphy?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  thankYouPage?: string | undefined;
                }
              | undefined;
            googlecalendar?: {} | undefined;
            googlevideo?: {} | undefined;
            gtm?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            hubspot?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            intercom?: {} | undefined;
            jelly?: {} | undefined;
            jitsivideo?: {} | undefined;
            larkcalendar?: {} | undefined;
            make?: {} | undefined;
            matomo?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  MATOMO_URL?: string | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            metapixel?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            "mock-payment-app"?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            office365calendar?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            office365video?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            paypal?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            "pipedrive-crm"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            plausible?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                  PLAUSIBLE_URL?: string | undefined;
                }
              | undefined;
            posthog?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  TRACKING_ID?: string | undefined;
                  API_HOST?: string | undefined;
                }
              | undefined;
            qr_code?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "routing-forms"?: any;
            salesforce?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  roundRobinLeadSkip?: boolean | undefined;
                  skipContactCreation?: boolean | undefined;
                }
              | undefined;
            shimmervideo?: {} | undefined;
            tandemvideo?: {} | undefined;
            "booking-pages-tag"?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "event-type-app-card"?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            twipla?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            umami?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                  SCRIPT_URL?: string | undefined;
                }
              | undefined;
            vital?: {} | undefined;
            webex?: {} | undefined;
            wordpress?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zapier?: {} | undefined;
            "zoho-bigin"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zohocalendar?: {} | undefined;
            zohocrm?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zoomvideo?: {} | undefined;
          }
        | undefined;
      config?:
        | {
            useHostSchedulesForTeamEvent?: boolean | undefined;
          }
        | undefined;
      smartContractAddress?: string | undefined;
      blockchainId?: number | undefined;
      multipleDuration?: number[] | undefined;
      giphyThankYouPage?: string | undefined;
      additionalNotesRequired?: boolean | undefined;
      disableSuccessPage?: boolean | undefined;
      disableStandardEmails?:
        | {
            all?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
            confirmation?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
          }
        | undefined;
      managedEventConfig?:
        | {
            unlockedFields?:
              | {
                  length?: true | undefined;
                  schedule?: true | undefined;
                  profile?: true | undefined;
                  bookings?: true | undefined;
                  description?: true | undefined;
                  title?: true | undefined;
                  timeZone?: true | undefined;
                  availability?: true | undefined;
                  userId?: true | undefined;
                  slug?: true | undefined;
                  locations?: true | undefined;
                  bookingFields?: true | undefined;
                  disableGuests?: true | undefined;
                  slotInterval?: true | undefined;
                  minimumBookingNotice?: true | undefined;
                  beforeEventBuffer?: true | undefined;
                  afterEventBuffer?: true | undefined;
                  scheduleId?: true | undefined;
                  onlyShowFirstAvailableSlot?: true | undefined;
                  offsetStart?: true | undefined;
                  schedulingType?: true | undefined;
                  hosts?: true | undefined;
                  assignAllTeamMembers?: true | undefined;
                  metadata?: true | undefined;
                  requiresConfirmation?: true | undefined;
                  price?: true | undefined;
                  currency?: true | undefined;
                  lockTimeZoneToggleOnBookingPage?: true | undefined;
                  seatsPerTimeSlot?: true | undefined;
                  forwardParamsSuccessRedirect?: true | undefined;
                  successRedirectUrl?: true | undefined;
                  seatsShowAvailabilityCount?: true | undefined;
                  isInstantEvent?: true | undefined;
                  teamId?: true | undefined;
                  parentId?: true | undefined;
                  destinationCalendar?: true | undefined;
                  team?: true | undefined;
                  hashedLink?: true | undefined;
                  secondaryEmail?: true | undefined;
                  webhooks?: true | undefined;
                  workflows?: true | undefined;
                  _count?: true | undefined;
                  users?: true | undefined;
                  parent?: true | undefined;
                  children?: true | undefined;
                  position?: true | undefined;
                  hidden?: true | undefined;
                  profileId?: true | undefined;
                  eventName?: true | undefined;
                  periodType?: true | undefined;
                  periodStartDate?: true | undefined;
                  periodEndDate?: true | undefined;
                  periodDays?: true | undefined;
                  periodCountCalendarDays?: true | undefined;
                  requiresConfirmationWillBlockSlot?: true | undefined;
                  requiresBookerEmailVerification?: true | undefined;
                  recurringEvent?: true | undefined;
                  hideCalendarNotes?: true | undefined;
                  seatsShowAttendees?: true | undefined;
                  bookingLimits?: true | undefined;
                  durationLimits?: true | undefined;
                  instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                  useEventTypeDestinationCalendarEmail?: true | undefined;
                  isRRWeightsEnabled?: true | undefined;
                  eventTypeColor?: true | undefined;
                  rescheduleWithSameRoundRobinHost?: true | undefined;
                  secondaryEmailId?: true | undefined;
                  owner?: true | undefined;
                  customInputs?: true | undefined;
                  aiPhoneCallConfig?: true | undefined;
                }
              | undefined;
          }
        | undefined;
      requiresConfirmationThreshold?:
        | {
            time: number;
            unit: import("dayjs").UnitTypeLongPlural;
          }
        | undefined;
      bookerLayouts?:
        | {
            enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
            defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
          }
        | null
        | undefined;
    };
    requiresConfirmation: boolean;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    seatsShowAvailabilityCount: boolean | null;
    isInstantEvent: boolean;
    users: {
      id: number;
      name: string | null;
      username: string | null;
      avatarUrl: string | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      weekStart: string;
      metadata: {
        proPaidForByTeamId?: number | undefined;
        stripeCustomerId?: string | undefined;
        vitalSettings?:
          | {
              connected?: boolean | undefined;
              selectedParam?: string | undefined;
              sleepValue?: number | undefined;
            }
          | undefined;
        isPremium?: boolean | undefined;
        sessionTimeout?: number | undefined;
        defaultConferencingApp?:
          | {
              appSlug?: string | undefined;
              appLink?: string | undefined;
            }
          | undefined;
        defaultBookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
        emailChangeWaitingForVerification?: string | undefined;
        migratedToOrgFrom?:
          | {
              username?: string | null | undefined;
              lastMigrationTime?: string | undefined;
              reverted?: boolean | undefined;
              revertTime?: string | undefined;
            }
          | undefined;
      };
    }[];
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  } | null>;
  getEventTypesByUsername(username: string): Promise<
    {
      id: number;
      ownerId: number;
      lengthInMinutes: number;
      title: string;
      slug: string;
      description: string;
      locations: any;
      bookingFields: any;
      recurrence: any;
      disableGuests: boolean;
      slotInterval: number | null;
      minimumBookingNotice: number;
      beforeEventBuffer: number;
      afterEventBuffer: number;
      schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
      metadata: {
        apps?:
          | {
              stripe?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              alby?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              basecamp3?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              campsite?: {} | undefined;
              closecom?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              dailyvideo?: {} | undefined;
              fathom?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              feishucalendar?: {} | undefined;
              ga4?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              giphy?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    thankYouPage?: string | undefined;
                  }
                | undefined;
              googlecalendar?: {} | undefined;
              googlevideo?: {} | undefined;
              gtm?:
                | {
                    trackingId: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              hubspot?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              intercom?: {} | undefined;
              jelly?: {} | undefined;
              jitsivideo?: {} | undefined;
              larkcalendar?: {} | undefined;
              make?: {} | undefined;
              matomo?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    MATOMO_URL?: string | undefined;
                    SITE_ID?: string | undefined;
                  }
                | undefined;
              metapixel?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              "mock-payment-app"?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              office365calendar?:
                | {
                    client_id: string;
                    client_secret: string;
                  }
                | undefined;
              office365video?:
                | {
                    client_id: string;
                    client_secret: string;
                  }
                | undefined;
              paypal?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              "pipedrive-crm"?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              plausible?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                    PLAUSIBLE_URL?: string | undefined;
                  }
                | undefined;
              posthog?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    TRACKING_ID?: string | undefined;
                    API_HOST?: string | undefined;
                  }
                | undefined;
              qr_code?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              "routing-forms"?: any;
              salesforce?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    roundRobinLeadSkip?: boolean | undefined;
                    skipContactCreation?: boolean | undefined;
                  }
                | undefined;
              shimmervideo?: {} | undefined;
              tandemvideo?: {} | undefined;
              "booking-pages-tag"?:
                | {
                    trackingId: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              "event-type-app-card"?:
                | {
                    isSunrise: boolean;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              twipla?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    SITE_ID?: string | undefined;
                  }
                | undefined;
              umami?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    SITE_ID?: string | undefined;
                    SCRIPT_URL?: string | undefined;
                  }
                | undefined;
              vital?: {} | undefined;
              webex?: {} | undefined;
              wordpress?:
                | {
                    isSunrise: boolean;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zapier?: {} | undefined;
              "zoho-bigin"?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zohocalendar?: {} | undefined;
              zohocrm?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zoomvideo?: {} | undefined;
            }
          | undefined;
        config?:
          | {
              useHostSchedulesForTeamEvent?: boolean | undefined;
            }
          | undefined;
        smartContractAddress?: string | undefined;
        blockchainId?: number | undefined;
        multipleDuration?: number[] | undefined;
        giphyThankYouPage?: string | undefined;
        additionalNotesRequired?: boolean | undefined;
        disableSuccessPage?: boolean | undefined;
        disableStandardEmails?:
          | {
              all?:
                | {
                    host?: boolean | undefined;
                    attendee?: boolean | undefined;
                  }
                | undefined;
              confirmation?:
                | {
                    host?: boolean | undefined;
                    attendee?: boolean | undefined;
                  }
                | undefined;
            }
          | undefined;
        managedEventConfig?:
          | {
              unlockedFields?:
                | {
                    length?: true | undefined;
                    schedule?: true | undefined;
                    profile?: true | undefined;
                    bookings?: true | undefined;
                    description?: true | undefined;
                    title?: true | undefined;
                    timeZone?: true | undefined;
                    availability?: true | undefined;
                    userId?: true | undefined;
                    slug?: true | undefined;
                    locations?: true | undefined;
                    bookingFields?: true | undefined;
                    disableGuests?: true | undefined;
                    slotInterval?: true | undefined;
                    minimumBookingNotice?: true | undefined;
                    beforeEventBuffer?: true | undefined;
                    afterEventBuffer?: true | undefined;
                    scheduleId?: true | undefined;
                    onlyShowFirstAvailableSlot?: true | undefined;
                    offsetStart?: true | undefined;
                    schedulingType?: true | undefined;
                    hosts?: true | undefined;
                    assignAllTeamMembers?: true | undefined;
                    metadata?: true | undefined;
                    requiresConfirmation?: true | undefined;
                    price?: true | undefined;
                    currency?: true | undefined;
                    lockTimeZoneToggleOnBookingPage?: true | undefined;
                    seatsPerTimeSlot?: true | undefined;
                    forwardParamsSuccessRedirect?: true | undefined;
                    successRedirectUrl?: true | undefined;
                    seatsShowAvailabilityCount?: true | undefined;
                    isInstantEvent?: true | undefined;
                    teamId?: true | undefined;
                    parentId?: true | undefined;
                    destinationCalendar?: true | undefined;
                    team?: true | undefined;
                    hashedLink?: true | undefined;
                    secondaryEmail?: true | undefined;
                    webhooks?: true | undefined;
                    workflows?: true | undefined;
                    _count?: true | undefined;
                    users?: true | undefined;
                    parent?: true | undefined;
                    children?: true | undefined;
                    position?: true | undefined;
                    hidden?: true | undefined;
                    profileId?: true | undefined;
                    eventName?: true | undefined;
                    periodType?: true | undefined;
                    periodStartDate?: true | undefined;
                    periodEndDate?: true | undefined;
                    periodDays?: true | undefined;
                    periodCountCalendarDays?: true | undefined;
                    requiresConfirmationWillBlockSlot?: true | undefined;
                    requiresBookerEmailVerification?: true | undefined;
                    recurringEvent?: true | undefined;
                    hideCalendarNotes?: true | undefined;
                    seatsShowAttendees?: true | undefined;
                    bookingLimits?: true | undefined;
                    durationLimits?: true | undefined;
                    instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                    useEventTypeDestinationCalendarEmail?: true | undefined;
                    isRRWeightsEnabled?: true | undefined;
                    eventTypeColor?: true | undefined;
                    rescheduleWithSameRoundRobinHost?: true | undefined;
                    secondaryEmailId?: true | undefined;
                    owner?: true | undefined;
                    customInputs?: true | undefined;
                    aiPhoneCallConfig?: true | undefined;
                  }
                | undefined;
            }
          | undefined;
        requiresConfirmationThreshold?:
          | {
              time: number;
              unit: import("dayjs").UnitTypeLongPlural;
            }
          | undefined;
        bookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
      };
      requiresConfirmation: boolean;
      price: number;
      currency: string;
      lockTimeZoneToggleOnBookingPage: boolean;
      seatsPerTimeSlot: number | null;
      forwardParamsSuccessRedirect: boolean | null;
      successRedirectUrl: string | null;
      seatsShowAvailabilityCount: boolean | null;
      isInstantEvent: boolean;
      users: {
        id: number;
        name: string | null;
        username: string | null;
        avatarUrl: string | null;
        brandColor: string | null;
        darkBrandColor: string | null;
        weekStart: string;
        metadata: {
          proPaidForByTeamId?: number | undefined;
          stripeCustomerId?: string | undefined;
          vitalSettings?:
            | {
                connected?: boolean | undefined;
                selectedParam?: string | undefined;
                sleepValue?: number | undefined;
              }
            | undefined;
          isPremium?: boolean | undefined;
          sessionTimeout?: number | undefined;
          defaultConferencingApp?:
            | {
                appSlug?: string | undefined;
                appLink?: string | undefined;
              }
            | undefined;
          defaultBookerLayouts?:
            | {
                enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
                defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
              }
            | null
            | undefined;
          emailChangeWaitingForVerification?: string | undefined;
          migratedToOrgFrom?:
            | {
                username?: string | null | undefined;
                lastMigrationTime?: string | undefined;
                reverted?: boolean | undefined;
                revertTime?: string | undefined;
              }
            | undefined;
        };
      }[];
      scheduleId: number | null;
      bookingLimitsCount: any;
      bookingLimitsDuration: any;
      onlyShowFirstAvailableSlot: boolean;
      offsetStart: number;
      bookingWindow: any;
    }[]
  >;
  getUserToCreateEvent(user: UserWithProfile): Promise<{
    id: number;
    role: import(".prisma/client").$Enums.UserPermissionRole;
    username: string | null;
    organizationId: number | null;
    organization: {
      isOrgAdmin: boolean;
    };
    profile: {
      id: number | null;
    };
    metadata: import("@prisma/client/runtime/library").JsonValue;
    selectedCalendars: {
      userId: number;
      integration: string;
      externalId: string;
      credentialId: number | null;
    }[];
  }>;
  getUserEventType(
    userId: number,
    eventTypeId: number
  ): Promise<{
    id: number;
    ownerId: number;
    lengthInMinutes: number;
    title: string;
    slug: string;
    description: string;
    locations: any;
    bookingFields: any;
    recurrence: any;
    disableGuests: boolean;
    slotInterval: number | null;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    metadata: {
      apps?:
        | {
            stripe?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            alby?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            basecamp3?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            campsite?: {} | undefined;
            closecom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            dailyvideo?: {} | undefined;
            fathom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            feishucalendar?: {} | undefined;
            ga4?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            giphy?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  thankYouPage?: string | undefined;
                }
              | undefined;
            googlecalendar?: {} | undefined;
            googlevideo?: {} | undefined;
            gtm?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            hubspot?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            intercom?: {} | undefined;
            jelly?: {} | undefined;
            jitsivideo?: {} | undefined;
            larkcalendar?: {} | undefined;
            make?: {} | undefined;
            matomo?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  MATOMO_URL?: string | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            metapixel?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            "mock-payment-app"?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            office365calendar?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            office365video?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            paypal?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            "pipedrive-crm"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            plausible?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                  PLAUSIBLE_URL?: string | undefined;
                }
              | undefined;
            posthog?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  TRACKING_ID?: string | undefined;
                  API_HOST?: string | undefined;
                }
              | undefined;
            qr_code?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "routing-forms"?: any;
            salesforce?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  roundRobinLeadSkip?: boolean | undefined;
                  skipContactCreation?: boolean | undefined;
                }
              | undefined;
            shimmervideo?: {} | undefined;
            tandemvideo?: {} | undefined;
            "booking-pages-tag"?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "event-type-app-card"?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            twipla?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            umami?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                  SCRIPT_URL?: string | undefined;
                }
              | undefined;
            vital?: {} | undefined;
            webex?: {} | undefined;
            wordpress?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zapier?: {} | undefined;
            "zoho-bigin"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zohocalendar?: {} | undefined;
            zohocrm?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zoomvideo?: {} | undefined;
          }
        | undefined;
      config?:
        | {
            useHostSchedulesForTeamEvent?: boolean | undefined;
          }
        | undefined;
      smartContractAddress?: string | undefined;
      blockchainId?: number | undefined;
      multipleDuration?: number[] | undefined;
      giphyThankYouPage?: string | undefined;
      additionalNotesRequired?: boolean | undefined;
      disableSuccessPage?: boolean | undefined;
      disableStandardEmails?:
        | {
            all?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
            confirmation?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
          }
        | undefined;
      managedEventConfig?:
        | {
            unlockedFields?:
              | {
                  length?: true | undefined;
                  schedule?: true | undefined;
                  profile?: true | undefined;
                  bookings?: true | undefined;
                  description?: true | undefined;
                  title?: true | undefined;
                  timeZone?: true | undefined;
                  availability?: true | undefined;
                  userId?: true | undefined;
                  slug?: true | undefined;
                  locations?: true | undefined;
                  bookingFields?: true | undefined;
                  disableGuests?: true | undefined;
                  slotInterval?: true | undefined;
                  minimumBookingNotice?: true | undefined;
                  beforeEventBuffer?: true | undefined;
                  afterEventBuffer?: true | undefined;
                  scheduleId?: true | undefined;
                  onlyShowFirstAvailableSlot?: true | undefined;
                  offsetStart?: true | undefined;
                  schedulingType?: true | undefined;
                  hosts?: true | undefined;
                  assignAllTeamMembers?: true | undefined;
                  metadata?: true | undefined;
                  requiresConfirmation?: true | undefined;
                  price?: true | undefined;
                  currency?: true | undefined;
                  lockTimeZoneToggleOnBookingPage?: true | undefined;
                  seatsPerTimeSlot?: true | undefined;
                  forwardParamsSuccessRedirect?: true | undefined;
                  successRedirectUrl?: true | undefined;
                  seatsShowAvailabilityCount?: true | undefined;
                  isInstantEvent?: true | undefined;
                  teamId?: true | undefined;
                  parentId?: true | undefined;
                  destinationCalendar?: true | undefined;
                  team?: true | undefined;
                  hashedLink?: true | undefined;
                  secondaryEmail?: true | undefined;
                  webhooks?: true | undefined;
                  workflows?: true | undefined;
                  _count?: true | undefined;
                  users?: true | undefined;
                  parent?: true | undefined;
                  children?: true | undefined;
                  position?: true | undefined;
                  hidden?: true | undefined;
                  profileId?: true | undefined;
                  eventName?: true | undefined;
                  periodType?: true | undefined;
                  periodStartDate?: true | undefined;
                  periodEndDate?: true | undefined;
                  periodDays?: true | undefined;
                  periodCountCalendarDays?: true | undefined;
                  requiresConfirmationWillBlockSlot?: true | undefined;
                  requiresBookerEmailVerification?: true | undefined;
                  recurringEvent?: true | undefined;
                  hideCalendarNotes?: true | undefined;
                  seatsShowAttendees?: true | undefined;
                  bookingLimits?: true | undefined;
                  durationLimits?: true | undefined;
                  instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                  useEventTypeDestinationCalendarEmail?: true | undefined;
                  isRRWeightsEnabled?: true | undefined;
                  eventTypeColor?: true | undefined;
                  rescheduleWithSameRoundRobinHost?: true | undefined;
                  secondaryEmailId?: true | undefined;
                  owner?: true | undefined;
                  customInputs?: true | undefined;
                  aiPhoneCallConfig?: true | undefined;
                }
              | undefined;
          }
        | undefined;
      requiresConfirmationThreshold?:
        | {
            time: number;
            unit: import("dayjs").UnitTypeLongPlural;
          }
        | undefined;
      bookerLayouts?:
        | {
            enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
            defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
          }
        | null
        | undefined;
    };
    requiresConfirmation: boolean;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    seatsShowAvailabilityCount: boolean | null;
    isInstantEvent: boolean;
    users: {
      id: number;
      name: string | null;
      username: string | null;
      avatarUrl: string | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      weekStart: string;
      metadata: {
        proPaidForByTeamId?: number | undefined;
        stripeCustomerId?: string | undefined;
        vitalSettings?:
          | {
              connected?: boolean | undefined;
              selectedParam?: string | undefined;
              sleepValue?: number | undefined;
            }
          | undefined;
        isPremium?: boolean | undefined;
        sessionTimeout?: number | undefined;
        defaultConferencingApp?:
          | {
              appSlug?: string | undefined;
              appLink?: string | undefined;
            }
          | undefined;
        defaultBookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
        emailChangeWaitingForVerification?: string | undefined;
        migratedToOrgFrom?:
          | {
              username?: string | null | undefined;
              lastMigrationTime?: string | undefined;
              reverted?: boolean | undefined;
              revertTime?: string | undefined;
            }
          | undefined;
      };
    }[];
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  } | null>;
  getUserEventTypes(userId: number): Promise<
    {
      id: number;
      ownerId: number;
      lengthInMinutes: number;
      title: string;
      slug: string;
      description: string;
      locations: any;
      bookingFields: any;
      recurrence: any;
      disableGuests: boolean;
      slotInterval: number | null;
      minimumBookingNotice: number;
      beforeEventBuffer: number;
      afterEventBuffer: number;
      schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
      metadata: {
        apps?:
          | {
              stripe?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              alby?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              basecamp3?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              campsite?: {} | undefined;
              closecom?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              dailyvideo?: {} | undefined;
              fathom?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              feishucalendar?: {} | undefined;
              ga4?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              giphy?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    thankYouPage?: string | undefined;
                  }
                | undefined;
              googlecalendar?: {} | undefined;
              googlevideo?: {} | undefined;
              gtm?:
                | {
                    trackingId: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              hubspot?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              intercom?: {} | undefined;
              jelly?: {} | undefined;
              jitsivideo?: {} | undefined;
              larkcalendar?: {} | undefined;
              make?: {} | undefined;
              matomo?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    MATOMO_URL?: string | undefined;
                    SITE_ID?: string | undefined;
                  }
                | undefined;
              metapixel?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                  }
                | undefined;
              "mock-payment-app"?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              office365calendar?:
                | {
                    client_id: string;
                    client_secret: string;
                  }
                | undefined;
              office365video?:
                | {
                    client_id: string;
                    client_secret: string;
                  }
                | undefined;
              paypal?:
                | {
                    price: number;
                    currency: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    paymentOption?: string | undefined;
                  }
                | undefined;
              "pipedrive-crm"?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              plausible?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    trackingId?: string | undefined;
                    PLAUSIBLE_URL?: string | undefined;
                  }
                | undefined;
              posthog?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    TRACKING_ID?: string | undefined;
                    API_HOST?: string | undefined;
                  }
                | undefined;
              qr_code?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              "routing-forms"?: any;
              salesforce?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    roundRobinLeadSkip?: boolean | undefined;
                    skipContactCreation?: boolean | undefined;
                  }
                | undefined;
              shimmervideo?: {} | undefined;
              tandemvideo?: {} | undefined;
              "booking-pages-tag"?:
                | {
                    trackingId: string;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              "event-type-app-card"?:
                | {
                    isSunrise: boolean;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              twipla?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    SITE_ID?: string | undefined;
                  }
                | undefined;
              umami?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                    SITE_ID?: string | undefined;
                    SCRIPT_URL?: string | undefined;
                  }
                | undefined;
              vital?: {} | undefined;
              webex?: {} | undefined;
              wordpress?:
                | {
                    isSunrise: boolean;
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zapier?: {} | undefined;
              "zoho-bigin"?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zohocalendar?: {} | undefined;
              zohocrm?:
                | {
                    credentialId?: number | undefined;
                    enabled?: boolean | undefined;
                    appCategories?: string[] | undefined;
                  }
                | undefined;
              zoomvideo?: {} | undefined;
            }
          | undefined;
        config?:
          | {
              useHostSchedulesForTeamEvent?: boolean | undefined;
            }
          | undefined;
        smartContractAddress?: string | undefined;
        blockchainId?: number | undefined;
        multipleDuration?: number[] | undefined;
        giphyThankYouPage?: string | undefined;
        additionalNotesRequired?: boolean | undefined;
        disableSuccessPage?: boolean | undefined;
        disableStandardEmails?:
          | {
              all?:
                | {
                    host?: boolean | undefined;
                    attendee?: boolean | undefined;
                  }
                | undefined;
              confirmation?:
                | {
                    host?: boolean | undefined;
                    attendee?: boolean | undefined;
                  }
                | undefined;
            }
          | undefined;
        managedEventConfig?:
          | {
              unlockedFields?:
                | {
                    length?: true | undefined;
                    schedule?: true | undefined;
                    profile?: true | undefined;
                    bookings?: true | undefined;
                    description?: true | undefined;
                    title?: true | undefined;
                    timeZone?: true | undefined;
                    availability?: true | undefined;
                    userId?: true | undefined;
                    slug?: true | undefined;
                    locations?: true | undefined;
                    bookingFields?: true | undefined;
                    disableGuests?: true | undefined;
                    slotInterval?: true | undefined;
                    minimumBookingNotice?: true | undefined;
                    beforeEventBuffer?: true | undefined;
                    afterEventBuffer?: true | undefined;
                    scheduleId?: true | undefined;
                    onlyShowFirstAvailableSlot?: true | undefined;
                    offsetStart?: true | undefined;
                    schedulingType?: true | undefined;
                    hosts?: true | undefined;
                    assignAllTeamMembers?: true | undefined;
                    metadata?: true | undefined;
                    requiresConfirmation?: true | undefined;
                    price?: true | undefined;
                    currency?: true | undefined;
                    lockTimeZoneToggleOnBookingPage?: true | undefined;
                    seatsPerTimeSlot?: true | undefined;
                    forwardParamsSuccessRedirect?: true | undefined;
                    successRedirectUrl?: true | undefined;
                    seatsShowAvailabilityCount?: true | undefined;
                    isInstantEvent?: true | undefined;
                    teamId?: true | undefined;
                    parentId?: true | undefined;
                    destinationCalendar?: true | undefined;
                    team?: true | undefined;
                    hashedLink?: true | undefined;
                    secondaryEmail?: true | undefined;
                    webhooks?: true | undefined;
                    workflows?: true | undefined;
                    _count?: true | undefined;
                    users?: true | undefined;
                    parent?: true | undefined;
                    children?: true | undefined;
                    position?: true | undefined;
                    hidden?: true | undefined;
                    profileId?: true | undefined;
                    eventName?: true | undefined;
                    periodType?: true | undefined;
                    periodStartDate?: true | undefined;
                    periodEndDate?: true | undefined;
                    periodDays?: true | undefined;
                    periodCountCalendarDays?: true | undefined;
                    requiresConfirmationWillBlockSlot?: true | undefined;
                    requiresBookerEmailVerification?: true | undefined;
                    recurringEvent?: true | undefined;
                    hideCalendarNotes?: true | undefined;
                    seatsShowAttendees?: true | undefined;
                    bookingLimits?: true | undefined;
                    durationLimits?: true | undefined;
                    instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                    useEventTypeDestinationCalendarEmail?: true | undefined;
                    isRRWeightsEnabled?: true | undefined;
                    eventTypeColor?: true | undefined;
                    rescheduleWithSameRoundRobinHost?: true | undefined;
                    secondaryEmailId?: true | undefined;
                    owner?: true | undefined;
                    customInputs?: true | undefined;
                    aiPhoneCallConfig?: true | undefined;
                  }
                | undefined;
            }
          | undefined;
        requiresConfirmationThreshold?:
          | {
              time: number;
              unit: import("dayjs").UnitTypeLongPlural;
            }
          | undefined;
        bookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
      };
      requiresConfirmation: boolean;
      price: number;
      currency: string;
      lockTimeZoneToggleOnBookingPage: boolean;
      seatsPerTimeSlot: number | null;
      forwardParamsSuccessRedirect: boolean | null;
      successRedirectUrl: string | null;
      seatsShowAvailabilityCount: boolean | null;
      isInstantEvent: boolean;
      users: {
        id: number;
        name: string | null;
        username: string | null;
        avatarUrl: string | null;
        brandColor: string | null;
        darkBrandColor: string | null;
        weekStart: string;
        metadata: {
          proPaidForByTeamId?: number | undefined;
          stripeCustomerId?: string | undefined;
          vitalSettings?:
            | {
                connected?: boolean | undefined;
                selectedParam?: string | undefined;
                sleepValue?: number | undefined;
              }
            | undefined;
          isPremium?: boolean | undefined;
          sessionTimeout?: number | undefined;
          defaultConferencingApp?:
            | {
                appSlug?: string | undefined;
                appLink?: string | undefined;
              }
            | undefined;
          defaultBookerLayouts?:
            | {
                enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
                defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
              }
            | null
            | undefined;
          emailChangeWaitingForVerification?: string | undefined;
          migratedToOrgFrom?:
            | {
                username?: string | null | undefined;
                lastMigrationTime?: string | undefined;
                reverted?: boolean | undefined;
                revertTime?: string | undefined;
              }
            | undefined;
        };
      }[];
      scheduleId: number | null;
      bookingLimitsCount: any;
      bookingLimitsDuration: any;
      onlyShowFirstAvailableSlot: boolean;
      offsetStart: number;
      bookingWindow: any;
    }[]
  >;
  getUserEventTypeForAtom(user: UserWithProfile, eventTypeId: number): Promise<any>;
  getEventTypesPublicByUsername(username: string): Promise<EventTypesPublic>;
  getEventTypes(queryParams: GetEventTypesQuery_2024_06_14): Promise<EventTypeOutput_2024_06_14[]>;
  getDynamicEventType(usernames: string[]): Promise<{
    id: number;
    ownerId: number;
    lengthInMinutes: number;
    title: string;
    slug: string;
    description: string;
    locations: any;
    bookingFields: any;
    recurrence: any;
    disableGuests: boolean;
    slotInterval: number | null;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    metadata: {
      apps?:
        | {
            stripe?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            alby?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            basecamp3?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            campsite?: {} | undefined;
            closecom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            dailyvideo?: {} | undefined;
            fathom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            feishucalendar?: {} | undefined;
            ga4?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            giphy?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  thankYouPage?: string | undefined;
                }
              | undefined;
            googlecalendar?: {} | undefined;
            googlevideo?: {} | undefined;
            gtm?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            hubspot?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            intercom?: {} | undefined;
            jelly?: {} | undefined;
            jitsivideo?: {} | undefined;
            larkcalendar?: {} | undefined;
            make?: {} | undefined;
            matomo?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  MATOMO_URL?: string | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            metapixel?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            "mock-payment-app"?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            office365calendar?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            office365video?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            paypal?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            "pipedrive-crm"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            plausible?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                  PLAUSIBLE_URL?: string | undefined;
                }
              | undefined;
            posthog?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  TRACKING_ID?: string | undefined;
                  API_HOST?: string | undefined;
                }
              | undefined;
            qr_code?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "routing-forms"?: any;
            salesforce?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  roundRobinLeadSkip?: boolean | undefined;
                  skipContactCreation?: boolean | undefined;
                }
              | undefined;
            shimmervideo?: {} | undefined;
            tandemvideo?: {} | undefined;
            "booking-pages-tag"?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "event-type-app-card"?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            twipla?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            umami?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                  SCRIPT_URL?: string | undefined;
                }
              | undefined;
            vital?: {} | undefined;
            webex?: {} | undefined;
            wordpress?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zapier?: {} | undefined;
            "zoho-bigin"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zohocalendar?: {} | undefined;
            zohocrm?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zoomvideo?: {} | undefined;
          }
        | undefined;
      config?:
        | {
            useHostSchedulesForTeamEvent?: boolean | undefined;
          }
        | undefined;
      smartContractAddress?: string | undefined;
      blockchainId?: number | undefined;
      multipleDuration?: number[] | undefined;
      giphyThankYouPage?: string | undefined;
      additionalNotesRequired?: boolean | undefined;
      disableSuccessPage?: boolean | undefined;
      disableStandardEmails?:
        | {
            all?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
            confirmation?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
          }
        | undefined;
      managedEventConfig?:
        | {
            unlockedFields?:
              | {
                  length?: true | undefined;
                  schedule?: true | undefined;
                  profile?: true | undefined;
                  bookings?: true | undefined;
                  description?: true | undefined;
                  title?: true | undefined;
                  timeZone?: true | undefined;
                  availability?: true | undefined;
                  userId?: true | undefined;
                  slug?: true | undefined;
                  locations?: true | undefined;
                  bookingFields?: true | undefined;
                  disableGuests?: true | undefined;
                  slotInterval?: true | undefined;
                  minimumBookingNotice?: true | undefined;
                  beforeEventBuffer?: true | undefined;
                  afterEventBuffer?: true | undefined;
                  scheduleId?: true | undefined;
                  onlyShowFirstAvailableSlot?: true | undefined;
                  offsetStart?: true | undefined;
                  schedulingType?: true | undefined;
                  hosts?: true | undefined;
                  assignAllTeamMembers?: true | undefined;
                  metadata?: true | undefined;
                  requiresConfirmation?: true | undefined;
                  price?: true | undefined;
                  currency?: true | undefined;
                  lockTimeZoneToggleOnBookingPage?: true | undefined;
                  seatsPerTimeSlot?: true | undefined;
                  forwardParamsSuccessRedirect?: true | undefined;
                  successRedirectUrl?: true | undefined;
                  seatsShowAvailabilityCount?: true | undefined;
                  isInstantEvent?: true | undefined;
                  teamId?: true | undefined;
                  parentId?: true | undefined;
                  destinationCalendar?: true | undefined;
                  team?: true | undefined;
                  hashedLink?: true | undefined;
                  secondaryEmail?: true | undefined;
                  webhooks?: true | undefined;
                  workflows?: true | undefined;
                  _count?: true | undefined;
                  users?: true | undefined;
                  parent?: true | undefined;
                  children?: true | undefined;
                  position?: true | undefined;
                  hidden?: true | undefined;
                  profileId?: true | undefined;
                  eventName?: true | undefined;
                  periodType?: true | undefined;
                  periodStartDate?: true | undefined;
                  periodEndDate?: true | undefined;
                  periodDays?: true | undefined;
                  periodCountCalendarDays?: true | undefined;
                  requiresConfirmationWillBlockSlot?: true | undefined;
                  requiresBookerEmailVerification?: true | undefined;
                  recurringEvent?: true | undefined;
                  hideCalendarNotes?: true | undefined;
                  seatsShowAttendees?: true | undefined;
                  bookingLimits?: true | undefined;
                  durationLimits?: true | undefined;
                  instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                  useEventTypeDestinationCalendarEmail?: true | undefined;
                  isRRWeightsEnabled?: true | undefined;
                  eventTypeColor?: true | undefined;
                  rescheduleWithSameRoundRobinHost?: true | undefined;
                  secondaryEmailId?: true | undefined;
                  owner?: true | undefined;
                  customInputs?: true | undefined;
                  aiPhoneCallConfig?: true | undefined;
                }
              | undefined;
          }
        | undefined;
      requiresConfirmationThreshold?:
        | {
            time: number;
            unit: import("dayjs").UnitTypeLongPlural;
          }
        | undefined;
      bookerLayouts?:
        | {
            enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
            defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
          }
        | null
        | undefined;
    };
    requiresConfirmation: boolean;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    seatsShowAvailabilityCount: boolean | null;
    isInstantEvent: boolean;
    users: {
      id: number;
      name: string | null;
      username: string | null;
      avatarUrl: string | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      weekStart: string;
      metadata: {
        proPaidForByTeamId?: number | undefined;
        stripeCustomerId?: string | undefined;
        vitalSettings?:
          | {
              connected?: boolean | undefined;
              selectedParam?: string | undefined;
              sleepValue?: number | undefined;
            }
          | undefined;
        isPremium?: boolean | undefined;
        sessionTimeout?: number | undefined;
        defaultConferencingApp?:
          | {
              appSlug?: string | undefined;
              appLink?: string | undefined;
            }
          | undefined;
        defaultBookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
        emailChangeWaitingForVerification?: string | undefined;
        migratedToOrgFrom?:
          | {
              username?: string | null | undefined;
              lastMigrationTime?: string | undefined;
              reverted?: boolean | undefined;
              revertTime?: string | undefined;
            }
          | undefined;
      };
    }[];
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  }>;
  createUserDefaultEventTypes(userId: number): Promise<
    [
      {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        position: number;
        locations: import("@prisma/client/runtime/library").JsonValue;
        length: number;
        offsetStart: number;
        hidden: boolean;
        userId: number | null;
        profileId: number | null;
        teamId: number | null;
        eventName: string | null;
        parentId: number | null;
        bookingFields: import("@prisma/client/runtime/library").JsonValue;
        timeZone: string | null;
        periodType: import(".prisma/client").$Enums.PeriodType;
        periodStartDate: Date | null;
        periodEndDate: Date | null;
        periodDays: number | null;
        periodCountCalendarDays: boolean | null;
        lockTimeZoneToggleOnBookingPage: boolean;
        requiresConfirmation: boolean;
        requiresConfirmationWillBlockSlot: boolean;
        requiresBookerEmailVerification: boolean;
        recurringEvent: import("@prisma/client/runtime/library").JsonValue;
        disableGuests: boolean;
        hideCalendarNotes: boolean;
        minimumBookingNotice: number;
        beforeEventBuffer: number;
        afterEventBuffer: number;
        seatsPerTimeSlot: number | null;
        onlyShowFirstAvailableSlot: boolean;
        seatsShowAttendees: boolean | null;
        seatsShowAvailabilityCount: boolean | null;
        schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
        scheduleId: number | null;
        price: number;
        currency: string;
        slotInterval: number | null;
        metadata: import("@prisma/client/runtime/library").JsonValue;
        successRedirectUrl: string | null;
        forwardParamsSuccessRedirect: boolean | null;
        bookingLimits: import("@prisma/client/runtime/library").JsonValue;
        durationLimits: import("@prisma/client/runtime/library").JsonValue;
        isInstantEvent: boolean;
        instantMeetingExpiryTimeOffsetInSeconds: number;
        assignAllTeamMembers: boolean;
        useEventTypeDestinationCalendarEmail: boolean;
        isRRWeightsEnabled: boolean;
        eventTypeColor: import("@prisma/client/runtime/library").JsonValue;
        rescheduleWithSameRoundRobinHost: boolean;
        secondaryEmailId: number | null;
      },
      {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        position: number;
        locations: import("@prisma/client/runtime/library").JsonValue;
        length: number;
        offsetStart: number;
        hidden: boolean;
        userId: number | null;
        profileId: number | null;
        teamId: number | null;
        eventName: string | null;
        parentId: number | null;
        bookingFields: import("@prisma/client/runtime/library").JsonValue;
        timeZone: string | null;
        periodType: import(".prisma/client").$Enums.PeriodType;
        periodStartDate: Date | null;
        periodEndDate: Date | null;
        periodDays: number | null;
        periodCountCalendarDays: boolean | null;
        lockTimeZoneToggleOnBookingPage: boolean;
        requiresConfirmation: boolean;
        requiresConfirmationWillBlockSlot: boolean;
        requiresBookerEmailVerification: boolean;
        recurringEvent: import("@prisma/client/runtime/library").JsonValue;
        disableGuests: boolean;
        hideCalendarNotes: boolean;
        minimumBookingNotice: number;
        beforeEventBuffer: number;
        afterEventBuffer: number;
        seatsPerTimeSlot: number | null;
        onlyShowFirstAvailableSlot: boolean;
        seatsShowAttendees: boolean | null;
        seatsShowAvailabilityCount: boolean | null;
        schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
        scheduleId: number | null;
        price: number;
        currency: string;
        slotInterval: number | null;
        metadata: import("@prisma/client/runtime/library").JsonValue;
        successRedirectUrl: string | null;
        forwardParamsSuccessRedirect: boolean | null;
        bookingLimits: import("@prisma/client/runtime/library").JsonValue;
        durationLimits: import("@prisma/client/runtime/library").JsonValue;
        isInstantEvent: boolean;
        instantMeetingExpiryTimeOffsetInSeconds: number;
        assignAllTeamMembers: boolean;
        useEventTypeDestinationCalendarEmail: boolean;
        isRRWeightsEnabled: boolean;
        eventTypeColor: import("@prisma/client/runtime/library").JsonValue;
        rescheduleWithSameRoundRobinHost: boolean;
        secondaryEmailId: number | null;
      },
      {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        position: number;
        locations: import("@prisma/client/runtime/library").JsonValue;
        length: number;
        offsetStart: number;
        hidden: boolean;
        userId: number | null;
        profileId: number | null;
        teamId: number | null;
        eventName: string | null;
        parentId: number | null;
        bookingFields: import("@prisma/client/runtime/library").JsonValue;
        timeZone: string | null;
        periodType: import(".prisma/client").$Enums.PeriodType;
        periodStartDate: Date | null;
        periodEndDate: Date | null;
        periodDays: number | null;
        periodCountCalendarDays: boolean | null;
        lockTimeZoneToggleOnBookingPage: boolean;
        requiresConfirmation: boolean;
        requiresConfirmationWillBlockSlot: boolean;
        requiresBookerEmailVerification: boolean;
        recurringEvent: import("@prisma/client/runtime/library").JsonValue;
        disableGuests: boolean;
        hideCalendarNotes: boolean;
        minimumBookingNotice: number;
        beforeEventBuffer: number;
        afterEventBuffer: number;
        seatsPerTimeSlot: number | null;
        onlyShowFirstAvailableSlot: boolean;
        seatsShowAttendees: boolean | null;
        seatsShowAvailabilityCount: boolean | null;
        schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
        scheduleId: number | null;
        price: number;
        currency: string;
        slotInterval: number | null;
        metadata: import("@prisma/client/runtime/library").JsonValue;
        successRedirectUrl: string | null;
        forwardParamsSuccessRedirect: boolean | null;
        bookingLimits: import("@prisma/client/runtime/library").JsonValue;
        durationLimits: import("@prisma/client/runtime/library").JsonValue;
        isInstantEvent: boolean;
        instantMeetingExpiryTimeOffsetInSeconds: number;
        assignAllTeamMembers: boolean;
        useEventTypeDestinationCalendarEmail: boolean;
        isRRWeightsEnabled: boolean;
        eventTypeColor: import("@prisma/client/runtime/library").JsonValue;
        rescheduleWithSameRoundRobinHost: boolean;
        secondaryEmailId: number | null;
      },
      {
        id: number;
        title: string;
        slug: string;
        description: string | null;
        position: number;
        locations: import("@prisma/client/runtime/library").JsonValue;
        length: number;
        offsetStart: number;
        hidden: boolean;
        userId: number | null;
        profileId: number | null;
        teamId: number | null;
        eventName: string | null;
        parentId: number | null;
        bookingFields: import("@prisma/client/runtime/library").JsonValue;
        timeZone: string | null;
        periodType: import(".prisma/client").$Enums.PeriodType;
        periodStartDate: Date | null;
        periodEndDate: Date | null;
        periodDays: number | null;
        periodCountCalendarDays: boolean | null;
        lockTimeZoneToggleOnBookingPage: boolean;
        requiresConfirmation: boolean;
        requiresConfirmationWillBlockSlot: boolean;
        requiresBookerEmailVerification: boolean;
        recurringEvent: import("@prisma/client/runtime/library").JsonValue;
        disableGuests: boolean;
        hideCalendarNotes: boolean;
        minimumBookingNotice: number;
        beforeEventBuffer: number;
        afterEventBuffer: number;
        seatsPerTimeSlot: number | null;
        onlyShowFirstAvailableSlot: boolean;
        seatsShowAttendees: boolean | null;
        seatsShowAvailabilityCount: boolean | null;
        schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
        scheduleId: number | null;
        price: number;
        currency: string;
        slotInterval: number | null;
        metadata: import("@prisma/client/runtime/library").JsonValue;
        successRedirectUrl: string | null;
        forwardParamsSuccessRedirect: boolean | null;
        bookingLimits: import("@prisma/client/runtime/library").JsonValue;
        durationLimits: import("@prisma/client/runtime/library").JsonValue;
        isInstantEvent: boolean;
        instantMeetingExpiryTimeOffsetInSeconds: number;
        assignAllTeamMembers: boolean;
        useEventTypeDestinationCalendarEmail: boolean;
        isRRWeightsEnabled: boolean;
        eventTypeColor: import("@prisma/client/runtime/library").JsonValue;
        rescheduleWithSameRoundRobinHost: boolean;
        secondaryEmailId: number | null;
      }
    ]
  >;
  updateEventType(
    eventTypeId: number,
    body: UpdateEventTypeInput_2024_06_14,
    user: UserWithProfile
  ): Promise<{
    id: number;
    ownerId: number;
    lengthInMinutes: number;
    title: string;
    slug: string;
    description: string;
    locations: any;
    bookingFields: any;
    recurrence: any;
    disableGuests: boolean;
    slotInterval: number | null;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    metadata: {
      apps?:
        | {
            stripe?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            alby?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            basecamp3?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            campsite?: {} | undefined;
            closecom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            dailyvideo?: {} | undefined;
            fathom?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            feishucalendar?: {} | undefined;
            ga4?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            giphy?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  thankYouPage?: string | undefined;
                }
              | undefined;
            googlecalendar?: {} | undefined;
            googlevideo?: {} | undefined;
            gtm?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            hubspot?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            intercom?: {} | undefined;
            jelly?: {} | undefined;
            jitsivideo?: {} | undefined;
            larkcalendar?: {} | undefined;
            make?: {} | undefined;
            matomo?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  MATOMO_URL?: string | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            metapixel?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                }
              | undefined;
            "mock-payment-app"?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            office365calendar?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            office365video?:
              | {
                  client_id: string;
                  client_secret: string;
                }
              | undefined;
            paypal?:
              | {
                  price: number;
                  currency: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  paymentOption?: string | undefined;
                }
              | undefined;
            "pipedrive-crm"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            plausible?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  trackingId?: string | undefined;
                  PLAUSIBLE_URL?: string | undefined;
                }
              | undefined;
            posthog?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  TRACKING_ID?: string | undefined;
                  API_HOST?: string | undefined;
                }
              | undefined;
            qr_code?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "routing-forms"?: any;
            salesforce?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  roundRobinLeadSkip?: boolean | undefined;
                  skipContactCreation?: boolean | undefined;
                }
              | undefined;
            shimmervideo?: {} | undefined;
            tandemvideo?: {} | undefined;
            "booking-pages-tag"?:
              | {
                  trackingId: string;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            "event-type-app-card"?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            twipla?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                }
              | undefined;
            umami?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                  SITE_ID?: string | undefined;
                  SCRIPT_URL?: string | undefined;
                }
              | undefined;
            vital?: {} | undefined;
            webex?: {} | undefined;
            wordpress?:
              | {
                  isSunrise: boolean;
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zapier?: {} | undefined;
            "zoho-bigin"?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zohocalendar?: {} | undefined;
            zohocrm?:
              | {
                  credentialId?: number | undefined;
                  enabled?: boolean | undefined;
                  appCategories?: string[] | undefined;
                }
              | undefined;
            zoomvideo?: {} | undefined;
          }
        | undefined;
      config?:
        | {
            useHostSchedulesForTeamEvent?: boolean | undefined;
          }
        | undefined;
      smartContractAddress?: string | undefined;
      blockchainId?: number | undefined;
      multipleDuration?: number[] | undefined;
      giphyThankYouPage?: string | undefined;
      additionalNotesRequired?: boolean | undefined;
      disableSuccessPage?: boolean | undefined;
      disableStandardEmails?:
        | {
            all?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
            confirmation?:
              | {
                  host?: boolean | undefined;
                  attendee?: boolean | undefined;
                }
              | undefined;
          }
        | undefined;
      managedEventConfig?:
        | {
            unlockedFields?:
              | {
                  length?: true | undefined;
                  schedule?: true | undefined;
                  profile?: true | undefined;
                  bookings?: true | undefined;
                  description?: true | undefined;
                  title?: true | undefined;
                  timeZone?: true | undefined;
                  availability?: true | undefined;
                  userId?: true | undefined;
                  slug?: true | undefined;
                  locations?: true | undefined;
                  bookingFields?: true | undefined;
                  disableGuests?: true | undefined;
                  slotInterval?: true | undefined;
                  minimumBookingNotice?: true | undefined;
                  beforeEventBuffer?: true | undefined;
                  afterEventBuffer?: true | undefined;
                  scheduleId?: true | undefined;
                  onlyShowFirstAvailableSlot?: true | undefined;
                  offsetStart?: true | undefined;
                  schedulingType?: true | undefined;
                  hosts?: true | undefined;
                  assignAllTeamMembers?: true | undefined;
                  metadata?: true | undefined;
                  requiresConfirmation?: true | undefined;
                  price?: true | undefined;
                  currency?: true | undefined;
                  lockTimeZoneToggleOnBookingPage?: true | undefined;
                  seatsPerTimeSlot?: true | undefined;
                  forwardParamsSuccessRedirect?: true | undefined;
                  successRedirectUrl?: true | undefined;
                  seatsShowAvailabilityCount?: true | undefined;
                  isInstantEvent?: true | undefined;
                  teamId?: true | undefined;
                  parentId?: true | undefined;
                  destinationCalendar?: true | undefined;
                  team?: true | undefined;
                  hashedLink?: true | undefined;
                  secondaryEmail?: true | undefined;
                  webhooks?: true | undefined;
                  workflows?: true | undefined;
                  _count?: true | undefined;
                  users?: true | undefined;
                  parent?: true | undefined;
                  children?: true | undefined;
                  position?: true | undefined;
                  hidden?: true | undefined;
                  profileId?: true | undefined;
                  eventName?: true | undefined;
                  periodType?: true | undefined;
                  periodStartDate?: true | undefined;
                  periodEndDate?: true | undefined;
                  periodDays?: true | undefined;
                  periodCountCalendarDays?: true | undefined;
                  requiresConfirmationWillBlockSlot?: true | undefined;
                  requiresBookerEmailVerification?: true | undefined;
                  recurringEvent?: true | undefined;
                  hideCalendarNotes?: true | undefined;
                  seatsShowAttendees?: true | undefined;
                  bookingLimits?: true | undefined;
                  durationLimits?: true | undefined;
                  instantMeetingExpiryTimeOffsetInSeconds?: true | undefined;
                  useEventTypeDestinationCalendarEmail?: true | undefined;
                  isRRWeightsEnabled?: true | undefined;
                  eventTypeColor?: true | undefined;
                  rescheduleWithSameRoundRobinHost?: true | undefined;
                  secondaryEmailId?: true | undefined;
                  owner?: true | undefined;
                  customInputs?: true | undefined;
                  aiPhoneCallConfig?: true | undefined;
                }
              | undefined;
          }
        | undefined;
      requiresConfirmationThreshold?:
        | {
            time: number;
            unit: import("dayjs").UnitTypeLongPlural;
          }
        | undefined;
      bookerLayouts?:
        | {
            enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
            defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
          }
        | null
        | undefined;
    };
    requiresConfirmation: boolean;
    price: number;
    currency: string;
    lockTimeZoneToggleOnBookingPage: boolean;
    seatsPerTimeSlot: number | null;
    forwardParamsSuccessRedirect: boolean | null;
    successRedirectUrl: string | null;
    seatsShowAvailabilityCount: boolean | null;
    isInstantEvent: boolean;
    users: {
      id: number;
      name: string | null;
      username: string | null;
      avatarUrl: string | null;
      brandColor: string | null;
      darkBrandColor: string | null;
      weekStart: string;
      metadata: {
        proPaidForByTeamId?: number | undefined;
        stripeCustomerId?: string | undefined;
        vitalSettings?:
          | {
              connected?: boolean | undefined;
              selectedParam?: string | undefined;
              sleepValue?: number | undefined;
            }
          | undefined;
        isPremium?: boolean | undefined;
        sessionTimeout?: number | undefined;
        defaultConferencingApp?:
          | {
              appSlug?: string | undefined;
              appLink?: string | undefined;
            }
          | undefined;
        defaultBookerLayouts?:
          | {
              enabledLayouts: import("@calcom/prisma/zod-utils").BookerLayouts[];
              defaultLayout: import("@calcom/prisma/zod-utils").BookerLayouts;
            }
          | null
          | undefined;
        emailChangeWaitingForVerification?: string | undefined;
        migratedToOrgFrom?:
          | {
              username?: string | null | undefined;
              lastMigrationTime?: string | undefined;
              reverted?: boolean | undefined;
              revertTime?: string | undefined;
            }
          | undefined;
      };
    }[];
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  }>;
  checkCanUpdateEventType(userId: number, eventTypeId: number, scheduleId: number | undefined): Promise<void>;
  getUserToUpdateEvent(user: UserWithProfile): Promise<{
    profile: {
      id: number | null;
    };
    selectedCalendars: {
      userId: number;
      integration: string;
      externalId: string;
      credentialId: number | null;
    }[];
    id: number;
    username: string | null;
    name: string | null;
    email: string;
    emailVerified: Date | null;
    bio: string | null;
    avatarUrl: string | null;
    timeZone: string;
    weekStart: string;
    startTime: number;
    endTime: number;
    bufferTime: number;
    hideBranding: boolean;
    theme: string | null;
    appTheme: string | null;
    createdDate: Date;
    trialEndsAt: Date | null;
    defaultScheduleId: number | null;
    completedOnboarding: boolean;
    locale: string | null;
    timeFormat: number | null;
    twoFactorSecret: string | null;
    twoFactorEnabled: boolean;
    backupCodes: string | null;
    identityProvider: import(".prisma/client").$Enums.IdentityProvider;
    identityProviderId: string | null;
    invitedTo: number | null;
    brandColor: string | null;
    darkBrandColor: string | null;
    allowDynamicBooking: boolean | null;
    allowSEOIndexing: boolean | null;
    receiveMonthlyDigestEmail: boolean | null;
    metadata: import("@prisma/client/runtime/library").JsonValue;
    verified: boolean | null;
    role: import(".prisma/client").$Enums.UserPermissionRole;
    disableImpersonation: boolean;
    organizationId: number | null;
    locked: boolean;
    movedToProfileId: number | null;
    isPlatformManaged: boolean;
    smsLockState: import(".prisma/client").$Enums.SMSLockState;
    smsLockReviewedByAdmin: boolean;
    movedToProfile?:
      | ({
          id: number;
          uid: string;
          userId: number;
          organizationId: number;
          username: string;
          createdAt: Date;
          updatedAt: Date;
        } & {
          organization: Pick<
            {
              id: number;
              name: string;
              slug: string | null;
              logoUrl: string | null;
              calVideoLogo: string | null;
              appLogo: string | null;
              appIconLogo: string | null;
              bio: string | null;
              hideBranding: boolean;
              isPrivate: boolean;
              hideBookATeamMember: boolean;
              createdAt: Date;
              metadata: import("@prisma/client/runtime/library").JsonValue;
              theme: string | null;
              brandColor: string | null;
              darkBrandColor: string | null;
              bannerUrl: string | null;
              parentId: number | null;
              timeFormat: number | null;
              timeZone: string;
              weekStart: string;
              isOrganization: boolean;
              pendingPayment: boolean;
              isPlatform: boolean;
              createdByOAuthClientId: string | null;
              smsLockState: import(".prisma/client").$Enums.SMSLockState;
              smsLockReviewedByAdmin: boolean;
            },
            "name" | "id" | "isPlatform" | "slug"
          >;
        })
      | null
      | undefined;
    profiles?:
      | ({
          id: number;
          uid: string;
          userId: number;
          organizationId: number;
          username: string;
          createdAt: Date;
          updatedAt: Date;
        } & {
          organization: Pick<
            {
              id: number;
              name: string;
              slug: string | null;
              logoUrl: string | null;
              calVideoLogo: string | null;
              appLogo: string | null;
              appIconLogo: string | null;
              bio: string | null;
              hideBranding: boolean;
              isPrivate: boolean;
              hideBookATeamMember: boolean;
              createdAt: Date;
              metadata: import("@prisma/client/runtime/library").JsonValue;
              theme: string | null;
              brandColor: string | null;
              darkBrandColor: string | null;
              bannerUrl: string | null;
              parentId: number | null;
              timeFormat: number | null;
              timeZone: string;
              weekStart: string;
              isOrganization: boolean;
              pendingPayment: boolean;
              isPlatform: boolean;
              createdByOAuthClientId: string | null;
              smsLockState: import(".prisma/client").$Enums.SMSLockState;
              smsLockReviewedByAdmin: boolean;
            },
            "name" | "id" | "isPlatform" | "slug"
          >;
        })[]
      | undefined;
  }>;
  deleteEventType(
    eventTypeId: number,
    userId: number
  ): Promise<{
    id: number;
    title: string;
    slug: string;
    description: string | null;
    position: number;
    locations: import("@prisma/client/runtime/library").JsonValue;
    length: number;
    offsetStart: number;
    hidden: boolean;
    userId: number | null;
    profileId: number | null;
    teamId: number | null;
    eventName: string | null;
    parentId: number | null;
    bookingFields: import("@prisma/client/runtime/library").JsonValue;
    timeZone: string | null;
    periodType: import(".prisma/client").$Enums.PeriodType;
    periodStartDate: Date | null;
    periodEndDate: Date | null;
    periodDays: number | null;
    periodCountCalendarDays: boolean | null;
    lockTimeZoneToggleOnBookingPage: boolean;
    requiresConfirmation: boolean;
    requiresConfirmationWillBlockSlot: boolean;
    requiresBookerEmailVerification: boolean;
    recurringEvent: import("@prisma/client/runtime/library").JsonValue;
    disableGuests: boolean;
    hideCalendarNotes: boolean;
    minimumBookingNotice: number;
    beforeEventBuffer: number;
    afterEventBuffer: number;
    seatsPerTimeSlot: number | null;
    onlyShowFirstAvailableSlot: boolean;
    seatsShowAttendees: boolean | null;
    seatsShowAvailabilityCount: boolean | null;
    schedulingType: import(".prisma/client").$Enums.SchedulingType | null;
    scheduleId: number | null;
    price: number;
    currency: string;
    slotInterval: number | null;
    metadata: import("@prisma/client/runtime/library").JsonValue;
    successRedirectUrl: string | null;
    forwardParamsSuccessRedirect: boolean | null;
    bookingLimits: import("@prisma/client/runtime/library").JsonValue;
    durationLimits: import("@prisma/client/runtime/library").JsonValue;
    isInstantEvent: boolean;
    instantMeetingExpiryTimeOffsetInSeconds: number;
    assignAllTeamMembers: boolean;
    useEventTypeDestinationCalendarEmail: boolean;
    isRRWeightsEnabled: boolean;
    eventTypeColor: import("@prisma/client/runtime/library").JsonValue;
    rescheduleWithSameRoundRobinHost: boolean;
    secondaryEmailId: number | null;
  }>;
  checkUserOwnsEventType(userId: number, eventType: Pick<EventType, "id" | "userId">): void;
  checkUserOwnsSchedule(userId: number, scheduleId: number | null | undefined): Promise<void>;
}
