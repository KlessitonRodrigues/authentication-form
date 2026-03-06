"use client";
import {
  Form,
  IconButton,
  Icons,
  InputField,
  Row,
  Text,
} from "@packages/daisy-ui-components";

import useAuthentication from "@/lib/hooks/useAuthentication";
import { createAuthSchemas } from "@packages/common-types";
import { useFormSchema } from "@/lib/hooks/useFormSchema";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";

export const SignInForm = () => {
  const { t, lang } = useClientTranslations();
  const { loginQuery, googleLoginQuery, googleLoginHandle } =
    useAuthentication();
  const { signInSchema } = createAuthSchemas({ lang });
  const { errors, register, handleSubmit } = useFormSchema(signInSchema);

  const onSubmit = (data: any) => {
    loginQuery.mutate({ email: data.email, password: data.password });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t("forms.signIn.email")}
        placeholder={t("forms.signIn.emailPlaceholder")}
        inputProps={register("email")}
        before={<Icons icon="email" />}
        error={errors.email?.message?.toString()}
      />
      <InputField
        size="lg"
        type="password"
        label={t("forms.signIn.password")}
        placeholder={t("forms.signIn.passwordPlaceholder")}
        inputProps={register("password")}
        before={<Icons icon="lock" />}
        error={errors.password?.message?.toString()}
      />

      <IconButton
        icon="signIn"
        color="primary"
        loading={loginQuery.isPending}
        type="submit"
      >
        {t("forms.signIn.signInButton")}
      </IconButton>

      <Row flexX="center" gap={4}>
        <IconButton
          icon="google"
          color="neutral"
          type="button"
          onClick={googleLoginHandle}
          loading={googleLoginQuery.isPending}
        >
          {t("forms.signIn.googleButton")}
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
          {t("forms.signIn.githubButton")}
        </IconButton>
      </Row>
      <Text fs="sm" className="text-center">
        {t("forms.signIn.termsAndPrivacy")}
      </Text>
    </Form>
  );
};
