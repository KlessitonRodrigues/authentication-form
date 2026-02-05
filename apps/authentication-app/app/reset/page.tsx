import { ResetPasswordForm } from "@/lib/forms/ResetPassword";
import {
  materialColors,
  LoginCardSection,
  PageFull,
  LoadScreen,
} from "@packages/common-components";
import { Suspense } from "react";

export default function Home() {
  return (
    <PageFull>
      <Suspense fallback={<LoadScreen title="Loading..." />}>
        <LoginCardSection
          data={{
            title: "Welcome Back",
            description:
              "Sign in with Google or GitHub to access your financial dashboard and manage your investments. Securely connect your accounts, track your portfolio performance, view detailed analytics, and make informed decisions about your financial goals.",
            description2:
              "New here? Create an account to get started and take control of your financial future today!",
            bgImageUrl:
              "https://wallpapers-clan.com/wp-content/uploads/2024/05/blue-hills-sunset-minimalist-desktop-wallpaper-preview.jpg",
            bgBrightness: 0.7,
          }}
          login={{
            formComponent: <ResetPasswordForm />,
          }}
          bgGradient={{
            from: materialColors.blue["100"],
            to: materialColors.amber["100"],
          }}
        />
      </Suspense>
    </PageFull>
  );
}
