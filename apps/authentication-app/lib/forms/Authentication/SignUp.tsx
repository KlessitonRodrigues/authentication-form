"use client";
import { Button, Form, Icons, InputField } from "@packages/daisy-ui-components";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { useFormSchema } from "@/lib/hooks/useFormSchema";
import { createAuthSchemas } from "@packages/common-types";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";

export const SignUpForm = () => {
  const { t, lang } = useClientTranslations();
  const { signupQuery } = useAuthentication();
  const { signUpSchema } = createAuthSchemas({ lang });
  const { errors, register, handleSubmit } = useFormSchema(signUpSchema);

  const onSubmit = (data: any) => signupQuery.mutate(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t("forms.signUp.email")}
        placeholder={t("forms.signUp.emailPlaceholder")}
        before={<Icons icon="email" />}
        error={errors.email?.message?.toString()}
        inputProps={register("email")}
      />
      <InputField
        size="lg"
        type="text"
        label={t("forms.signUp.username")}
        placeholder={t("forms.signUp.usernamePlaceholder")}
        before={<Icons icon="user" />}
        error={errors.userName?.message?.toString()}
        inputProps={register("userName")}
      />
      <InputField
        size="lg"
        type="password"
        label={t("forms.signUp.password")}
        placeholder={t("forms.signUp.passwordPlaceholder")}
        before={<Icons icon="lock" />}
        error={errors.password?.message?.toString()}
        inputProps={register("password")}
      />
      <InputField
        size="lg"
        type="password"
        label={t("forms.signUp.confirmPassword")}
        placeholder={t("forms.signUp.confirmPasswordPlaceholder")}
        before={<Icons icon="lock" />}
        error={errors.confirmPassword?.message?.toString()}
        inputProps={register("confirmPassword")}
      />
      <Button color="primary" loading={signupQuery.isPending}>
        <Icons icon="userPlus" />
        {t("forms.signUp.createAccountButton")}
      </Button>
    </Form>
  );
};
