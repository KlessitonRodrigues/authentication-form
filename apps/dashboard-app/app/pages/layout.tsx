import NavbarView from "@/lib/views/Navigation/NavbarView";
import { Page, Toastify } from "@packages/common-components";
import { PropsWithChildren, Suspense } from "react";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <Page>
      <Suspense>
        <NavbarView />
      </Suspense>
      {props.children}
      <Toastify />
    </Page>
  );
}
