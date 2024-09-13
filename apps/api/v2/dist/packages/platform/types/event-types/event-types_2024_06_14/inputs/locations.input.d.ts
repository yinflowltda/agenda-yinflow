import type { ValidationOptions } from "class-validator";

export declare class AddressLocation_2024_06_14 {
  type: "address";
  address: string;
  public: boolean;
}
export declare class LinkLocation_2024_06_14 {
  type: "link";
  link: string;
  public: boolean;
}
declare const integrations: readonly ["cal-video"];
export type Integration_2024_06_14 = (typeof integrations)[number];
export declare class IntegrationLocation_2024_06_14 {
  type: "integration";
  integration: Integration_2024_06_14;
}
export declare class PhoneLocation_2024_06_14 {
  type: "phone";
  phone: string;
  public: boolean;
}
export type Location_2024_06_14 =
  | AddressLocation_2024_06_14
  | LinkLocation_2024_06_14
  | IntegrationLocation_2024_06_14
  | PhoneLocation_2024_06_14;
export declare function ValidateLocations_2024_06_14(
  validationOptions?: ValidationOptions
): (object: any, propertyName: string) => void;
export {};
