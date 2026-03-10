import { AuthenticationForm } from '@/lib/forms/Authentication';
import { generateStaticParams, useServerTranslations } from '@/lib/hooks/useServerTranslation';
import minimalBgImg from '@/public/images/minimal_bg.jpg';
import { NEXTJS } from '@packages/common-types';
import { PageFull, SignInScreenV2, materialColors } from '@packages/daisy-ui-components';

export { generateStaticParams };

export default async function RootPage(page: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(page);

  return (
    <PageFull>
      <SignInScreenV2
        data={{
          title: t('pages.signIn.title'),
          description: t('pages.signIn.description'),
          bgImageUrl: minimalBgImg.src,
          bgBrightness: 0.75,
        }}
        bgColors={{
          from: materialColors.deepPurple['100'],
          to: materialColors.lightBlue['50'],
        }}
        loginForm={<AuthenticationForm t={t} />}
      />
    </PageFull>
  );
}
