import { CreateUserInput } from "src/modules/users/inputs/create-user.input";

declare const UpdateUserInput_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {}
export {};
