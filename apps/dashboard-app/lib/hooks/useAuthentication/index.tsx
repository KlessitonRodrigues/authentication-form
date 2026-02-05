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
    queryKey: ["refresh-token"],
    queryFn: async () => {
      if (!token) {
        errorToast("Authentication falied");
        location.href = dotenv.AUTH_URL;
      }
      await new Promise((resolve) => setTimeout(resolve, 3000));
      // const res = await axiosClient.post("auth/refresh", { token });
      setUser({
        id: "123456",
        name: "John Doe",
        email: "john.doe@example.com",
      });
      router.push("/pages/dashboard");
      return { success: true };
    },
    onError: () => {
      errorToast("Failed to refresh token");
      location.href = dotenv.AUTH_URL;
    },
    retry: false,
  };

  const refreshTokenQuery = useQuery(refreshTokenReq, queryClient);

  return { refreshTokenQuery };
};

export default useAuthentication;
