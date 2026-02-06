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
  children?: React.ReactNode;
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
      <nav className="navbar z-30 shadow-sm bg-main text-white">
        <Row gap={4}>
          <Button ghost variant="square" size="lg" onClick={openSideBar}>
            <If condition={!menuOpen}>
              <Icons icon="menu" size="28" />
            </If>
            <If condition={menuOpen}>
              <Icons icon="close" size="28" />
            </If>
          </Button>

          <Row flexY="center">
            <Icons icon="chart" size="28" />
            <Text fs="xl" bold>
              {title || "Application"}
            </Text>
          </Row>

          <Row flexY="center" className="w-fit">
            <div className="w-8 h-8 p-1 rounded-full border-2">
              <Icons icon="user" size="28" />
            </div>
            <Text bold fo="70" className="text-nowrap hidden lg:block">
              Klessiton R.
            </Text>
            <Button ghost variant="square" size="lg" onClick={openUserMenu}>
              <Icons icon="menuDots" size="22" />
            </Button>
          </Row>
        </Row>
      </nav>
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
