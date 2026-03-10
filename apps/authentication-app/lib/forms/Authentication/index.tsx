import { Card, TabList, TabListProps } from '@packages/daisy-ui-components';

import FormData from '../FormData';
import { ResetPassForm } from './ResetPass';
import { SignInForm } from './SignIn';
import { SignUpForm } from './SignUp';

interface AuthenticationFormProps {
  t: (key: string) => string;
}

export const AuthenticationForm = ({ t }: AuthenticationFormProps) => {
  const TabItems: TabListProps['items'] = [
    {
      label: t('forms.authentication.login'),
      icon: 'signIn',
      content: <SignInForm />,
    },
    {
      label: t('forms.authentication.register'),
      icon: 'userPlus',
      content: <SignUpForm />,
    },
    {
      label: t('forms.authentication.forgotPassword'),
      icon: 'questionMark',
      content: <ResetPassForm />,
    },
  ];

  return (
    <FormData>
      <Card className="m-auto w-full min-h-160 lg:w-md">
        <TabList items={TabItems} />
      </Card>
    </FormData>
  );
};
