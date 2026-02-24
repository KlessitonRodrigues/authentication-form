import NavbarView from "@/lib/views/Navigation/NavbarView";
import { LoadScreen, Page, Toastify } from "@packages/common-components";
import { Suspense } from "react";

import {
  generateStaticParams,
  setTranslationEnv,
} from "@/lib/hooks/useServerTranslation";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

export default async function PageLayout(props: NEXTJS.PageProps) {
  setTranslationEnv((await props.params)?.lang);

  return (
    <Page>
      <Suspense fallback={<LoadScreen />}>
        <NavbarView />
        {props.children}
      </Suspense>
      <Toastify />
    </Page>
  );
}
