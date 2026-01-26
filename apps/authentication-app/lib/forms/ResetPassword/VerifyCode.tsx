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

const formValidation = getAuthValidation("verifyCode");

export const VerifyCodeForm = () => {
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
        type="text"
        label="Verification Code"
        placeholder="Enter your verification code"
        before={<Icons icon="code" size="22" />}
        inputProps={register("code")}
        error={formState.errors.code?.message}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="checkMark" size="22" />
          Verify Code
        </Button>
      </Row>
    </Form>
  );
};
