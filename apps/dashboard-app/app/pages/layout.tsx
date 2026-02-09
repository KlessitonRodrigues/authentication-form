import NavbarView from "@/lib/views/Navigation/NavbarView";
import { Page, Toastify } from "@packages/common-components";
import { PropsWithChildren } from "react";

export default function PageLayout(props: PropsWithChildren) {
  return (
    <Page>
      <NavbarView />
      {props.children}
      <Toastify />
    </Page>
  );
}
