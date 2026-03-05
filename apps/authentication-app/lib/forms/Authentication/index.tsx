import { Card, TabList, TabListProps } from "@packages/daisy-ui-components";
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
      <Card className="m-auto w-full min-h-160 lg:w-md">
        <TabList items={TabItems} />
      </Card>
    </FormData>
  );
};
