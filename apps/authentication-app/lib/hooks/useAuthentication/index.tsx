import { axiosClient } from "@/lib/config/axiosClient";
import queryClient from "@/lib/config/queryClient";
import dotenv from "@/lib/constants/dotenv";
import { errorToastr } from "@packages/common-components";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface EmailLoginData {
  email?: string;
  password?: string;
}

const useAuthentication = () => {
  const [googleToken, setGoogleToken] = useState("");

  const googleLoginReq = {
    enabled: !!googleToken,
    queryKey: ["google-login", googleToken],
    queryFn: async () => {
      const res = await axiosClient.post("auth/google", { token: googleToken });
      window.location.href = `${dotenv.REDIRECT_URL}?token=${res.data?.token}`;
    },
    onError: () => errorToastr("Google Login Failed"),
  };

  const emailLoginReq = {
    enabled: false,
    mutationKey: ["email-login"],
    mutationFn: async (data: EmailLoginData) => {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      const res = await axiosClient.post("auth/signin", data);
      window.location.href = `${dotenv.REDIRECT_URL}?token=${res.data?.token}`;
    },
    onError: () => errorToastr("Invalid Login Credentials"),
  };

  const googleLoginHandler = {
    onSuccess: (tokenResponse: TokenResponse) => {
      setGoogleToken(tokenResponse.access_token);
    },
    onError: () => errorToastr("Google Login Failed"),
  };

  const loginQuery = useMutation(emailLoginReq, queryClient);
  const googleLoginQuery = useQuery(googleLoginReq, queryClient);
  const googleLoginHandle = useGoogleLogin(googleLoginHandler);

  return { googleLoginHandle, googleLoginQuery, loginQuery };
};

export default useAuthentication;
