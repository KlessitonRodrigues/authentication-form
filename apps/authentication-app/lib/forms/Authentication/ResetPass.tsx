"use client";
import { Button, Form, Icons, InputField } from "@packages/common-components";
import { AuthForm, getAuthValidation } from "./validation";
import { useForm } from "react-hook-form";
import useAuthentication from "@/lib/hooks/useAuthentication";

const formValidation = getAuthValidation("sendRecoveryCode");

export const ResetPassForm = () => {
  const { sendRecoveryCodeQuery } = useAuthentication();
  const { formState, register, handleSubmit } = useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    sendRecoveryCodeQuery.mutate({ email: data.email || "" });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
        inputProps={register("email")}
        error={formState.errors.email?.message}
      />
      <Button color="primary" loading={sendRecoveryCodeQuery.isPending}>
        <Icons icon="email" />
        Send Change Password Link
      </Button>
    </Form>
  );
};
