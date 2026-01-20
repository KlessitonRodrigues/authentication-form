import { Card } from "../../base/cards/Card";
import { TabList } from "../../base/tabs/TabNav";
import { SignInForm } from "./SignIn";
import { Icons } from "../../base/icons/IconMap";

export const AuthenticationForm = () => {
  return (
    <Card className="w-lg">
      <TabList
        items={[
          {
            label: "Login",
            icon: <Icons icon="signIn" size="20" />,
            content: <SignInForm />,
          },
          {
            label: "Register",
            icon: <Icons icon="userPlus" size="20" />,
            content: <div>Register Content</div>,
          },
          {
            label: "Forgot Password",
            icon: <Icons icon="email" size="20" />,
            content: <div>Forgot Password Content</div>,
          },
        ]}
      />
    </Card>
  );
};
