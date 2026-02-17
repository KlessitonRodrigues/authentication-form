import SignOutView from "@/lib/views/Navigation/SignOutView";
import { Column, Paper, Text } from "@packages/common-components";

export default function LogoutPage() {
  return (
    <Column>
      <Paper>
        <Text>Are you sure you want to logout?</Text>
        <SignOutView />
      </Paper>
    </Column>
  );
}
