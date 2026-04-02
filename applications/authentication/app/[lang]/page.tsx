import { generateStaticParams, useServerTranslations } from '@/lib/hooks/useServerTranslation';
import AuthenticationView from '@/lib/views/authentication/AuthenticationView';
import beachBg1 from '@/public/images/beach_bg_01.jpg';
import beachBg2 from '@/public/images/beach_bg_02.jpg';
import beachBg3 from '@/public/images/beach_bg_03.jpg';
import beachBg4 from '@/public/images/beach_bg_04.jpg';
import beachBg5 from '@/public/images/beach_bg_05.jpg';
import { NEXTJS } from '@packages/common-types';
import { PageFull, SignInCarouselScreen, materialColors } from '@packages/daisy-ui-components';

export { generateStaticParams };

export default async function RootPage(page: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(page);

  return (
    <PageFull>
      <SignInCarouselScreen
        data={[
          {
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            imgUrl: beachBg1.src,
          },
          {
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            imgUrl: beachBg2.src,
          },
          {
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            imgUrl: beachBg3.src,
          },
          {
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            imgUrl: beachBg4.src,
          },
          {
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            imgUrl: beachBg5.src,
          },
        ]}
        bgColors={{
          from: materialColors.grey['100'],
          to: materialColors.lightBlue['100'],
        }}
        loginForm={<AuthenticationView t={t} />}
      />
    </PageFull>
  );
}
