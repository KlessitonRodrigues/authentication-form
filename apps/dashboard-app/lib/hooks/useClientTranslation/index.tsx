import { getBrowserWindow } from "@packages/common-components";
import { getTranslation, translations } from "../useServerTranslation";

export const useClientTranslations = () => {
  const window = getBrowserWindow();
  const pathname = window?.location.pathname || "/en/";
  const lang = pathname.split("/")[1] || "en";
  const translation = translations[lang] || translations["en"];
  const translate = (key: string) => getTranslation(key, translation);
  return { lang, t: translate };
};
