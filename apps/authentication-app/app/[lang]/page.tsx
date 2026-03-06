import { AuthenticationForm } from "@/lib/forms/Authentication";
import {
  materialColors,
  LoginCardSection,
  PageFull,
} from "@packages/daisy-ui-components";

import LoginBgImg from "@/public/images/bluehillssunset.jpg";
import { NEXTJS } from "@packages/common-types";
import {
  generateStaticParams,
  useServerTranslations,
} from "@/lib/hooks/useServerTranslation";

export { generateStaticParams };

export default async function RootPage(page: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(page);

  return (
    <PageFull>
      <LoginCardSection
        data={{
          title: t("pages.signIn.title"),
          description: t("pages.signIn.description"),
          description2: t("pages.signIn.description2"),
          bgImageUrl: LoginBgImg.src,
          bgBrightness: 0.6,
        }}
        bgGradient={{
          from: materialColors.blue["200"],
          to: materialColors.amber["100"],
        }}
        loginForm={<AuthenticationForm t={t} />}
      />
    </PageFull>
  );
}
