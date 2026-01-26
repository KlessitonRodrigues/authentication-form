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

const formValidation = getAuthValidation("signUp");

export const SignUpForm = () => {
  const { formState, register, handleSubmit } = useForm(formValidation);
  const onSubmit = (data: AuthForm) => console.log("Sign In Data:", data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label="Email"
        placeholder="Enter your e-mail"
        before={<Icons icon="email" />}
        error={formState.errors.email?.message}
        inputProps={register("email")}
      />
      <InputField
        size="lg"
        type="text"
        label="Username"
        placeholder="Choose a username"
        before={<Icons icon="user" />}
        error={formState.errors.userName?.message}
        inputProps={register("userName")}
      />
      <InputField
        size="lg"
        type="password"
        label="Password"
        placeholder="Enter your password"
        before={<Icons icon="lock" />}
        error={formState.errors.password?.message}
        inputProps={register("password")}
      />
      <InputField
        size="lg"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter your password"
        before={<Icons icon="lock" />}
        error={formState.errors.confirmPassword?.message}
        inputProps={register("confirmPassword")}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="userPlus" />
          Create Account
        </Button>
      </Row>
    </Form>
  );
};
