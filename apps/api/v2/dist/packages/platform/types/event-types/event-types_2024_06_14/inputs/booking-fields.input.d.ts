import type { ValidationOptions } from "class-validator";

export declare class NameField_2024_06_14 {
  type: "name";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class EmailField_2024_06_14 {
  type: "email";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class PhoneField_2024_06_14 {
  type: "phone";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class AddressField_2024_06_14 {
  type: "address";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class TextField_2024_06_14 {
  type: "text";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class NumberField_2024_06_14 {
  type: "number";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class TextAreaField_2024_06_14 {
  type: "textarea";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class SelectField_2024_06_14 {
  type: "select";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options: string[];
}
export declare class MultiSelectField_2024_06_14 {
  type: "multiselect";
  slug: string;
  label: string;
  required: boolean;
  options: string[];
}
export declare class MultiEmailField_2024_06_14 {
  type: "multiemail";
  slug: string;
  label: string;
  required: boolean;
  placeholder?: string;
}
export declare class CheckboxGroupField_2024_06_14 {
  type: "checkbox";
  slug: string;
  label: string;
  required: boolean;
  options: string[];
}
export declare class RadioGroupField_2024_06_14 {
  type: "radio";
  slug: string;
  label: string;
  required: boolean;
  options: string[];
}
export declare class BooleanField_2024_06_14 {
  type: "boolean";
  slug: string;
  label: string;
  required: boolean;
}
export type BookingField_2024_06_14 =
  | NameField_2024_06_14
  | EmailField_2024_06_14
  | PhoneField_2024_06_14
  | AddressField_2024_06_14
  | TextField_2024_06_14
  | NumberField_2024_06_14
  | TextAreaField_2024_06_14
  | SelectField_2024_06_14
  | MultiSelectField_2024_06_14
  | MultiEmailField_2024_06_14
  | CheckboxGroupField_2024_06_14
  | RadioGroupField_2024_06_14
  | BooleanField_2024_06_14;
export declare function ValidateBookingFields_2024_06_14(
  validationOptions?: ValidationOptions
): (object: any, propertyName: string) => void;
