"use client";
import useUserStore from "@/lib/store/user";
import { Button, Card, Icons, Row, Text } from "@packages/common-components";

const UserAccount = () => {
  const { user } = useUserStore();

  return (
    <Card>
      <Row>
        <Icons icon="user" />
        <Text>{user?.name || "User Account"}</Text>
        <Button ghost color="accent" size="sm">
          <Icons icon="signOut" />
        </Button>
      </Row>
    </Card>
  );
};

export default UserAccount;
