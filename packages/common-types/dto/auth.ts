import {
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
  validateOrReject,
} from "class-validator";
import { plainToInstance } from "class-transformer";

export class CreateAuthUserDTO {
  @IsString({ message: "User ID must be a string" })
  @MinLength(1, { message: "User ID cannot be empty" })
  @IsOptional()
  userId: string;

  @IsEmail({}, { message: "Invalid email format" })
  email: string;

  @IsString({ message: "Username must be a string" })
  @MinLength(3, { message: "Username must be at least 3 characters long" })
  userName: string;

  @IsString({ message: "Password must be a string" })
  @MinLength(6, { message: "Password must be at least 6 characters long" })
  password: string;

  @IsString({ message: "Creation date must be a string" })
  @IsOptional()
  createAt: string;

  @IsString({ message: "Update date must be a string" })
  @IsOptional()
  updateAt: string;

  static async create(data: Partial<CreateAuthUserDTO>) {
    const instance = plainToInstance(CreateAuthUserDTO, data);
    await validateOrReject(instance, {
      validationError: { target: false, value: false },
    });
    return instance;
  }
}
