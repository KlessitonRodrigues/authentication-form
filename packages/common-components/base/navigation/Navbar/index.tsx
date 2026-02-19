"use client";
import { useState } from "react";
import { Icons } from "../../icons/IconMap";
import If from "../../containers/If";
import { Button } from "../../buttons/Button";
import { Text } from "../../text/Text";
import { Row } from "../../containers/Flex";
import { UserInitials } from "../../../common/users/UserInitials";
import { Badge } from "../../badge/Bagde";

interface NavBarProps {
  title?: string;
  userName?: string;
  userNotifications?: number;
  sidebarComponent?: React.ReactNode;
  userMenuComponent?: React.ReactNode;
  notificationsComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const NavBar = (props: NavBarProps) => {
  const {
    title,
    userName,
    userNotifications,
    sidebarComponent,
    userMenuComponent,
    notificationsComponent,
  } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleSideBar = (to?: boolean) => {
    setMenuOpen(to ?? !menuOpen);
    setUserMenuOpen(false);
    setNotificationsOpen(false);
  };

  const handleUserMenu = (to?: boolean) => {
    setUserMenuOpen(to ?? !userMenuOpen);
    setMenuOpen(false);
    setNotificationsOpen(false);
  };

  const handleNotifications = (to?: boolean) => {
    setNotificationsOpen(to ?? !notificationsOpen);
    setMenuOpen(false);
    setUserMenuOpen(false);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setUserMenuOpen(false);
    setNotificationsOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-40" onMouseLeave={closeMenus}>
      <nav className="navbar z-30 shadow-sm bg-main text-white">
        <Row gap={4}>
          <Button
            ghost
            variant="square"
            size="lg"
            className="transition"
            onClick={() => handleSideBar()}
            onMouseEnter={() => handleSideBar(true)}
          >
            <If
              condition={!menuOpen}
              true={<Icons icon="menu" size="28" />}
              false={<Icons icon="close" size="28" />}
            />
          </Button>

          <Row flexY="center">
            <Icons icon="chart" size="28" />
            <Text fs="xl" bold>
              {title || "Application"}
            </Text>
          </Row>

          <Row flexY="center" className="w-fit px-2" gap={4}>
            <Badge content={userNotifications || 0}>
              <Button
                ghost
                variant="square"
                size="md"
                className="transition"
                onClick={() => handleNotifications()}
                onMouseEnter={() => handleNotifications(true)}
              >
                <Icons icon="notification" size="22" />
              </Button>
            </Badge>
            <Button
              ghost
              variant="square"
              size="lg"
              className="transition"
              onClick={() => handleUserMenu()}
              onMouseEnter={() => handleUserMenu(true)}
            >
              <UserInitials name={userName || "User Name"} />
            </Button>
          </Row>
        </Row>
      </nav>

      <div
        className="absolute w-full lg:w-auto h-[93vh] max-w-md left-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: menuOpen ? "100%" : "0" }}
      >
        {sidebarComponent}
      </div>

      <div
        className="absolute max-w-md right-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: notificationsOpen ? "100%" : "0" }}
      >
        {notificationsComponent}
      </div>

      <div
        className="absolute max-w-60 right-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: userMenuOpen ? "100%" : "0" }}
      >
        {userMenuComponent}
      </div>
    </div>
  );
};
