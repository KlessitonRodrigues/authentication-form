import { UserProfileForm } from "@/lib/forms/users/UserProfile";
import UserAccountView from "@/lib/views/Users/UserAccountView";
import { Column, Paper, TitleIcon } from "@packages/common-components";

export default function ProfilePage() {
  return (
    <Column>
      <Paper>
        <TitleIcon title="Profile" icon="user" />
        <UserAccountView />
        <UserProfileForm />
      </Paper>
    </Column>
  );
}
