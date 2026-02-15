import { Column, Paper, Switch, TitleIcon } from "@packages/common-components";

export default function SettingsPage() {
  return (
    <Column>
      <Paper>
        <TitleIcon title="Settings" icon="settings" />
        <Switch label="Theme" />
      </Paper>
    </Column>
  );
}
