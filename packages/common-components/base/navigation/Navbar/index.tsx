"use client";
import { useState } from "react";
import { Icons } from "../../icons/IconMap";
import If from "../../containers/If";

interface NavBarProps {
  title?: string;
  sidebarComponent?: React.ReactNode;
  userMenuComponent?: React.ReactNode;
}

export const NavBar = (props: NavBarProps) => {
  const { title, sidebarComponent, userMenuComponent } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="w-full relative">
      <div className="navbar z-30 bg-base-100 shadow-sm">
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setUserMenuOpen(false);
            }}
          >
            <Icons icon="menu" size="22" />
          </button>
        </div>
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{title || "Dashboard"}</a>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => {
              setUserMenuOpen(!userMenuOpen);
              setMenuOpen(false);
            }}
          >
            <Icons icon="user" size="22" />
          </button>
        </div>
      </div>
      <If condition={menuOpen}>
        <div className="absolute left-0 top-full z-10 fade-down shadow-md">
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
