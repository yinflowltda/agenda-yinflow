import type { EventType, User, Schedule } from "@prisma/client";

import { SystemField, UserField } from "@calcom/platform-libraries";
import { TransformFutureBookingsLimitSchema_2024_06_14 } from "@calcom/platform-types";

type EventTypeRelations = {
  users: User[];
  schedule: Schedule | null;
};
type DatabaseEventType = EventType & EventTypeRelations;
type Input = Pick<
  DatabaseEventType,
  | "id"
  | "length"
  | "title"
  | "description"
  | "disableGuests"
  | "slotInterval"
  | "minimumBookingNotice"
  | "beforeEventBuffer"
  | "afterEventBuffer"
  | "slug"
  | "schedulingType"
  | "requiresConfirmation"
  | "price"
  | "currency"
  | "lockTimeZoneToggleOnBookingPage"
  | "seatsPerTimeSlot"
  | "forwardParamsSuccessRedirect"
  | "successRedirectUrl"
  | "seatsShowAvailabilityCount"
  | "isInstantEvent"
  | "locations"
  | "bookingFields"
  | "recurringEvent"
  | "metadata"
  | "users"
  | "scheduleId"
  | "bookingLimits"
  | "durationLimits"
  | "onlyShowFirstAvailableSlot"
  | "offsetStart"
  | "periodType"
  | "periodDays"
  | "periodCountCalendarDays"
  | "periodStartDate"
  | "periodEndDate"
>;
export declare class OutputEventTypesService_2024_06_14 {
  getResponseEventType(
    ownerId: number,
    databaseEventType: Input
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
  transformLocations(locations: any): any;
  transformBookingFields(inputBookingFields: (SystemField | UserField)[] | null): any;
  transformRecurringEvent(recurringEvent: any): any;
  transformMetadata(metadata: any): {
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
  } | null;
  transformUsers(users: User[]): {
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
  transformIntervalLimits(bookingLimits: any): any;
  transformBookingWindow(bookingLimits: TransformFutureBookingsLimitSchema_2024_06_14): any;
}
export {};
