'use client';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { useFormSchema } from '@/lib/hooks/useFormSchema';
import { createAuthSchemas } from '@packages/common-types';
import { Button, Form, Icons, InputField, Row } from '@packages/daisy-ui-components';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const VerifyCodeForm = () => {
  const { t, lang } = useClientTranslations();
  const params = useSearchParams();
  const email = params.get('email');

  const { verifyRecoveryCodeQuery } = useAuthentication();
  const { verifyRecoveryCodeSchema } = createAuthSchemas({ lang });
  const { errors, setValue, register, handleSubmit } = useFormSchema(verifyRecoveryCodeSchema);

  const onSubmit = (data: any) => {
    verifyRecoveryCodeQuery.mutate({
      email: data.email!,
      code: data.code!,
    });
  };

  useEffect(() => {
    if (email) setValue('email', email);
  }, [email, setValue]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t('forms.resetPassword.email')}
        placeholder={t('forms.resetPassword.emailPlaceholder')}
        before={<Icons iconType="email" />}
        disabled
        inputProps={register('email')}
        error={errors.email?.message?.toString()}
      />
      <InputField
        size="lg"
        type="text"
        label={t('forms.resetPassword.verificationCode')}
        placeholder={t('forms.resetPassword.verificationCodePlaceholder')}
        before={<Icons iconType="code" />}
        inputProps={register('code')}
        error={errors.code?.message?.toString()}
      />
      <Row flexX="center">
        <Button color="primary" loading={verifyRecoveryCodeQuery.isPending}>
          <Icons iconType="checkMark" />
          {t('forms.resetPassword.verifyCode')}
        </Button>
      </Row>
    </Form>
  );
};
