"use client";
import { Card, Icons, TabList } from "@packages/common-components";
import FormData from "../FormData";
import { VerifyCodeForm } from "./VerifyCode";
import { ChangePasswordForm } from "./ChangePassword";
import { useSearchParams } from "next/navigation";

export const ResetPasswordForm = () => {
  const params = useSearchParams();
  const resetToken = params.get("resetToken") || "";

  const tabItems = [
    {
      label: "Verify Code",
      icon: <Icons icon="code" />,
      content: <VerifyCodeForm />,
      disabled: !!resetToken,
    },
    {
      label: "Reset Password",
      icon: <Icons icon="lock" />,
      content: <ChangePasswordForm />,
      disabled: !resetToken,
    },
  ];

  return (
    <FormData>
      <Card className="m-auto w-md min-h-160">
        <TabList item={resetToken ? 1 : 0} items={tabItems} />
      </Card>
    </FormData>
  );
};
