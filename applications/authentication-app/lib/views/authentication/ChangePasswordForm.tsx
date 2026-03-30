'use client';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { useFormSchema } from '@/lib/hooks/useFormSchema';
import { createAuthSchemas } from '@packages/common-types';
import { Form, IconButton, Icons, InputField, Row } from '@packages/daisy-ui-components';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const ChangePasswordForm = () => {
  const { t, lang } = useClientTranslations();
  const { resetPasswordQuery } = useAuthentication();
  const { sendRecoveryCodeSchema } = createAuthSchemas({ lang });
  const params = useSearchParams();
  const email = params.get('email');
  const resetToken = params.get('resetToken') || '';

  const { errors, setValue, register, handleSubmit } = useFormSchema(sendRecoveryCodeSchema);

  const onSubmit = (data: any) => {
    resetPasswordQuery.mutate({
      newPassword: data.password!,
      token: resetToken,
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
        label={t('forms.resetPassword.password')}
        placeholder={t('forms.resetPassword.passwordPlaceholder')}
        before={<Icons iconType="lock" />}
        inputProps={register('password')}
        error={errors.password?.message?.toString()}
      />
      <InputField
        size="lg"
        label={t('forms.resetPassword.confirmPassword')}
        placeholder={t('forms.resetPassword.confirmPasswordPlaceholder')}
        before={<Icons iconType="lock" />}
        inputProps={register('confirmPassword')}
        error={errors.confirmPassword?.message?.toString()}
      />
      <Row flexX="center">
        <IconButton iconType="checkMark" color="error" loading={resetPasswordQuery.isPending}>
          {t('forms.resetPassword.submit')}
        </IconButton>
      </Row>
    </Form>
  );
};
