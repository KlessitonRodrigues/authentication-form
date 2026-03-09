import { Column, Paper, TitleIcon } from "@packages/daisy-ui-components";

import { useServerTranslations } from "@/lib/hooks/useServerTranslation";

import { NEXTJS } from "@packages/common-types";
import UserAccountView from "@/lib/views/users/UserAccountView";
import UserAccountForm from "@/lib/views/users/UserAccountForm";

export default async function ProfilePage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <TitleIcon title={t("profile.title")} icon="user" />
        <UserAccountView />
        <UserAccountForm />
      </Paper>
    </Column>
  );
}
