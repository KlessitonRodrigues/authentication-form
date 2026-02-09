"use client";
import { useState } from "react";
import { Icons } from "../../icons/IconMap";
import If from "../../containers/If";
import { Button } from "../../buttons/Button";
import { Text } from "../../text/Text";
import { Row } from "../../containers/Flex";
import { UserInitials } from "../../../common/users/UserInitials";

interface NavBarProps {
  title?: string;
  userName?: string;
  sidebarComponent?: React.ReactNode;
  userMenuComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const NavBar = (props: NavBarProps) => {
  const { title, userName, sidebarComponent, userMenuComponent } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleSideBar = (to?: boolean) => {
    setMenuOpen(to ?? !menuOpen);
    setUserMenuOpen(false);
  };

  const handleUserMenu = (to?: boolean) => {
    setUserMenuOpen(to ?? !userMenuOpen);
    setMenuOpen(false);
  };

  const closeMenus = () => {
    setMenuOpen(false);
    setUserMenuOpen(false);
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

          <Row flexY="center" className="w-fit">
            <UserInitials name={userName || "User Name"} />
            <Button
              ghost
              variant="square"
              size="lg"
              className="transition"
              onClick={() => handleUserMenu()}
              onMouseEnter={() => handleUserMenu(true)}
            >
              <If
                condition={!userMenuOpen}
                true={<Icons icon="menuDots" size="22" />}
                false={<Icons icon="close" size="22" />}
              />
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
        className="absolute max-w-60 right-0 top-full z-10 overflow-hidden fade-down shadow-md transition"
        style={{ width: userMenuOpen ? "100%" : "0" }}
      >
        {userMenuComponent}
      </div>
    </div>
  );
};
