'use client';
import useAuthentication from '@/lib/hooks/useAuthentication';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { useFormSchema } from '@/lib/hooks/useFormSchema';
import { createAuthSchemas } from '@packages/common-types';
import { Button, Form, Icons, InputField } from '@packages/daisy-ui-components';

export const ResetPassForm = () => {
  const { t, lang } = useClientTranslations();
  const { sendRecoveryCodeQuery } = useAuthentication();
  const { sendRecoveryCodeSchema } = createAuthSchemas({ lang });
  const { errors, register, handleSubmit } = useFormSchema(sendRecoveryCodeSchema);

  const onSubmit = (data: any) => {
    sendRecoveryCodeQuery.mutate({ email: data.email || '' });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        size="lg"
        type="email"
        label={t('forms.resetPass.email')}
        placeholder={t('forms.resetPass.emailPlaceholder')}
        before={<Icons icon="email" />}
        inputProps={register('email')}
        error={errors.email?.message?.toString()}
      />
      <Button color="primary" loading={sendRecoveryCodeQuery.isPending}>
        <Icons icon="email" />
        {t('forms.resetPass.sendChangePasswordLink')}
      </Button>
    </Form>
  );
};
