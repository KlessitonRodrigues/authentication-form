'use client';
import { useClientTranslations } from '@/lib/hooks/useClientTranslation';
import { Card, TabList, TabListProps } from '@packages/daisy-ui-components';
import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

import FormData from '../FormData';
import { ChangePasswordForm } from './ChangePassword';
import { VerifyCodeForm } from './VerifyCode';

export const ResetPasswordForm = () => {
  const { t } = useClientTranslations();
  const params = useSearchParams();
  const resetToken = params.get('resetToken') || '';

  const tabItems: TabListProps['items'] = useMemo(
    () => [
      {
        label: t('forms.resetPassword.verifyCode'),
        icon: 'code',
        content: <VerifyCodeForm />,
        disabled: !!resetToken,
      },
      {
        label: t('forms.resetPassword.resetPassword'),
        icon: 'lock',
        content: <ChangePasswordForm />,
        disabled: !resetToken,
      },
    ],
    [resetToken],
  );

  return (
    <FormData>
      <Card className="m-auto w-md min-h-160">
        <TabList defaultItem={resetToken ? 1 : 0} items={tabItems} />
      </Card>
    </FormData>
  );
};
