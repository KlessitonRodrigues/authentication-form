import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

export type AuthForm = Partial<typeof initialState>;
export type AuthForms = "signIn" | "signUp" | "sendRecoveryCode";

export const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  userName: "",
  code: "",
};

const schema = z
  .object({
    email: z
      .string()
      .optional()
      .or(z.literal(""))
      .pipe(z.string().email("Invalid email address"))
      .optional(),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .optional(),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters")
      .optional(),
    userName: z
      .string()
      .min(3, "Username must be at least 3 characters")
      .optional(),
    code: z.string().length(6, "Code must be 6 characters").optional(),
  })
  .partial();

const resolver: Resolver<AuthForm> = zodResolver(schema);

export const getAuthValidation = (type: AuthForms) => {
  const formField: AuthForm = {};
  switch (type) {
    case "signIn":
      formField.email = initialState.email;
      formField.password = initialState.password;
      break;
    case "signUp":
      formField.email = initialState.email;
      formField.password = initialState.password;
      formField.confirmPassword = initialState.confirmPassword;
      formField.userName = initialState.userName;
      break;
    case "sendRecoveryCode":
      formField.email = initialState.email;
      break;
  }

  return { resolver, defaultValues: formField };
};
