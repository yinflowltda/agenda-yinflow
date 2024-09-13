import { EventTypesRepository_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/event-types.repository";
import { CreateEventTypeInput_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/create-event-type.input";
import { UpdateEventTypeInput_2024_04_15 } from "src/ee/event-types/event-types_2024_04_15/inputs/update-event-type.input";
import { EventTypeOutput } from "src/ee/event-types/event-types_2024_04_15/outputs/event-type.output";
import { MembershipsRepository } from "src/modules/memberships/memberships.repository";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { SelectedCalendarsRepository } from "src/modules/selected-calendars/selected-calendars.repository";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile, UsersRepository } from "src/modules/users/users.repository";

import { EventTypesPublic } from "@calcom/platform-libraries";
import { EventType } from "@calcom/prisma/client";

export declare class EventTypesService_2024_04_15 {
  private readonly eventTypesRepository;
  private readonly membershipsRepository;
  private readonly usersRepository;
  private readonly selectedCalendarsRepository;
  private readonly dbWrite;
  private usersService;
  constructor(
    eventTypesRepository: EventTypesRepository_2024_04_15,
    membershipsRepository: MembershipsRepository,
    usersRepository: UsersRepository,
    selectedCalendarsRepository: SelectedCalendarsRepository,
    dbWrite: PrismaWriteService,
    usersService: UsersService
  );
  createUserEventType(user: UserWithProfile, body: CreateEventTypeInput_2024_04_15): Promise<EventTypeOutput>;
  checkCanCreateEventType(userId: number, body: CreateEventTypeInput_2024_04_15): Promise<void>;
  getUserToCreateEvent(user: UserWithProfile): Promise<{
    id: number;
    role: import(".prisma/client").$Enums.UserPermissionRole;
    organizationId: number | null;
    organization: {
      isOrgAdmin: boolean;
    };
    profile: {
      id: number | null;
    };
    metadata: import("@prisma/client/runtime/library").JsonValue;
  }>;
  getUserEventType(
    userId: number,
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
  } | null>;
  getUserEventTypeForAtom(
    user: UserWithProfile,
    eventTypeId: number
  ): Promise<{
    eventType: EventTypeOutput;
  } | null>;
  getEventTypesPublicByUsername(username: string): Promise<EventTypesPublic>;
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
    body: UpdateEventTypeInput_2024_04_15,
    user: UserWithProfile
  ): Promise<EventTypeOutput>;
  checkCanUpdateEventType(userId: number, eventTypeId: number): Promise<void>;
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
}
