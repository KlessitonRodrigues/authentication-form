"use client";
import { useState } from "react";
import { Icons } from "../../icons/IconMap";
import If from "../../containers/If";
import { Button } from "../../buttons/Button";
import { Text } from "../../text/Text";
import { Row } from "../../containers/Flex";

interface NavBarProps {
  title?: string;
  sidebarComponent?: React.ReactNode;
  userMenuComponent?: React.ReactNode;
}

export const NavBar = (props: NavBarProps) => {
  const { title, sidebarComponent, userMenuComponent } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const openSideBar = () => {
    setMenuOpen(!menuOpen);
    setUserMenuOpen(false);
  };

  const openUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
    setMenuOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-40">
      <div className="navbar z-30 shadow-sm bg-main text-white">
        <Row gap={4} className="px-4">
          <Button ghost variant="square" onClick={openSideBar}>
            <Icons icon="menu" size="28" />
          </Button>
          <Row flexY="center">
            <Icons icon="logo" size="34" />
            <Text fs="xl" bold>
              {title || "Application"}
            </Text>
          </Row>
          <Row className="w-fit">
            <div
              className="w-9 h-9 p-2 rounded-full bg-bg1 text-black cursor-pointer"
              onClick={openUserMenu}
            >
              <Icons icon="user" size="28" />
            </div>
          </Row>
        </Row>
      </div>
      <If condition={menuOpen}>
        <div className="absolute w-full lg:w-auto left-0 top-full z-10 fade-down shadow-md">
          {sidebarComponent}
        </div>
      </If>
      <If condition={userMenuOpen}>
        <div className="absolute right-0 top-full z-10 fade-down shadow-md">
          {userMenuComponent}
        </div>
      </If>
    </div>
  );
};
