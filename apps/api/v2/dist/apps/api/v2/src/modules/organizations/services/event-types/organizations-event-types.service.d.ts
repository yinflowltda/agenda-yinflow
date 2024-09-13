import { EventTypesRepository_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/event-types.repository";
import { EventTypesService_2024_06_14 } from "src/ee/event-types/event-types_2024_06_14/services/event-types.service";
import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { OrganizationsEventTypesRepository } from "src/modules/organizations/repositories/organizations-event-types.repository";
import { OrganizationsTeamsRepository } from "src/modules/organizations/repositories/organizations-teams.repository";
import { InputOrganizationsEventTypesService } from "src/modules/organizations/services/event-types/input.service";
import { OutputOrganizationsEventTypesService } from "src/modules/organizations/services/event-types/output.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import {
  CreateTeamEventTypeInput_2024_06_14,
  UpdateTeamEventTypeInput_2024_06_14,
} from "@calcom/platform-types";

export declare class OrganizationsEventTypesService {
  private readonly inputService;
  private readonly eventTypesService;
  private readonly dbWrite;
  private readonly organizationEventTypesRepository;
  private readonly eventTypesRepository;
  private readonly outputService;
  private readonly membershipsRepository;
  private readonly organizationsTeamsRepository;
  private readonly usersService;
  constructor(
    inputService: InputOrganizationsEventTypesService,
    eventTypesService: EventTypesService_2024_06_14,
    dbWrite: PrismaWriteService,
    organizationEventTypesRepository: OrganizationsEventTypesRepository,
    eventTypesRepository: EventTypesRepository_2024_06_14,
    outputService: OutputOrganizationsEventTypesService,
    membershipsRepository: MembershipsRepository,
    organizationsTeamsRepository: OrganizationsTeamsRepository,
    usersService: UsersService
  );
  createTeamEventType(
    user: UserWithProfile,
    teamId: number,
    orgId: number,
    body: CreateTeamEventTypeInput_2024_06_14
  ): Promise<
    | {
        hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
        teamId: number | null;
        ownerId: number | null;
        parentEventTypeId: number | null;
        assignAllTeamMembers: boolean | undefined;
        id: number;
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
        scheduleId: number | null;
        bookingLimitsCount: any;
        bookingLimitsDuration: any;
        onlyShowFirstAvailableSlot: boolean;
        offsetStart: number;
        bookingWindow: any;
      }
    | {
        hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
        teamId: number | null;
        ownerId: number | null;
        parentEventTypeId: number | null;
        assignAllTeamMembers: boolean | undefined;
        id: number;
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
        scheduleId: number | null;
        bookingLimitsCount: any;
        bookingLimitsDuration: any;
        onlyShowFirstAvailableSlot: boolean;
        offsetStart: number;
        bookingWindow: any;
      }[]
  >;
  validateHosts(
    teamId: number,
    hosts: CreateTeamEventTypeInput_2024_06_14["hosts"] | undefined
  ): Promise<void>;
  validateEventTypeExists(teamId: number, eventTypeId: number): Promise<void>;
  getUserToCreateTeamEvent(
    user: UserWithProfile,
    organizationId: number
  ): Promise<{
    id: number;
    role: import(".prisma/client").$Enums.UserPermissionRole;
    organizationId: number | null;
    organization: {
      isOrgAdmin: boolean;
    };
    profile: {
      id: number | undefined;
    };
    metadata: import("@prisma/client/runtime/library").JsonValue;
  }>;
  getTeamEventType(
    teamId: number,
    eventTypeId: number
  ): Promise<{
    hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
    teamId: number | null;
    ownerId: number | null;
    parentEventTypeId: number | null;
    assignAllTeamMembers: boolean | undefined;
    id: number;
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
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  } | null>;
  getTeamEventTypeBySlug(
    teamId: number,
    eventTypeSlug: string
  ): Promise<{
    hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
    teamId: number | null;
    ownerId: number | null;
    parentEventTypeId: number | null;
    assignAllTeamMembers: boolean | undefined;
    id: number;
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
    scheduleId: number | null;
    bookingLimitsCount: any;
    bookingLimitsDuration: any;
    onlyShowFirstAvailableSlot: boolean;
    offsetStart: number;
    bookingWindow: any;
  } | null>;
  getTeamEventTypes(teamId: number): Promise<
    {
      hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
      teamId: number | null;
      ownerId: number | null;
      parentEventTypeId: number | null;
      assignAllTeamMembers: boolean | undefined;
      id: number;
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
      scheduleId: number | null;
      bookingLimitsCount: any;
      bookingLimitsDuration: any;
      onlyShowFirstAvailableSlot: boolean;
      offsetStart: number;
      bookingWindow: any;
    }[]
  >;
  getTeamsEventTypes(
    orgId: number,
    skip?: number,
    take?: number
  ): Promise<
    {
      hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
      teamId: number | null;
      ownerId: number | null;
      parentEventTypeId: number | null;
      assignAllTeamMembers: boolean | undefined;
      id: number;
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
      scheduleId: number | null;
      bookingLimitsCount: any;
      bookingLimitsDuration: any;
      onlyShowFirstAvailableSlot: boolean;
      offsetStart: number;
      bookingWindow: any;
    }[]
  >;
  updateTeamEventType(
    eventTypeId: number,
    teamId: number,
    body: UpdateTeamEventTypeInput_2024_06_14,
    user: UserWithProfile
  ): Promise<
    | {
        hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
        teamId: number | null;
        ownerId: number | null;
        parentEventTypeId: number | null;
        assignAllTeamMembers: boolean | undefined;
        id: number;
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
        scheduleId: number | null;
        bookingLimitsCount: any;
        bookingLimitsDuration: any;
        onlyShowFirstAvailableSlot: boolean;
        offsetStart: number;
        bookingWindow: any;
      }
    | {
        hosts: import("@calcom/platform-types").TeamEventTypeResponseHost[];
        teamId: number | null;
        ownerId: number | null;
        parentEventTypeId: number | null;
        assignAllTeamMembers: boolean | undefined;
        id: number;
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
        scheduleId: number | null;
        bookingLimitsCount: any;
        bookingLimitsDuration: any;
        onlyShowFirstAvailableSlot: boolean;
        offsetStart: number;
        bookingWindow: any;
      }[]
  >;
  deleteTeamEventType(
    teamId: number,
    eventTypeId: number
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
}
