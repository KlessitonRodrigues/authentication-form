"use client";
import { Card, TabList, TabListProps } from "@packages/common-components";
import FormData from "../FormData";
import { VerifyCodeForm } from "./VerifyCode";
import { ChangePasswordForm } from "./ChangePassword";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const ResetPasswordForm = () => {
  const params = useSearchParams();
  const resetToken = params.get("resetToken") || "";

  const tabItems: TabListProps["items"] = useMemo(
    () => [
      {
        label: "Verify Code",
        icon: "code",
        content: <VerifyCodeForm />,
        disabled: !!resetToken,
      },
      {
        label: "Reset Password",
        icon: "lock",
        content: <ChangePasswordForm />,
        disabled: !resetToken,
      },
    ],
    [resetToken],
  );

  return (
    <FormData>
      <Card className="m-auto w-md min-h-160">
        <TabList item={resetToken ? 1 : 0} items={tabItems} />
      </Card>
    </FormData>
  );
};
