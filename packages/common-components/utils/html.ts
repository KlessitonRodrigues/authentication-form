"use client";
export const isDarkTheme = () => {
  const body = document.body;
  if (body.classList.contains("dark")) return true;
  return false;
};

export const setTheme = (theme: "light" | "dark") => {
  const body = document.body;
  if (theme === "dark") body.classList.add("dark");
  else body.classList.remove("dark");
  if (theme === "light") body.classList.add("light");
  else body.classList.remove("light");
};

export const getFromStorage = (key: string) => {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(key);
};

export const setToStorage = (key: string, value: string) => {
  if (typeof window === "undefined") return "";
  window.localStorage.setItem(key, value);
};

export const getDefaultLanguage = () => {
  const languages = ["en", "pt"];

  const storedLang = getFromStorage("language") || "";
  if (languages.includes(storedLang)) return storedLang;

  if (typeof window === "undefined") return "en";
  const browserLang = window.navigator.language || "en";
  const lang = browserLang.split("-")[0];
  setDefaultLanguage(lang);

  return lang;
};

export const setDefaultLanguage = (lang: string) => {
  setToStorage("language", lang);
  window.location.reload();
};
