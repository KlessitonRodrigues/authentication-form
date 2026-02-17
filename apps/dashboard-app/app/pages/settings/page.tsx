import SettingsView from "@/lib/views/System/SettingsView";
import { Column, Paper, TitleIcon } from "@packages/common-components";

export default function SettingsPage() {
  return (
    <Column>
      <Paper>
        <TitleIcon title="Settings" icon="settings" />
        <SettingsView />
      </Paper>
    </Column>
  );
}
