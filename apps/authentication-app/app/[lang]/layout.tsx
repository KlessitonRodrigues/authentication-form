import {
  generateStaticParams,
  setTranslationEnv,
} from "@/lib/hooks/useServerTranslation";
import { NEXTJS } from "@packages/common-types";
import { LoadScreen } from "@packages/daisy-ui-components";
import { Suspense } from "react";

export { generateStaticParams };

export default async function PageLayout(props: NEXTJS.PageProps) {
  setTranslationEnv((await props.params)?.lang);
  return <Suspense fallback={<LoadScreen />}>{props.children}</Suspense>;
}
