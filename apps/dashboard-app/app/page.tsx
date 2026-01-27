import {
  Menu,
  MenuProps,
  NavBar,
  Page,
  Paper,
} from "@packages/common-components";

const menuItems: MenuProps["items"] = [
  { icon: "user", label: "Profile" },
  { icon: "settings", label: "Settings" },
  { icon: "signOut", label: "Logout" },
];

export default function Home() {
  return (
    <Page>
      <NavBar
        title="Dashboard"
        sidebarComponent={<Menu items={menuItems} />}
        userMenuComponent={<Menu items={menuItems} />}
      />
      <Paper>
        <h1>Welcome to the Dashboard</h1>
        <p>This is the main page of your dashboard application.</p>
      </Paper>
    </Page>
  );
}
