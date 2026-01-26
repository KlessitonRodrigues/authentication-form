import { Card, Icons, TabList } from "@packages/common-components";
import FormData from "../FormData";
import { VerifyCodeForm } from "./VerifyCode";
import { ChangePasswordForm } from "./ChangePassword";

const TabItems = [
  {
    label: "Verify Code",
    icon: <Icons icon="code" />,
    content: <VerifyCodeForm />,
  },
  {
    label: "Reset Password",
    icon: <Icons icon="lock" />,
    content: <ChangePasswordForm />,
    disabled: true,
  },
];

export const ResetPasswordForm = () => {
  return (
    <FormData>
      <Card className="w-md min-h-160">
        <TabList items={TabItems} />
      </Card>
    </FormData>
  );
};
