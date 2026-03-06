"use client";
import {
  Button,
  Form,
  Icons,
  InputField,
  Row,
} from "@packages/daisy-ui-components";
import { AuthForm, getAuthValidation } from "./validation";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";

const formValidation = getAuthValidation("verifyCode");

export const VerifyCodeForm = () => {
  const { t } = useClientTranslations();
  const params = useSearchParams();
  const email = params.get("email");
  const { verifyRecoveryCodeQuery } = useAuthentication();
  const { formState, register, handleSubmit, ...form } =
    useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    verifyRecoveryCodeQuery.mutate({
      email: data.email!,
      code: data.code!,
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
        label={t("forms.resetPassword.email")}
        placeholder={t("forms.resetPassword.emailPlaceholder")}
        before={<Icons icon="email" />}
        disabled
        inputProps={register("email")}
        error={formState.errors.email?.message}
      />
      <InputField
        size="lg"
        type="text"
        label={t("forms.resetPassword.verificationCode")}
        placeholder={t("forms.resetPassword.verificationCodePlaceholder")}
        before={<Icons icon="code" size="22" />}
        inputProps={register("code")}
        error={formState.errors.code?.message}
      />
      <Row flexX="center">
        <Button color="primary" loading={verifyRecoveryCodeQuery.isPending}>
          <Icons icon="checkMark" size="22" />
          {t("forms.resetPassword.verifyCode")}
        </Button>
      </Row>
    </Form>
  );
};
