import { Row } from "../../base/containers/Flex";
import { Text } from "../../base/text/Text";

interface UserInitialsProps {
  name: string;
}

export const UserInitials = (props: UserInitialsProps) => {
  const { name } = props;
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  return (
    <Row flexX="center" className="w-8 h-8 border rounded-full bg-bg1 text-fg1">
      <Text bold fo="70">
        {initials}
      </Text>
    </Row>
  );
};
