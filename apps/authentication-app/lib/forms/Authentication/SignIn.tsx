"use client";

import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/common-components";

import { useForm } from "react-hook-form";
import { AuthForm, formValidation } from "./validation";
import useAuthentication from "@/lib/hooks/useAuthentication";

export const SignInForm = () => {
  const { handleGoogleLogin } = useAuthentication();
  const { formState, register, handleSubmit } = useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    console.log("Sign In Data:", data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        inputProps={register("email")}
        before={<Icons icon="email" />}
        error={formState.errors.email?.message}
      />
      <InputField
        size="lg"
        type="password"
        label="Password"
        placeholder="Enter your password"
        inputProps={register("password")}
        before={<Icons icon="lock" />}
        error={formState.errors.password?.message}
      />
      <Row flexX="center">
        <Button color="primary" type="submit">
          <Icons icon="signIn" />
          Sign In
        </Button>
        <Button color="neutral" type="button" onClick={handleGoogleLogin}>
          <Icons icon="google" />
          Google
        </Button>
        <Button color="neutral" type="button">
          <Icons icon="github" />
          GitHub
        </Button>
      </Row>
    </Form>
  );
};
