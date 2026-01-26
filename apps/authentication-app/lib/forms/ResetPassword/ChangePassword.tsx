"use client";
import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";
import { AuthForm, getAuthValidation } from "./validation";
import { useForm } from "react-hook-form";

const formValidation = getAuthValidation("changePassword");

export const ChangePasswordForm = () => {
  const { formState, register, handleSubmit } = useForm(formValidation);
  const onSubmit = (data: AuthForm) => console.log(data);

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
        type="password"
        label="New Password"
        placeholder="Enter your new password"
        before={<Icons icon="lock" />}
        inputProps={register("password")}
        error={formState.errors.password?.message}
      />
      <InputField
        size="lg"
        type="password"
        label="Confirm Password"
        placeholder="Confirm your new password"
        before={<Icons icon="lock" />}
        inputProps={register("confirmPassword")}
        error={formState.errors.confirmPassword?.message}
      />
      <Row flexX="center">
        <Button color="error">
          <Icons icon="checkMark" size="22" />
          Change Password
        </Button>
      </Row>
    </Form>
  );
};
