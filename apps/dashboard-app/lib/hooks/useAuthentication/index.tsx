import { axiosClient } from "@/lib/config/axiosClient";
import queryClient from "@/lib/config/queryClient";
import dotenv from "@/lib/constants/dotenv";
import useUserStore from "@/lib/store/user";
import { errorToast } from "@packages/common-components";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const useAuthentication = () => {
  const { setUser } = useUserStore();
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token");

  const refreshTokenReq = {
    enabled: false,
    retry: false,
    queryKey: ["refresh-token"],
    queryFn: async () => {
      const res = await axiosClient.post("auth/refresh-token", { token });
      if (!res.data.user) return errorToast("No user data found");

      setUser({
        id: res.data.user.userId,
        name: res.data.user.userName,
        email: res.data.user.email,
      });
      router.push("/pages/home");
      return res.data;
    },
    onError: () => {
      errorToast("Failed to refresh token");
      location.href = dotenv.AUTH_URL;
    },
  };

  const refreshTokenQuery = useQuery(refreshTokenReq, queryClient);

  return { refreshTokenQuery };
};

export default useAuthentication;
