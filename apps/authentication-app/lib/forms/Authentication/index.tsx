import { Card, TabList, TabListProps } from "@packages/common-components";
import { SignInForm } from "./SignIn";
import { SignUpForm } from "./SignUp";
import { ResetPassForm } from "./ResetPass";
import FormData from "../FormData";

const TabItems: TabListProps["items"] = [
  {
    label: "Login",
    icon: "signIn",
    content: <SignInForm />,
  },
  {
    label: "Register",
    icon: "userPlus",
    content: <SignUpForm />,
  },
  {
    label: "Forgot Password",
    icon: "questionMark",
    content: <ResetPassForm />,
  },
];

export const AuthenticationForm = () => {
  return (
    <FormData>
      <Card className="m-auto w-md min-h-160">
        <TabList items={TabItems} />
      </Card>
    </FormData>
  );
};
