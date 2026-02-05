"use client";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { LoadScreen } from "@packages/common-components";
import { useEffect } from "react";

export default function ProfilePage() {
  const { refreshTokenQuery } = useAuthentication();

  useEffect(() => {
    refreshTokenQuery.refetch();
  }, [refreshTokenQuery]);

  return <LoadScreen title="Authentication Form" />;
}
