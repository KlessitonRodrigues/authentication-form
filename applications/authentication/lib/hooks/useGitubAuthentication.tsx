import dotenv from '@/lib/constants/dotenv';
import { errorToast } from '@packages/daisy-ui-components';
import { useMutation } from '@tanstack/react-query';

import { githubSignInReq } from '../services/api/authentication';

const useGithubAuthentication = () => {
  const handleGithubLogin = {
    enabled: false,
    mutationKey: ['github-login'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (code: string) => {
      const resData = await githubSignInReq({ code });
      location.href = `${dotenv.REDIRECT_URL}?token=${resData.data?.token}`;
    },
  };

  const getGithubAuthUrl = () => {
    const githubAuthUrl = 'https://github.com/login/oauth/authorize';
    const redirect_uri = dotenv.GITHUB_REDIRECT;
    const client_id = dotenv.GITHUB_CLIENT_ID;
    const params = new URLSearchParams({
      client_id,
      redirect_uri,
      scope: 'read:user user:email',
      //state: 'RANDOM_STRING',
    });

    return `${githubAuthUrl}?${params.toString()}`;
  };

  const githubLoginQuery = useMutation(handleGithubLogin);

  return {
    getGithubAuthUrl,
    githubLoginQuery,
  };
};

export default useGithubAuthentication;
