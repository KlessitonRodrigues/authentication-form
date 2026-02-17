"use client";

import {
  Column,
  isDarkTheme,
  setTheme,
  Switch,
} from "@packages/common-components";

const SettingsView = () => {
  const isDarkMode = isDarkTheme();

  return (
    <Column>
      <Switch
        label="Dark Mode"
        checked={isDarkMode}
        onChange={(setDark) => setTheme(setDark ? "dark" : "light")}
      />
    </Column>
  );
};

export default SettingsView;
