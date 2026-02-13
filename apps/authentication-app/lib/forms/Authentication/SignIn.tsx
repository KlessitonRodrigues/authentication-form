"use client";
import {
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
  Text,
} from "@packages/common-components";

import { useForm } from "react-hook-form";
import { AuthForm, getAuthValidation } from "./validation";
import useAuthentication from "@/lib/hooks/useAuthentication";

const formValidation = getAuthValidation("signIn");

export const SignInForm = () => {
  const { loginQuery, googleLoginQuery, googleLoginHandle } =
    useAuthentication();
  const { formState, register, handleSubmit } = useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    loginQuery.mutate({ email: data.email, password: data.password });
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

      <IconButton
        icon="signIn"
        color="primary"
        loading={loginQuery.isPending}
        type="submit"
      >
        Sign In
      </IconButton>

      <Row flexX="center" gap={4}>
        <IconButton
          icon="google"
          color="neutral"
          type="button"
          onClick={googleLoginHandle}
          loading={googleLoginQuery.isPending}
        >
          Google
        </IconButton>
        <IconButton
          icon="github"
          color="neutral"
          type="button"
          onClick={() => {
            window.location.href =
              "https://github.com/login/oauth/authorize?client_id=b211ddaae7459405412acb5ad869ec02f3c16af8&scope=read:user user:email";
          }}
        >
          GitHub
        </IconButton>
      </Row>
      <Text fs="sm" className="text-center">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </Text>
    </Form>
  );
};
