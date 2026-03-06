import { ResetPasswordForm } from "@/lib/forms/ResetPassword";
import {
  LoginCardSection,
  PageFull,
  materialColors,
} from "@packages/daisy-ui-components";
import { generateStaticParams } from "../page";
import { NEXTJS } from "@packages/common-types";
import { useServerTranslations } from "@/lib/hooks/useServerTranslation";
import LoginBgImg from "@/public/images/bluehillssunset.jpg";

export { generateStaticParams };

export default async function ResetPage(page: NEXTJS.PageProps) {
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
        loginForm={<ResetPasswordForm />}
      />
    </PageFull>
  );
}
