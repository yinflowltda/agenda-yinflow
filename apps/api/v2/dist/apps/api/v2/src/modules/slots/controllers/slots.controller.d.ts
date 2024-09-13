/// <reference types="cookie-parser" />
import { Response as ExpressResponse, Request as ExpressRequest } from "express";
import { SlotsService } from "src/modules/slots/services/slots.service";

import type { AvailableSlotsType } from "@calcom/platform-libraries";
import { RemoveSelectedSlotInput, ReserveSlotInput } from "@calcom/platform-types";
import { ApiResponse, GetAvailableSlotsInput } from "@calcom/platform-types";

export declare class SlotsController {
  private readonly slotsService;
  constructor(slotsService: SlotsService);
  reserveSlot(
    body: ReserveSlotInput,
    res: ExpressResponse,
    req: ExpressRequest
  ): Promise<ApiResponse<string>>;
  deleteSelectedSlot(params: RemoveSelectedSlotInput, req: ExpressRequest): Promise<ApiResponse>;
  getAvailableSlots(
    query: GetAvailableSlotsInput,
    req: ExpressRequest
  ): Promise<ApiResponse<AvailableSlotsType>>;
}
