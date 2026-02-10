import { z } from "zod";

const authSchema = {
  email: z.email("Invalid email address"),
  password: z
    .string("Password is required")
    .min(6, "Password must be at least 6 characters"),
  userName: z
    .string("Username is required")
    .min(3, "Username must be at least 3 characters"),
  code: z
    .string("Code is required")
    .min(6, "Code must be at least 6 characters"),
  token: z.string("Google token is required"),
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
