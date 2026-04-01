import dotenv from '@/lib/constants/dotenv';
import { errorToast } from '@packages/daisy-ui-components';
import { TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';

import { googleSignInReq } from '../services/api/authentication';

const useGoogleAuthentication = () => {
  const handleGoogleLogin = {
    enabled: false,
    mutationKey: ['google-login'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (token: string) => {
      const resData = await googleSignInReq({ token });
      location.href = `${dotenv.REDIRECT_URL}?token=${resData?.token}`;
    },
  };

  const googleLoginHandler = {
    onSuccess: (tokenResponse: TokenResponse) => {
      googleLoginQuery.mutate(tokenResponse.access_token);
    },
    onError: () => errorToast('Google Login Failed'),
  };

  const googleLoginHandle = useGoogleLogin(googleLoginHandler);
  const googleLoginQuery = useMutation(handleGoogleLogin);

  return {
    googleLoginHandle,
    googleLoginQuery,
  };
};

export default useGoogleAuthentication;
