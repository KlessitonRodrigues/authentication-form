import SignOutView from "@/lib/views/Navigation/SignOutView";
import { Column, Paper, Text } from "@packages/common-components";

import {
  useServerTranslations,
  generateStaticParams,
} from "@/lib/hooks/useTranslations";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

export default async function LogoutPage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <Text>{t("logout.confirmation")}</Text>
        <SignOutView />
      </Paper>
    </Column>
  );
}
