import { axiosClient } from "@/lib/config/axiosClient";
import queryClient from "@/lib/config/queryClient";
import dotenv from "@/lib/constants/dotenv";
import useUserStore from "@/lib/store/user";
import { DefinedInitialDataOptions, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const useAuthentication = () => {
  const { setUser } = useUserStore();
  const params = useSearchParams();
  const router = useRouter();
  const token = params.get("token");

  const refreshTokenReq: DefinedInitialDataOptions = {
    enabled: false,
    retry: false,
    initialData: null,
    queryKey: ["refresh-token"],
    queryFn: async () => {
      const res = await axiosClient.post("auth/refresh-token", { token });

      if (!res.data.user) {
        location.href = dotenv.AUTH_URL;
        return false;
      }

      setUser({
        id: res.data.user.userId,
        name: res.data.user.userName,
        email: res.data.user.email,
      });
      router.push("/pages/home");
      return res.data;
    },
    throwOnError: () => {
      location.href = dotenv.AUTH_URL;
      return true;
    },
  };

  const refreshTokenQuery = useQuery(refreshTokenReq, queryClient);

  return { refreshTokenQuery };
};

export default useAuthentication;
