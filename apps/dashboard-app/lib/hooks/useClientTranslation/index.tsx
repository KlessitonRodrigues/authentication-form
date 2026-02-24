import { getDefaultLanguage } from "@packages/common-components";
import { getTranslation, translations } from "../useServerTranslation";

export const useClientTranslations = () => {
  const lang = getDefaultLanguage();
  const translation = translations[lang] || translations["en"];
  const translate = (key: string) => getTranslation(key, translation);
  return { lang, t: translate };
};
