import { AuthenticationForm } from "@/lib/forms/Authentication";
import { ResetPasswordForm } from "@/lib/forms/ResetPassword";
import UserAccount from "@/lib/views/Users/UserAccount";
import { Page } from "@packages/common-components";

export default function Home() {
  return (
    <Page>
      <UserAccount />
      <AuthenticationForm />
      <ResetPasswordForm />
    </Page>
  );
}
