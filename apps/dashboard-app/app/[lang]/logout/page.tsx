import SignOutView from "@/lib/views/Navigation/SignOutView";
import { Column, Paper, Text } from "@packages/common-components";

import { useServerTranslations } from "@/lib/hooks/useServerTranslation";

import { NEXTJS } from "@packages/common-types";

export default async function LogoutPage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <Text>{t("logout.confirmation")}</Text>
        <SignOutView />
      </Paper>
    </Column>
  );
}
