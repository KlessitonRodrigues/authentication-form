import {
  Breadcumbs,
  DescriptionMenu,
  DescriptionMenuProps,
  Menu,
  MenuProps,
  NavBar,
  Page,
  Row,
  Toastify,
} from "@packages/common-components";
import { PropsWithChildren } from "react";

const DescriptionMenuItems: DescriptionMenuProps["items"] = [
  {
    icon: "home",
    label: "Home",
    description: "Go to homepage",
    href: "/pages/home",
    active: true,
  },
  {
    icon: "chart",
    label: "Dashboard",
    description: "User dashboard",
    href: "/pages/dashboard",
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
  { icon: "signOut", label: "Logout", href: "/pages/logout" },
];

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Page>
      <NavBar
        title="Authentication Form"
        sidebarComponent={<DescriptionMenu items={DescriptionMenuItems} />}
        userMenuComponent={<Menu items={menuItems} />}
      />
      <Row>
        <Breadcumbs items={[{ label: "Home", icon: "home", href: "/" }]} />
      </Row>
      {children}
      <Toastify />
    </Page>
  );
}
