"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import queryClient from "../config/queryClient";
import dotenv from "../constants/dotenv";

const FormData = (props: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId={dotenv.GOOGLE_CLIENT_ID}>
        {props.children}
      </GoogleOAuthProvider>
    </QueryClientProvider>
  );
};

export default FormData;
