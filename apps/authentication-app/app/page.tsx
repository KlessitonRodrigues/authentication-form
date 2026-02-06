import { AuthenticationForm } from "@/lib/forms/Authentication";
import {
  materialColors,
  LoginCardSection,
  PageFull,
} from "@packages/common-components";

import LoginBgImg from "@/public/images/bluehillssunset.jpg";

export const loginContent = {
  title: "Welcome Back",
  description:
    "Sign in with Google or GitHub to access your financial dashboard and manage your investments. Securely connect your accounts, track your portfolio performance, view detailed analytics, and make informed decisions about your financial goals.",
  description2:
    "New here? Create an account to get started and take control of your financial future today!",
  bgImageUrl: LoginBgImg.src,
  bgBrightness: 0.6,
};

export const loginGradient = {
  from: materialColors.blue["200"],
  to: materialColors.amber["100"],
};

export default function Home() {
  return (
    <PageFull>
      <LoginCardSection
        data={loginContent}
        bgGradient={loginGradient}
        loginForm={<AuthenticationForm />}
      />
    </PageFull>
  );
}
