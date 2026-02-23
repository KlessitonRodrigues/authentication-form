import { UserProfileForm } from "@/lib/forms/users/UserProfile";
import UserAccountView from "@/lib/views/Users/UserAccountView";
import { Column, Paper, TitleIcon } from "@packages/common-components";

import { useServerTranslations } from "@/lib/hooks/useServerTranslation";

import { NEXTJS } from "@packages/common-types";

export default async function ProfilePage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <TitleIcon title={t("profile.title")} icon="user" />
        <UserAccountView />
        <UserProfileForm />
      </Paper>
    </Column>
  );
}
