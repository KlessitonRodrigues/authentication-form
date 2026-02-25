import { KeyboardEvent } from "react";

export const getBrowserWindow = () => {
  if (typeof window === "undefined") return null;
  return window;
};

export const isDarkTheme = () => {
  const window = getBrowserWindow();
  if (!window) return false;
  const body = window.document.body;
  if (body.classList.contains("dark")) return true;
  return false;
};

export const setTheme = (theme: "light" | "dark") => {
  const window = getBrowserWindow();
  if (!window) return;
  const body = window.document.body;
  if (theme === "dark") body.classList.add("dark");
  else body.classList.remove("dark");
  if (theme === "light") body.classList.add("light");
  else body.classList.remove("light");
};

export const getFromStorage = (key: string) => {
  const window = getBrowserWindow();
  if (!window) return "";
  return window.localStorage.getItem(key);
};

export const setToStorage = (key: string, value: string) => {
  const window = getBrowserWindow();
  if (!window) return "";
  window.localStorage.setItem(key, value);
};

export const getDefaultLanguage = () => {
  const languages = ["en", "pt"];
  const defaultLang = process.env.NEXT_PUBLIC_APP_LOCALE;
  if (defaultLang) return defaultLang;

  const storedLang = getFromStorage("language") || "";
  if (languages.includes(storedLang)) return storedLang;

  const window = getBrowserWindow();
  if (!window) return "en";
  const browserLang = window.navigator.language || "en";
  const lang = browserLang.split("-")[0];
  setDefaultLanguage(lang);

  return lang;
};

export const setDefaultLanguage = (lang: string) => {
  setToStorage("language", lang);
  const window = getBrowserWindow();
  if (window) window.location.reload();
};

export const inputNumbers = (ev: any, decimals?: boolean) => {
  const value = ev.currentTarget.value;
  const key = ev.key;
  const invalidKeys = [".", ",", "e", "E", "-"];

  if (decimals) invalidKeys.splice(0, 2);

  if (invalidKeys.includes(key)) ev.preventDefault();

  if (decimals && (key === "," || key === ".")) {
    if (value.includes(".") || value.includes(",")) {
      ev.preventDefault();
    } else {
      ev.currentTarget.value = value.replace(",", ".");
    }
  }
  if (Number(value) < 0) {
    ev.currentTarget.value = "1";
    ev.preventDefault();
  }
  if (Number(value) === 0 && key === "ArrowDown") {
    ev.currentTarget.value = "1";
    ev.preventDefault();
  }
};
