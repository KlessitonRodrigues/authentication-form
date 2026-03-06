import {
  generateStaticParams,
  setTranslationEnv,
} from "@/lib/hooks/useServerTranslation";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

export default async function PageLayout(props: NEXTJS.PageProps) {
  setTranslationEnv((await props.params)?.lang);
  return props.children;
}
