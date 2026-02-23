import enLang from "@/public/i18n/en.json";
import ptLang from "@/public/i18n/pt.json";
import { NEXTJS } from "@packages/common-types";

const translations: Record<string, typeof enLang> = {
  en: enLang,
  pt: ptLang,
};

export const useServerTranslations = async (props: NEXTJS.PageProps) => {
  const { lang } = await props.params;
  const translation = translations[lang] || translations["en"];

  const getTranslation = (key: string) => {
    const keys = key.split(".");
    const getValue = (obj: any, key: string) => (obj ? obj[key] : undefined);
    const result = keys.reduce(getValue, translation);
    return result || "NO_TEXT";
  };

  return { t: getTranslation };
};

export const generateStaticParams = () => {
  return [{ lang: "en" }, { lang: "pt" }];
};
