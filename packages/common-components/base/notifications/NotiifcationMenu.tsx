import { useMemo } from "react";
import { Button } from "../buttons/Button";
import { Column, Row } from "../containers/Flex";
import { Icons } from "../icons/IconMap";
import { Text } from "../text/Text";

interface NotificationListProps {
  title?: string;
  noNotificationsMessage?: string;
  notifications?: {
    id: string;
    message: string;
  }[];
  onRemove?: () => void;
}

export const NotificationList = (props: NotificationListProps) => {
  const { title, noNotificationsMessage, notifications, onRemove } = props;

  const notificationItems = useMemo(() => {
    if (!notifications || notifications.length === 0) {
      return (
        <Row flexX="center">
          <Text bold fo="60">
            {noNotificationsMessage || "No new notifications"}
          </Text>
        </Row>
      );
    }

    return notifications.map((notification) => (
      <Row key={notification.id} className={`border rounded-md p-4 bg-bg2`}>
        <Text fs="sm" className="w-full">
          {notification.message}
        </Text>
      </Row>
    ));
  }, [notifications, onRemove]);

  return (
    <Column className="p-4 bg-bg1 shadow-lg">
      <Row>
        <Icons icon="notification" size="22" />
        <Text bold fs="lg" className="w-full">
          {title || "Notifications"}
        </Text>
        <Button ghost variant="square" size="sm" onClick={() => onRemove?.()}>
          <Icons icon="close" size="16" />
        </Button>
      </Row>
      <Column>{notificationItems}</Column>
    </Column>
  );
};
