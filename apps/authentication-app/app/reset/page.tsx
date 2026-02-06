import { ResetPasswordForm } from "@/lib/forms/ResetPassword";
import {
  LoginCardSection,
  PageFull,
  LoadScreen,
} from "@packages/common-components";
import { Suspense } from "react";
import { loginContent, loginGradient } from "../page";

export default function Home() {
  return (
    <PageFull>
      <Suspense fallback={<LoadScreen title="Loading..." />}>
        <LoginCardSection
          data={loginContent}
          bgGradient={loginGradient}
          loginForm={<ResetPasswordForm />}
        />
      </Suspense>
    </PageFull>
  );
}
