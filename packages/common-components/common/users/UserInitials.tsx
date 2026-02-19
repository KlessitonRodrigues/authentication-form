import { useMemo } from "react";
import { Row } from "../../base/containers/Flex";
import { Text } from "../../base/text/Text";

interface UserInitialsProps {
  name: string;
}

export const UserInitials = (props: UserInitialsProps) => {
  const { name } = props;

  const initials = useMemo(() => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  }, [name]);

  return (
    <Row flexX="center" className="h-9 w-9 border rounded-full bg-bg1 text-fg1">
      <Text bold fs="lg" fo="60" className="mt-0.5">
        {initials}
      </Text>
    </Row>
  );
};
