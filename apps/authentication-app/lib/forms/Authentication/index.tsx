import { Card, Icons, TabList } from "@packages/common-components";
import { SignInForm } from "./SignIn";
import { SignUpForm } from "./SignUp";
import { ResetPassForm } from "./ResetPass";

const TabItems = [
  {
    label: "Login",
    icon: <Icons icon="signIn" />,
    content: <SignInForm />,
  },
  {
    label: "Register",
    icon: <Icons icon="userPlus" />,
    content: <SignUpForm />,
  },
  {
    label: "Forgot Password",
    icon: <Icons icon="questionMark" />,
    content: <ResetPassForm />,
  },
  {
    label: "Verify Code",
    icon: <Icons icon="emailbox" />,
    content: <ResetPassForm />,
    disabled: true,
  },
];

export const AuthenticationForm = () => {
  return (
    <Card className="w-xl">
      <TabList items={TabItems} />
    </Card>
  );
};
