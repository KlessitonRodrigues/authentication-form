import { useMemo } from "react";
import { Button } from "../buttons/Button";
import { Column, Row } from "../containers/Flex";
import { Icons } from "../icons/IconMap";
import { Text } from "../text/Text";

interface NotificationListProps {
  notifications?: {
    id: string;
    message: string;
  }[];
  onRemove?: (id: string) => void;
}

export const NotificationList = (props: NotificationListProps) => {
  const { notifications, onRemove } = props;

  const notificationItems = useMemo(() => {
    if (!notifications || notifications.length === 0) {
      return (
        <Row flexX="center">
          <Text bold fo="60">
            No new notifications
          </Text>
        </Row>
      );
    }

    return notifications.map((notification) => (
      <Row key={notification.id} className={`border rounded-md p-4 bg-bg2`}>
        <Text fs="sm" className="w-full">
          {notification.message}
        </Text>
        <Button
          ghost
          variant="square"
          size="xs"
          onClick={() => onRemove?.(notification.id)}
        >
          <Icons icon="close" size="16" />
        </Button>
      </Row>
    ));
  }, [notifications, onRemove]);

  return (
    <Column className="p-4 bg-bg1 shadow-lg">
      <Row>
        <Icons icon="notification" size="22" />
        <Text bold fs="lg" className="w-full">
          Notifications
        </Text>
        <Button
          ghost
          variant="square"
          size="sm"
          onClick={() => onRemove?.("all")}
        >
          <Icons icon="close" size="16" />
        </Button>
      </Row>
      <Column>{notificationItems}</Column>
    </Column>
  );
};
