import { PrismaReadService } from "src/modules/prisma/prisma-read.service";
import { PrismaWriteService } from "src/modules/prisma/prisma-write.service";
import { UsersService } from "src/modules/users/services/users.service";
import { UserWithProfile } from "src/modules/users/users.repository";

import {
  transformApiEventTypeBookingFields,
  transformApiEventTypeLocations,
} from "@calcom/platform-libraries";
import { CreateEventTypeInput_2024_06_14 } from "@calcom/platform-types";

type InputEventTransformed = Omit<
  CreateEventTypeInput_2024_06_14,
  | "lengthInMinutes"
  | "locations"
  | "bookingFields"
  | "bookingLimitsCount"
  | "onlyShowFirstAvailableSlot"
  | "bookingLimitsDuration"
  | "offsetStart"
  | "periodType"
  | "periodDays"
  | "periodCountCalendarDays"
  | "periodStartDate"
  | "periodEndDate"
  | "recurrence"
> & {
  length: number;
  slug: string;
  locations?: ReturnType<typeof transformApiEventTypeLocations>;
  bookingFields?: ReturnType<typeof transformApiEventTypeBookingFields>;
};
export declare class EventTypesRepository_2024_06_14 {
  private readonly dbRead;
  private readonly dbWrite;
  private usersService;
  constructor(dbRead: PrismaReadService, dbWrite: PrismaWriteService, usersService: UsersService);
  createUserEventType(
    userId: number,
    body: InputEventTransformed
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
  getEventTypeWithSeats(eventTypeId: number): Promise<{
    seatsPerTimeSlot: number | null;
    users: {
      id: number;
    }[];
  } | null>;
  getUserEventType(
    userId: number,
    eventTypeId: number
  ): Promise<
    | ({
        schedule: {
          id: number;
          userId: number;
          name: string;
          timeZone: string | null;
        } | null;
        users: {
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
        }[];
      } & {
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
      })
    | null
  >;
  getUserEventTypes(userId: number): Promise<
    ({
      schedule: {
        id: number;
        userId: number;
        name: string;
        timeZone: string | null;
      } | null;
      users: {
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
      }[];
    } & {
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
    })[]
  >;
  getUserEventTypeForAtom(
    user: UserWithProfile,
    isUserOrganizationAdmin: boolean,
    eventTypeId: number
  ): Promise<any>;
  getEventTypeById(eventTypeId: number): Promise<
    | ({
        schedule: {
          id: number;
          userId: number;
          name: string;
          timeZone: string | null;
        } | null;
        users: {
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
        }[];
      } & {
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
      })
    | null
  >;
  getUserEventTypeBySlug(
    userId: number,
    slug: string
  ): Promise<
    | ({
        schedule: {
          id: number;
          userId: number;
          name: string;
          timeZone: string | null;
        } | null;
        users: {
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
        }[];
      } & {
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
      })
    | null
  >;
  deleteEventType(eventTypeId: number): Promise<{
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
export {};
