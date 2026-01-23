import { Card, Icons, TabList } from "@packages/common-components";
import { SignInForm } from "./SignIn";
import { SignUpForm } from "./SignUp";
import { ResetPassForm } from "./ResetPass";
import { GoogleOAuthProvider } from "@react-oauth/google";

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

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export const AuthenticationForm = () => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Card className="w-xl">
        <TabList items={TabItems} />
      </Card>
    </GoogleOAuthProvider>
  );
};
