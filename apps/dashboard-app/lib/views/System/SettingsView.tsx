"use client";

import {
  Column,
  getDefaultLanguage,
  isDarkTheme,
  Selector,
  setDefaultLanguage,
  setTheme,
  Switch,
} from "@packages/common-components";

const SettingsView = () => {
  const isDarkMode = isDarkTheme();

  return (
    <Column flexX="start">
      <Selector
        label="Language"
        options={[
          { label: "English", value: "en" },
          { label: "Portuguese", value: "pt" },
        ]}
        defaultValue={getDefaultLanguage()}
        onChange={(value) => setDefaultLanguage(value)}
      />
      <Switch
        label="Dark Mode"
        checked={isDarkMode}
        onChange={(setDark) => setTheme(setDark ? "dark" : "light")}
      />
    </Column>
  );
};

export default SettingsView;
