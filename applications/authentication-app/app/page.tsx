import { useServerTranslations } from '@/lib/hooks/useServerTranslation';
import AuthenticationView from '@/lib/views/authentication/AuthenticationView';
import minimalBgImg from '@/public/images/minimal_bg.jpg';
import { NEXTJS } from '@packages/common-types';
import {
  LoadScreen,
  PageFull,
  RedirectPage,
  SignInScreenV2,
  materialColors,
} from '@packages/daisy-ui-components';
import { Suspense } from 'react';

export default async function RootPage(page: NEXTJS.PageProps) {
  const { t } = await useServerTranslations(page);

  return (
    <PageFull>
      <Suspense fallback={<LoadScreen />}>
        <SignInScreenV2
          data={{
            title: t('pages.signIn.title'),
            description: t('pages.signIn.description'),
            bgImageUrl: minimalBgImg.src,
            bgBrightness: 0.75,
          }}
          bgColors={{
            from: materialColors.deepPurple['100'],
            to: materialColors.blue['50'],
          }}
          loginForm={<AuthenticationView t={t} />}
        />
        <RedirectPage />
      </Suspense>
    </PageFull>
  );
}
