'use client';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { Form, IconButton, Icons, InputField, Row } from '@packages/daisy-ui-components';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { AuthForm, getAuthValidation } from './validation';

const formValidation = getAuthValidation('changePassword');

export const ChangePasswordForm = () => {
  const { t } = useClientTranslations();
  const { resetPasswordQuery } = useAuthentication();
  const params = useSearchParams();
  const email = params.get('email');
  const resetToken = params.get('resetToken') || '';

  const { formState, register, handleSubmit, ...form } = useForm(formValidation);

  const onSubmit = (data: AuthForm) => {
    resetPasswordQuery.mutate({
      newPassword: data.password!,
      token: resetToken,
    });
  };

  useEffect(() => {
    if (email) form.setValue('email', email);
  }, [email, form]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t('forms.resetPassword.email')}
        placeholder={t('forms.resetPassword.emailPlaceholder')}
        before={<Icons icon="email" />}
        disabled
        inputProps={register('email')}
        error={formState.errors.email?.message}
      />
      <InputField
        size="lg"
        label={t('forms.resetPassword.password')}
        placeholder={t('forms.resetPassword.passwordPlaceholder')}
        before={<Icons icon="lock" />}
        inputProps={register('password')}
        error={formState.errors.password?.message}
      />
      <InputField
        size="lg"
        label={t('forms.resetPassword.confirmPassword')}
        placeholder={t('forms.resetPassword.confirmPasswordPlaceholder')}
        before={<Icons icon="lock" />}
        inputProps={register('confirmPassword')}
        error={formState.errors.confirmPassword?.message}
      />
      <Row flexX="center">
        <IconButton icon="checkMark" color="error" loading={resetPasswordQuery.isPending}>
          {t('forms.resetPassword.submit')}
        </IconButton>
      </Row>
    </Form>
  );
};
