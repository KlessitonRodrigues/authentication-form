import { Column, Paper, TitleIcon } from "@packages/common-components";

import {
  useServerTranslations,
  generateStaticParams,
} from "@/lib/hooks/useTranslations";
import { NEXTJS } from "@packages/common-types";

export { generateStaticParams };

export default async function HelpPage(props: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(props);

  return (
    <Column>
      <Paper>
        <TitleIcon title={t("help.title")} icon="questionMark" />
      </Paper>
    </Column>
  );
}
