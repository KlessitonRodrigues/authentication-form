import { z } from "zod";
import { dictionaries, errorMsg } from "../constants/dictionary";
import { COMMON } from "../types/common";

export const createAuthSchemas = (options: COMMON.CreateSchemaOptions) => {
  const dictionary = dictionaries[options.lang];

  const authSchema = {
    email: z.string(dictionary.REQUIRED).email(dictionary.INVALID_EMAIL),
    password: z.string(dictionary.REQUIRED).min(6, dictionary.PASSWORD_MIN),
    userName: z.string(dictionary.REQUIRED).min(3, dictionary.USERNAME_MIN),
    code: z.string(dictionary.REQUIRED).min(6, dictionary.CODE_MIN),
    token: z.string(dictionary.REQUIRED),
  };

  return {
    signInSchema: z.object({
      email: authSchema.email,
      password: authSchema.password,
    }),
    signUpWithGoogleSchema: z.object({
      token: authSchema.token,
    }),
    signUpSchema: z.object({
      email: authSchema.email,
      password: authSchema.password,
      userName: authSchema.userName,
    }),
    sendRecoveryCodeSchema: z.object({
      email: authSchema.email,
    }),
    verifyRecoveryCodeSchema: z.object({
      email: authSchema.email,
      code: authSchema.code,
    }),
    resetPasswordSchema: z.object({
      newPassword: authSchema.password,
      token: authSchema.token,
    }),
    refreshTokenSchema: z.object({
      token: authSchema.token,
    }),
  };
};

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
