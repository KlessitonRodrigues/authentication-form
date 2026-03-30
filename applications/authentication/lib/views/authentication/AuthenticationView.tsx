import { Card, TabList, TabListProps } from '@packages/daisy-ui-components';

import ViewData from '../ViewData';
import { ResetPassForm } from './RequestCodeForm';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface AuthenticationFormProps {
  t: (key: string) => string;
}

const AuthenticationView = ({ t }: AuthenticationFormProps) => {
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
    <ViewData>
      <Card className="m-auto w-full min-h-160 lg:w-md">
        <TabList items={TabItems} />
      </Card>
    </ViewData>
  );
};

export default AuthenticationView;
