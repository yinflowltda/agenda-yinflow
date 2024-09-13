"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_booking_input_1 = require("../inputs/create-booking.input");
const mark_no_show_input_1 = require("../inputs/mark-no-show.input");
const api_versions_1 = require("../../../lib/api-versions");
const get_user_decorator_1 = require("../../../modules/auth/decorators/get-user/get-user.decorator");
const permissions_decorator_1 = require("../../../modules/auth/decorators/permissions/permissions.decorator");
const api_auth_guard_1 = require("../../../modules/auth/guards/api-auth/api-auth.guard");
const permissions_guard_1 = require("../../../modules/auth/guards/permissions/permissions.guard");
const billing_service_1 = require("../../../modules/billing/services/billing.service");
const oauth_client_repository_1 = require("../../../modules/oauth-clients/oauth-client.repository");
const oauth_flow_service_1 = require("../../../modules/oauth-clients/services/oauth-flow.service");
const prisma_read_service_1 = require("../../../modules/prisma/prisma-read.service");
const platform_constants_1 = require("@calcom/platform-constants");
const platform_constants_2 = require("@calcom/platform-constants");
const platform_libraries_1 = require("@calcom/platform-libraries");
const platform_types_1 = require("@calcom/platform-types");
const DEFAULT_PLATFORM_PARAMS = {
  platformClientId: "",
  platformCancelUrl: "",
  platformRescheduleUrl: "",
  platformBookingUrl: "",
  arePlatformEmailsEnabled: false,
  platformBookingLocation: undefined,
};
let BookingsController = class BookingsController {
  constructor(oAuthFlowService, prismaReadService, oAuthClientRepository, billingService) {
    this.oAuthFlowService = oAuthFlowService;
    this.prismaReadService = prismaReadService;
    this.oAuthClientRepository = oAuthClientRepository;
    this.billingService = billingService;
    this.logger = new common_1.Logger("BookingsController");
  }
  async getBookings(user, queryParams) {
    const { filters, cursor, limit } = queryParams;
    const bookings = await (0, platform_libraries_1.getAllUserBookings)({
      bookingListingByStatus: filters.status,
      skip: cursor ?? 0,
      take: limit ?? 10,
      filters,
      ctx: {
        user: { email: user.email, id: user.id },
        prisma: this.prismaReadService.prisma,
      },
    });
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: bookings,
    };
  }
  async getBooking(bookingUid) {
    const { bookingInfo } = await (0, platform_libraries_1.getBookingInfo)(bookingUid);
    if (!bookingInfo) {
      throw new common_1.NotFoundException(`Booking with UID=${bookingUid} does not exist.`);
    }
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: bookingInfo,
    };
  }
  async getBookingForReschedule(bookingUid) {
    const booking = await (0, platform_libraries_1.getBookingForReschedule)(bookingUid);
    if (!booking) {
      throw new common_1.NotFoundException(`Booking with UID=${bookingUid} does not exist.`);
    }
    return {
      status: platform_constants_2.SUCCESS_STATUS,
      data: booking,
    };
  }
  async createBooking(req, body, clientId) {
    const oAuthClientId = clientId?.toString();
    const { orgSlug, locationUrl } = body;
    req.headers["x-cal-force-slug"] = orgSlug;
    try {
      const booking = await (0, platform_libraries_1.handleNewBooking)(
        await this.createNextApiBookingRequest(req, oAuthClientId, locationUrl)
      );
      if (booking.userId && booking.uid && booking.startTime) {
        void (await this.billingService.increaseUsageByUserId(booking.userId, {
          uid: booking.uid,
          startTime: booking.startTime,
          fromReschedule: booking.fromReschedule,
        }));
      }
      return {
        status: platform_constants_2.SUCCESS_STATUS,
        data: booking,
      };
    } catch (err) {
      this.handleBookingErrors(err);
    }
    throw new common_1.InternalServerErrorException("Could not create booking.");
  }
  async cancelBooking(req, bookingId, _, clientId) {
    const oAuthClientId = clientId?.toString();
    if (bookingId) {
      try {
        req.body.id = parseInt(bookingId);
        const res = await (0, platform_libraries_1.handleCancelBooking)(
          await this.createNextApiBookingRequest(req, oAuthClientId)
        );
        if (!res.onlyRemovedAttendee) {
          void (await this.billingService.cancelUsageByBookingUid(res.bookingUid));
        }
        return {
          status: platform_constants_2.SUCCESS_STATUS,
          data: {
            bookingId: res.bookingId,
            bookingUid: res.bookingUid,
            onlyRemovedAttendee: res.onlyRemovedAttendee,
          },
        };
      } catch (err) {
        this.handleBookingErrors(err);
      }
    } else {
      throw new common_1.NotFoundException("Booking ID is required.");
    }
    throw new common_1.InternalServerErrorException("Could not cancel booking.");
  }
  async markNoShow(userId, body, bookingUid) {
    try {
      const markNoShowResponse = await (0, platform_libraries_1.handleMarkNoShow)({
        bookingUid: bookingUid,
        attendees: body.attendees,
        noShowHost: body.noShowHost,
        userId,
      });
      return { status: platform_constants_2.SUCCESS_STATUS, data: markNoShowResponse };
    } catch (err) {
      this.handleBookingErrors(err, "no-show");
    }
    throw new common_1.InternalServerErrorException("Could not mark no show.");
  }
  async createRecurringBooking(req, _, clientId) {
    const oAuthClientId = clientId?.toString();
    try {
      const createdBookings = await (0, platform_libraries_1.handleNewRecurringBooking)(
        await this.createNextApiBookingRequest(req, oAuthClientId)
      );
      createdBookings.forEach(async (booking) => {
        if (booking.userId && booking.uid && booking.startTime) {
          void (await this.billingService.increaseUsageByUserId(booking.userId, {
            uid: booking.uid,
            startTime: booking.startTime,
          }));
        }
      });
      return {
        status: platform_constants_2.SUCCESS_STATUS,
        data: createdBookings,
      };
    } catch (err) {
      this.handleBookingErrors(err, "recurring");
    }
    throw new common_1.InternalServerErrorException("Could not create recurring booking.");
  }
  async createInstantBooking(req, _, clientId) {
    const oAuthClientId = clientId?.toString();
    req.userId = (await this.getOwnerId(req)) ?? -1;
    try {
      const instantMeeting = await (0, platform_libraries_1.handleInstantMeeting)(
        await this.createNextApiBookingRequest(req, oAuthClientId)
      );
      if (instantMeeting.userId && instantMeeting.bookingUid) {
        const now = new Date();
        now.setSeconds(now.getSeconds() + 10);
        void (await this.billingService.increaseUsageByUserId(instantMeeting.userId, {
          uid: instantMeeting.bookingUid,
          startTime: now,
        }));
      }
      return {
        status: platform_constants_2.SUCCESS_STATUS,
        data: instantMeeting,
      };
    } catch (err) {
      this.handleBookingErrors(err, "instant");
    }
    throw new common_1.InternalServerErrorException("Could not create instant booking.");
  }
  async getOwnerId(req) {
    try {
      const accessToken = req.get("Authorization")?.replace("Bearer ", "");
      if (accessToken) {
        return this.oAuthFlowService.getOwnerId(accessToken);
      }
    } catch (err) {
      this.logger.error(err);
    }
  }
  async getOAuthClientsParams(clientId) {
    const res = DEFAULT_PLATFORM_PARAMS;
    try {
      const client = await this.oAuthClientRepository.getOAuthClient(clientId);
      if (client) {
        res.platformClientId = clientId;
        res.platformCancelUrl = client.bookingCancelRedirectUri ?? "";
        res.platformRescheduleUrl = client.bookingRescheduleRedirectUri ?? "";
        res.platformBookingUrl = client.bookingRedirectUri ?? "";
        res.arePlatformEmailsEnabled = client.areEmailsEnabled ?? false;
      }
      return res;
    } catch (err) {
      this.logger.error(err);
      return res;
    }
  }
  async createNextApiBookingRequest(req, oAuthClientId, platformBookingLocation) {
    const userId = (await this.getOwnerId(req)) ?? -1;
    const oAuthParams = oAuthClientId
      ? await this.getOAuthClientsParams(oAuthClientId)
      : DEFAULT_PLATFORM_PARAMS;
    Object.assign(req, { userId, ...oAuthParams, platformBookingLocation });
    req.body = { ...req.body, noEmail: !oAuthParams.arePlatformEmailsEnabled };
    return req;
  }
  handleBookingErrors(err, type) {
    const errMsg =
      type === "no-show"
        ? `Error while marking no-show.`
        : `Error while creating ${type ? type + " " : ""}booking.`;
    if (err instanceof platform_libraries_1.HttpError) {
      const httpError = err;
      throw new common_1.HttpException(httpError?.message ?? errMsg, httpError?.statusCode ?? 500);
    }
    if (err instanceof Error) {
      const error = err;
      throw new common_1.InternalServerErrorException(error?.message ?? errMsg);
    }
    throw new common_1.InternalServerErrorException(errMsg);
  }
};
__decorate(
  [
    (0, common_1.Get)("/"),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    (0, permissions_decorator_1.Permissions)([platform_constants_2.BOOKING_READ]),
    (0, swagger_1.ApiQuery)({ name: "filters[status]", enum: platform_types_1.Status, required: true }),
    (0, swagger_1.ApiQuery)({ name: "limit", type: "number", required: false }),
    (0, swagger_1.ApiQuery)({ name: "cursor", type: "number", required: false }),
    openapi.ApiResponse({ status: 200, type: require("../outputs/get-bookings.output").GetBookingsOutput }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platform_types_1.GetBookingsInput]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "getBookings",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:bookingUid"),
    openapi.ApiResponse({ status: 200, type: require("../outputs/get-booking.output").GetBookingOutput }),
    __param(0, (0, common_1.Param)("bookingUid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "getBooking",
  null
);
__decorate(
  [
    (0, common_1.Get)("/:bookingUid/reschedule"),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)("bookingUid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "getBookingForReschedule",
  null
);
__decorate(
  [
    (0, common_1.Post)("/"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)(platform_constants_1.X_CAL_CLIENT_ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_booking_input_1.CreateBookingInput, String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "createBooking",
  null
);
__decorate(
  [
    (0, common_1.Post)("/:bookingId/cancel"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)("bookingId")),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Headers)(platform_constants_1.X_CAL_CLIENT_ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, platform_types_1.CancelBookingInput, String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "cancelBooking",
  null
);
__decorate(
  [
    (0, common_1.Post)("/:bookingUid/mark-no-show"),
    (0, permissions_decorator_1.Permissions)([platform_constants_2.BOOKING_WRITE]),
    (0, common_1.UseGuards)(api_auth_guard_1.ApiAuthGuard),
    openapi.ApiResponse({ status: 201, type: require("../outputs/mark-no-show.output").MarkNoShowOutput }),
    __param(0, (0, get_user_decorator_1.GetUser)("id")),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)("bookingUid")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, mark_no_show_input_1.MarkNoShowInput, String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "markNoShow",
  null
);
__decorate(
  [
    (0, common_1.Post)("/recurring"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)(platform_constants_1.X_CAL_CLIENT_ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array, String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "createRecurringBooking",
  null
);
__decorate(
  [
    (0, common_1.Post)("/instant"),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)(platform_constants_1.X_CAL_CLIENT_ID)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_booking_input_1.CreateBookingInput, String]),
    __metadata("design:returntype", Promise),
  ],
  BookingsController.prototype,
  "createInstantBooking",
  null
);
BookingsController = __decorate(
  [
    (0, common_1.Controller)({
      path: "/v2/bookings",
      version: api_versions_1.API_VERSIONS_VALUES,
    }),
    (0, common_1.UseGuards)(permissions_guard_1.PermissionsGuard),
    (0, swagger_1.ApiTags)("Bookings"),
    __metadata("design:paramtypes", [
      oauth_flow_service_1.OAuthFlowService,
      prisma_read_service_1.PrismaReadService,
      oauth_client_repository_1.OAuthClientRepository,
      billing_service_1.BillingService,
    ]),
  ],
  BookingsController
);
exports.BookingsController = BookingsController;
//# sourceMappingURL=bookings.controller.js.map
