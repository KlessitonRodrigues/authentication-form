"use client";
import useAuthentication from "@/lib/hooks/useAuthentication";
import { Column, IconButton } from "@packages/daisy-ui-components";

const SignOutView = () => {
  const { signOutQuery } = useAuthentication();

  return (
    <Column flexX="start">
      <IconButton icon="signOut" onClick={() => signOutQuery.refetch()}>
        Logout
      </IconButton>
    </Column>
  );
};

export default SignOutView;
