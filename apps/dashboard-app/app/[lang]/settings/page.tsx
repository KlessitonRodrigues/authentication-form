import { Column, Paper, TitleIcon } from "@packages/daisy-ui-components";

import { useServerTranslations } from "@/lib/hooks/useServerTranslation";

import { NEXTJS } from "@packages/common-types";
import SettingsView from "@/lib/views/system/SettingsView";

export default async function SettingsPage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <TitleIcon title={t("settings.title")} icon="settings" />
        <SettingsView />
      </Paper>
    </Column>
  );
}
