import NavbarView from "@/lib/views/Navigation/NavbarView";
import { LoadScreen, Page, Toastify } from "@packages/common-components";
import { PropsWithChildren, Suspense } from "react";

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<LoadScreen />}>
      <Page key={"en"}>
        <NavbarView />
        {children}
        <Toastify />
      </Page>
    </Suspense>
  );
}
