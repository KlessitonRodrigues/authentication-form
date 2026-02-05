"use client";
import {
  Button,
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";
import { AuthForm, getAuthValidation } from "./validation";
import { useForm } from "react-hook-form";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const formValidation = getAuthValidation("changePassword");

export const ChangePasswordForm = () => {
  const { resetPasswordQuery } = useAuthentication();
  const params = useSearchParams();
  const email = params.get("email");
  const resetToken = params.get("resetToken") || "";

  const { formState, register, handleSubmit, ...form } =
    useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    resetPasswordQuery.mutate({
      newPassword: data.password!,
      token: resetToken,
    });
  };

  useEffect(() => {
    if (email) form.setValue("email", email);
  }, [email, form]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
        disabled
        inputProps={register("email")}
        error={formState.errors.email?.message}
      />
      <InputField
        size="lg"
        label="New Password"
        placeholder="Enter your new password"
        before={<Icons icon="lock" />}
        inputProps={register("password")}
        error={formState.errors.password?.message}
      />
      <InputField
        size="lg"
        label="Confirm Password"
        placeholder="Confirm your new password"
        before={<Icons icon="lock" />}
        inputProps={register("confirmPassword")}
        error={formState.errors.confirmPassword?.message}
      />
      <Row flexX="center">
        <IconButton
          icon="checkMark"
          color="error"
          loading={resetPasswordQuery.isPending}
        >
          Change Password
        </IconButton>
      </Row>
    </Form>
  );
};
