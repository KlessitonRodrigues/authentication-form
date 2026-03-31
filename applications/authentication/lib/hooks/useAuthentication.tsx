import client from '@/lib/config/queryClient';
import dotenv from '@/lib/constants/dotenv';
import { Auth } from '@packages/common-types';
import { errorToast, successToast } from '@packages/daisy-ui-components';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import {
  emailSignInReq,
  emailSignUpReq,
  resetPasswordReq,
  sendRecoveryCodeReq,
  verifyRecoveryCodeReq,
} from '../services/api/authentication';

const useAuthentication = () => {
  const router = useRouter();

  const handleEmailSignIn = {
    enabled: false,
    mutationKey: ['email-login'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (data: Auth.SignInRequest) => {
      const resData = await emailSignInReq(data);
      location.href = `${dotenv.REDIRECT_URL}?token=${resData?.token}`;
    },
  };

  const handleEmailSignUp = {
    enabled: false,
    mutationKey: ['email-signup'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (data: Auth.SignUpRequest) => {
      const resData = await emailSignUpReq(data);
      location.href = `${dotenv.REDIRECT_URL}?token=${resData?.token}`;
    },
  };

  const handleSendRecoveryCode = {
    enabled: false,
    mutationKey: ['send-recovery-code'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (data: Auth.SendRecoveryCodeRequest) => {
      const resData = await sendRecoveryCodeReq(data);
      router.push('/reset?email=' + data.email);
      alert(resData?.recoveryCode);
    },
  };

  const handleVerifyRecoveryCode = {
    enabled: false,
    mutationKey: ['verify-recovery-code'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (data: Auth.VerifyRecoveryCodeRequest) => {
      const resData = await verifyRecoveryCodeReq(data);
      router.push(`/reset?email=${data.email}&resetToken=${resData?.token}`);
      return resData;
    },
  };

  const handleResetPassword = {
    enabled: false,
    mutationKey: ['reset-password'],
    onError: (msg: string) => errorToast(msg),
    mutationFn: async (data: Auth.ResetPasswordRequest) => {
      await resetPasswordReq(data);
      successToast('Password reset successful');
      router.push('/');
    },
  };

  const loginQuery = useMutation(handleEmailSignIn, client);
  const signupQuery = useMutation(handleEmailSignUp, client);
  const sendRecoveryCodeQuery = useMutation(handleSendRecoveryCode, client);
  const verifyRecoveryCodeQuery = useMutation(handleVerifyRecoveryCode, client);
  const resetPasswordQuery = useMutation(handleResetPassword, client);

  return {
    loginQuery,
    signupQuery,
    sendRecoveryCodeQuery,
    verifyRecoveryCodeQuery,
    resetPasswordQuery,
  };
};

export default useAuthentication;
