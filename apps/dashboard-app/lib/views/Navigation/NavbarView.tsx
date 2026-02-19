"use client";
import useAuthentication from "@/lib/hooks/useAuthentication";
import useUserStore from "@/lib/store/user";
import {
  Breadcumbs,
  BreadcumbsProps,
  DescriptionMenu,
  DescriptionMenuProps,
  Menu,
  MenuProps,
  NavBar,
  NotificationList,
  Row,
} from "@packages/common-components";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const getMenuItems = (pathname: string) => {
  const descriptionMenuItems: DescriptionMenuProps["items"] = [
    {
      icon: "home",
      label: "Home",
      description: "Go to homepage",
      href: "/pages/home/",
      active: pathname === "/pages/home/",
    },
    {
      icon: "chart",
      label: "Dashboard",
      description: "User dashboard",
      href: "/pages/dashboard/",
      active: pathname === "/pages/dashboard/",
    },
    {
      icon: "email",
      label: "Help",
      description: "Get help and support",
      href: "/pages/help/",
      active: pathname === "/pages/help/",
    },
  ];

  const menuItems: MenuProps["items"] = [
    {
      icon: "user",
      label: "Profile",
      href: "/pages/profile/",
      active: pathname === "/pages/profile/",
    },
    {
      icon: "settings",
      label: "Settings",
      href: "/pages/settings/",
      active: pathname === "/pages/settings/",
    },
    {
      icon: "signOut",
      label: "Logout",
      href: "/pages/logout/",
      active: pathname === "/pages/logout/",
    },
  ];

  const pathItems: BreadcumbsProps["items"] = [];
  pathItems.push(descriptionMenuItems[0]);
  [...descriptionMenuItems, ...menuItems].forEach((item, i) => {
    if (i === 0) return;
    if (item?.active) pathItems.push(item);
  });

  return { descriptionMenuItems, menuItems, pathItems };
};

const notificationList = [
  { id: "1", message: "Teste notification 1" },
  { id: "2", message: "Teste notification 2" },
  { id: "3", message: "Teste notification 3" },
  { id: "4", message: "Teste notification 4" },
  { id: "5", message: "Teste notification 5" },
];

const NavBarView = () => {
  const pathname = usePathname();
  const { refreshTokenQuery } = useAuthentication();
  const { descriptionMenuItems, menuItems, pathItems } = getMenuItems(pathname);
  const { user } = useUserStore();

  useEffect(() => {
    refreshTokenQuery.refetch();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <NavBar
        title="Authentication Form"
        userName={user?.name}
        userNotifications={notificationList.length}
        sidebarComponent={<DescriptionMenu items={descriptionMenuItems} />}
        userMenuComponent={<Menu items={menuItems} />}
        notificationsComponent={
          <NotificationList notifications={notificationList} />
        }
      />
      <Row>
        <Breadcumbs items={pathItems} />
      </Row>
    </>
  );
};

export default NavBarView;
