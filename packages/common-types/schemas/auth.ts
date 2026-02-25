import { z } from "zod";
import { errorMsg } from "../constants/dictionary";

const authSchema = {
  email: z.string(errorMsg.REQUIRED).email(errorMsg.INVALID_EMAIL),
  password: z.string(errorMsg.REQUIRED).min(6, errorMsg.PASSWORD_MIN),
  userName: z.string(errorMsg.REQUIRED).min(3, errorMsg.USERNAME_MIN),
  code: z.string(errorMsg.REQUIRED).min(6, errorMsg.CODE_MIN),
  token: z.string(errorMsg.REQUIRED),
};

export const signInSchema = z.object({
  email: authSchema.email,
  password: authSchema.password,
});

export const signUpWithGoogleSchema = z.object({
  token: authSchema.token,
});

export const signUpSchema = z.object({
  email: authSchema.email,
  password: authSchema.password,
  userName: authSchema.userName,
});

export const sendRecoveryCodeSchema = z.object({
  email: authSchema.email,
});

export const verifyRecoveryCodeSchema = z.object({
  email: authSchema.email,
  code: authSchema.code,
});

export const resetPasswordSchema = z.object({
  newPassword: authSchema.password,
  token: authSchema.token,
});

export const refreshTokenSchema = z.object({
  token: authSchema.token,
});
