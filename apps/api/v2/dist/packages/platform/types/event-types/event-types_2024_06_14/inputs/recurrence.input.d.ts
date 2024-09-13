import { FrequencyInput } from "@calcom/platform-enums";

export type TransformRecurringEventSchema_2024_06_14 = {
  interval: number;
  count: number;
  freq: number;
};
export declare class Recurrence_2024_06_14 {
  interval: number;
  occurrences: number;
  frequency: FrequencyInput;
}
