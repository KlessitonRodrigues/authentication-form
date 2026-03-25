'use client';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { useFormSchema } from '@/lib/hooks/useFormSchema';
import { createAuthSchemas } from '@packages/common-types';
import { Form, IconButton, Icons, InputField, Row, Text } from '@packages/daisy-ui-components';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const SignInForm = () => {
  const { t, lang } = useClientTranslations();
  const params = useSearchParams();
  const code = params.get('code');

  const { loginQuery, googleLoginQuery, githubLoginQuery, googleLoginHandle, getGithubAuthUrl } =
    useAuthentication();
  const { signInSchema } = createAuthSchemas({ lang });
  const { errors, register, handleSubmit } = useFormSchema(signInSchema);

  const onSubmit = (data: any) => {
    loginQuery.mutate({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (code) githubLoginQuery.mutate(code);
  }, [code]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t('forms.signIn.email')}
        placeholder={t('forms.signIn.emailPlaceholder')}
        inputProps={register('email')}
        before={<Icons iconType="email" />}
        error={errors.email?.message?.toString()}
      />
      <InputField
        size="lg"
        type="password"
        label={t('forms.signIn.password')}
        placeholder={t('forms.signIn.passwordPlaceholder')}
        inputProps={register('password')}
        before={<Icons iconType="lock" />}
        error={errors.password?.message?.toString()}
      />

      <Text size="sm" opacity="50" className="text-center">
        test4@email.com - test12345
      </Text>

      <IconButton iconType="signIn" color="primary" loading={loginQuery.isPending} type="submit">
        {t('forms.signIn.signInButton')}
      </IconButton>

      <Row flexX="center" gap={4}>
        <IconButton
          iconType="google"
          color="neutral"
          type="button"
          onClick={googleLoginHandle}
          loading={googleLoginQuery.isPending}
        >
          {t('forms.signIn.googleButton')}
        </IconButton>
        <a href={getGithubAuthUrl()}>
          <IconButton
            loading={githubLoginQuery.isPending}
            iconType="github"
            color="neutral"
            type="button"
          >
            {t('forms.signIn.githubButton')}
          </IconButton>
        </a>
      </Row>
      <Text size="sm" className="text-center">
        {t('forms.signIn.termsAndPrivacy')}
      </Text>
    </Form>
  );
};
