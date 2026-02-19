import NavbarView from "@/lib/views/Navigation/NavbarView";
import { LoadScreen, Page, Toastify } from "@packages/common-components";
import { PropsWithChildren, Suspense } from "react";

export default function PageLayout(props: PropsWithChildren) {
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
