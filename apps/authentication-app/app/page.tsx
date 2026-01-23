import { AuthenticationForm } from "@/lib/forms/Authentication";
import UserAccount from "@/lib/views/Users/UserAccount";
import { Page } from "@packages/common-components";

export default function Home() {
  return (
    <Page>
      <UserAccount />
      <AuthenticationForm />
    </Page>
  );
}
