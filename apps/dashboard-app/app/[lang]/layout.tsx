import NavbarView from "@/lib/views/Navigation/NavbarView";
import { LoadScreen, Page, Toastify } from "@packages/common-components";
import { Suspense } from "react";

import { generateStaticParams } from "@/lib/hooks/useServerTranslation";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

export default async function PageLayout(props: NEXTJS.PageProps) {
  return (
    <Suspense fallback={<LoadScreen />}>
      <Page>
        <NavbarView />
        {props.children}
        <Toastify />
      </Page>
    </Suspense>
  );
}
