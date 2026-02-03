import { axiosClient } from "@/lib/config/axiosClient";
import queryClient from "@/lib/config/queryClient";
import useUserStore from "@/lib/store/user";
import { useGoogleLogin, TokenResponse } from "@react-oauth/google";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface EmailLoginData {
  email?: string;
  password?: string;
}

const useAuthentication = () => {
  const { setUser } = useUserStore();
  const [googleToken, setGoogleToken] = useState("");

  const googleLoginReq = {
    enabled: !!googleToken,
    queryKey: ["google-login", googleToken],
    queryFn: async () => {
      const res = await axiosClient.post("auth", { token: googleToken });
      setUser(res.data.user);
      return res.data;
    },
  };

  const emailLoginReq = {
    enabled: false,
    mutationKey: ["email-login"],
    mutationFn: async (data: EmailLoginData) => {
      const res = await axiosClient.post("auth", data);
      setUser(res.data);
      return res.data;
    },
  };

  const googleLoginHandler = {
    onSuccess: (tokenResponse: TokenResponse) => {
      setGoogleToken(tokenResponse.access_token);
    },
    onError: () => {
      console.log("Google Login Failed");
    },
  };

  const loginQuery = useMutation(emailLoginReq, queryClient);
  const googleLoginQuery = useQuery(googleLoginReq, queryClient);
  const googleLoginHandle = useGoogleLogin(googleLoginHandler);

  return { googleLoginHandle, googleLoginQuery, loginQuery };
};

export default useAuthentication;
