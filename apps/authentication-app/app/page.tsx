import { AuthenticationForm } from "@/lib/forms/Authentication";
import {
  materialColors,
  LoginCardSection,
  PageFull,
} from "@packages/common-components";

export default function Home() {
  return (
    <PageFull>
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
          formComponent: <AuthenticationForm />,
        }}
        bgGradient={{
          from: materialColors.blue["100"],
          to: materialColors.amber["100"],
        }}
      />
    </PageFull>
  );
}
