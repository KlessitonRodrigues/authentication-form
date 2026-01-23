import { useGoogleLogin, CodeResponse } from "@react-oauth/google";
import { useQuery } from "@tanstack/react-query";

const useAuthentication = () => {
  const onLoginSuccess = (tokenResponse: CodeResponse) => {
    console.log("Google Login Success:", tokenResponse);
    // Send tokenResponse.access_token to your backend for verification
  };

  const onLoginError = () => {
    console.log("Google Login Failed");
  };

  const googleLoginQuery = useQuery({
    queryKey: ["google-login"],
    queryFn: async () => {
      // Here you would typically send the token to your backend for verification
      return tokenResponse;
    },
  });

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: onLoginSuccess,
    onError: onLoginError,
  });

  return { handleGoogleLogin };
};

export default useAuthentication;
