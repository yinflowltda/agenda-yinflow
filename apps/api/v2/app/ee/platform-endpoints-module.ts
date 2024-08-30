import type { MiddlewareConsumer, NestModule } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { BookingsModule } from "app/ee/bookings/bookings.module";
import { CalendarsModule } from "app/ee/calendars/calendars.module";
import { EventTypesModule_2024_04_15 } from "app/ee/event-types/event-types_2024_04_15/event-types.module";
import { EventTypesModule_2024_06_14 } from "app/ee/event-types/event-types_2024_06_14/event-types.module";
import { GcalModule } from "app/ee/gcal/gcal.module";
import { MeModule } from "app/ee/me/me.module";
import { ProviderModule } from "app/ee/provider/provider.module";
import { SchedulesModule_2024_04_15 } from "app/ee/schedules/schedules_2024_04_15/schedules.module";
import { SchedulesModule_2024_06_11 } from "app/ee/schedules/schedules_2024_06_11/schedules.module";
import { SlotsModule } from "app/modules/slots/slots.module";

@Module({
  imports: [
    GcalModule,
    ProviderModule,
    SchedulesModule_2024_04_15,
    SchedulesModule_2024_06_11,
    MeModule,
    EventTypesModule_2024_04_15,
    EventTypesModule_2024_06_14,
    CalendarsModule,
    BookingsModule,
    SlotsModule,
  ],
})
export class PlatformEndpointsModule implements NestModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  configure(_consumer: MiddlewareConsumer) {
    // TODO: apply ratelimits
  }
}
