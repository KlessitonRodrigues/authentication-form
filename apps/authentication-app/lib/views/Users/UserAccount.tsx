'use client';
import useUserStore from '@/lib/store/user';
import { Button, Card, Icons, Row, Text } from '@packages/daisy-ui-components';

const UserAccount = () => {
  const { user } = useUserStore();

  return (
    <Card>
      <Row>
        <Icons iconType="user" />
        <Text>{user?.name || 'User Account'}</Text>
        <Button ghost color="accent" size="sm">
          <Icons iconType="signOut" />
        </Button>
      </Row>
    </Card>
  );
};

export default UserAccount;
