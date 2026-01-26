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

const formValidation = getAuthValidation("resetPassword");

export const ResetPassForm = () => {
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
        inputProps={register("email")}
        error={formState.errors.email?.message}
      />
      <Row flexX="center">
        <Button color="primary">
          <Icons icon="emailbox" />
          Reset Password
        </Button>
      </Row>
    </Form>
  );
};
