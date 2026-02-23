import { UserProfileForm } from "@/lib/forms/users/UserProfile";
import UserAccountView from "@/lib/views/Users/UserAccountView";
import { Column, Paper, TitleIcon } from "@packages/common-components";

import {
  useServerTranslations,
  generateStaticParams,
} from "@/lib/hooks/useTranslations";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

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
