import { axiosClient } from "@/lib/config/axiosClient";
import queryClient from "@/lib/config/queryClient";
import dotenv from "@/lib/constants/dotenv";
import { errorToast } from "@packages/common-components";
import { Auth } from "@packages/common-types";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";

const useAuthentication = () => {
  const googleLoginReq = {
    enabled: false,
    mutationKey: ["google-login"],
    mutationFn: async (token: string) => {
      const res = await axiosClient.post("auth/google", { token });
      location.href = `${dotenv.REDIRECT_URL}?token=${res.data?.token}`;
    },
    onError: () => errorToast("Google Login Failed"),
  };

  const emailLoginReq = {
    enabled: false,
    mutationKey: ["email-login"],
    mutationFn: async (data: Auth.SignInRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const res = await axiosClient.post("auth/signin", data);
      location.href = `${dotenv.REDIRECT_URL}?token=${res.data?.token}`;
    },
    onError: () => errorToast("Invalid Login Credentials"),
  };

  const emailSignupReq = {
    enabled: false,
    mutationKey: ["email-signup"],
    mutationFn: async (data: Auth.SignUpRequest) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const res = await axiosClient.post("auth/signup", data);
      location.href = `${dotenv.REDIRECT_URL}?token=${res.data?.token}`;
    },
    onError: () => errorToast("Signup Failed"),
  };

  const sendRecoveryCodeReq = {
    enabled: false,
    mutationKey: ["send-recovery-code"],
    mutationFn: async (data: { email: string }) => {
      await axiosClient.post("auth/recover", data);
    },
    onError: () => errorToast("Failed to send recovery code"),
  };

  const loginQuery = useMutation(emailLoginReq, queryClient);
  const signupQuery = useMutation(emailSignupReq, queryClient);
  const googleLoginQuery = useMutation(googleLoginReq, queryClient);
  const sendRecoveryCodeQuery = useMutation(sendRecoveryCodeReq, queryClient);

  const googleLoginHandler = {
    onSuccess: (tokenResponse: TokenResponse) => {
      googleLoginQuery.mutate(tokenResponse.access_token);
    },
    onError: () => errorToast("Google Login Failed"),
  };

  const googleLoginHandle = useGoogleLogin(googleLoginHandler);

  return {
    googleLoginHandle,
    googleLoginQuery,
    loginQuery,
    signupQuery,
    sendRecoveryCodeQuery,
  };
};

export default useAuthentication;
