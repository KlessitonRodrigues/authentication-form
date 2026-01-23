import { Card, Icons, TabList } from "@packages/common-components";
import { SignInForm } from "./SignIn";
import { SignUpForm } from "./SignUp";
import { ResetPassForm } from "./ResetPass";
import FormData from "../FormData";

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
];

export const AuthenticationForm = () => {
  return (
    <FormData>
      <Card className="w-lg">
        <TabList items={TabItems} />
      </Card>
    </FormData>
  );
};
