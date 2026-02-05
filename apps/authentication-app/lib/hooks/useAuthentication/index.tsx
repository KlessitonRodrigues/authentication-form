import { axiosClient } from "@/lib/config/axiosClient";
import client from "@/lib/config/queryClient";
import dotenv from "@/lib/constants/dotenv";
import { errorToast, successToast } from "@packages/common-components";
import { Auth } from "@packages/common-types";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useAuthentication = () => {
  const router = useRouter();

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
    mutationFn: async (data: Auth.SendRecoveryCodeRequest) => {
      const res = await axiosClient.post("auth/send-recovery-code", data);
      router.push("/reset?email=" + data.email);
      alert(res.data?.recoveryCode);
    },
    onError: () => errorToast("Failed to send recovery code"),
  };

  const verifyRecoveryCodeReq = {
    enabled: false,
    mutationKey: ["verify-recovery-code"],
    mutationFn: async (data: Auth.VerifyRecoveryCodeRequest) => {
      const res = await axiosClient.post("auth/verify-recovery-code", data);
      router.push(`/reset?email=${data.email}&resetToken=${res.data?.token}`);
      return res.data;
    },
    onError: () => errorToast("Invalid recovery code"),
  };

  const resetPasswordReq = {
    enabled: false,
    mutationKey: ["reset-password"],
    mutationFn: async (data: Auth.ResetPasswordRequest) => {
      await axiosClient.post("auth/reset-password", data);
      successToast("Password reset successful");
      router.push("/");
    },
    onError: () => errorToast("Password reset failed"),
  };

  const loginQuery = useMutation(emailLoginReq, client);
  const signupQuery = useMutation(emailSignupReq, client);
  const googleLoginQuery = useMutation(googleLoginReq, client);
  const sendRecoveryCodeQuery = useMutation(sendRecoveryCodeReq, client);
  const verifyRecoveryCodeQuery = useMutation(verifyRecoveryCodeReq, client);
  const resetPasswordQuery = useMutation(resetPasswordReq, client);

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
    verifyRecoveryCodeQuery,
    resetPasswordQuery,
  };
};

export default useAuthentication;
