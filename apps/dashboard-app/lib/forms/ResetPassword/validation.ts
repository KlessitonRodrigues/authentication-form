import { zodResolver } from "@hookform/resolvers/zod";
import { Resolver } from "react-hook-form";
import { z } from "zod";

export type AuthForm = Partial<typeof initialState>;
export type AuthForms = "verifyCode" | "changePassword";

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
    code: z.string().length(6, "Code must be 6 characters").optional(),
  })
  .partial();

const resolver: Resolver<AuthForm> = zodResolver(schema);

export const getAuthValidation = (type: AuthForms) => {
  const formField: AuthForm = {};
  switch (type) {
    case "verifyCode":
      formField.email = initialState.email;
      formField.code = initialState.code;
      break;
    case "changePassword":
      formField.email = initialState.email;
      formField.password = initialState.password;
      formField.confirmPassword = initialState.confirmPassword;
      break;
  }

  return { resolver, defaultValues: formField };
};
