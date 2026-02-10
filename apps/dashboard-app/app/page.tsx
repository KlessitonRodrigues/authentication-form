"use client";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { LoadScreen } from "@packages/common-components";
import { Suspense, useEffect } from "react";

const ProfilePageContent = () => {
  const { refreshTokenQuery } = useAuthentication();

  useEffect(() => {
    refreshTokenQuery.refetch();
    // eslint-disable-next-line
  }, []);

  return <LoadScreen title="Authentication Form" />;
};

export default function ProfilePage() {
  return (
    <Suspense fallback={<LoadScreen title="Authentication Form" />}>
      <ProfilePageContent />
    </Suspense>
  );
}
