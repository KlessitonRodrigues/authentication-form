import {
  DescriptionMenu,
  DescriptionMenuProps,
  Menu,
  MenuProps,
  NavBar,
  Page,
  Toastify,
} from "@packages/common-components";
import { PropsWithChildren } from "react";

const DescriptionMenuItems: DescriptionMenuProps["items"] = [
  {
    icon: "home",
    label: "Home",
    description: "Go to homepage",
    href: "/pages/home",
  },
  {
    icon: "chart",
    label: "Dashboard",
    description: "User dashboard",
    href: "/pages/dashboard",
  },
  {
    icon: "settings",
    label: "Settings",
    description: "Application settings",
    href: "/pages/settings",
  },
  {
    icon: "email",
    label: "Help",
    description: "Get help and support",
    href: "/pages/help",
  },
];

const menuItems: MenuProps["items"] = [
  { icon: "user", label: "Profile", href: "/pages/profile" },
  { icon: "settings", label: "Settings", href: "/pages/settings" },
  { icon: "signOut", label: "Logout" },
];

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Page>
        <NavBar
          title="Authentication Form"
          sidebarComponent={<DescriptionMenu items={DescriptionMenuItems} />}
          userMenuComponent={<Menu items={menuItems} />}
        />
        {children}
      </Page>
      <Toastify />
    </>
  );
}
