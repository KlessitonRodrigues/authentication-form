import { Row } from "../../base/containers/Flex";
import { Text } from "../../base/text/Text";
import { IconProps, Icons } from "../icons/IconMap";

interface TitleIconProps {
  title?: string;
  icon?: IconProps["icon"];
}

export const TitleIcon = (props: TitleIconProps) => {
  const { title, icon } = props;

  return (
    <Row>
      <Icons icon={icon} size="22" />
      <Text bold fo="80">
        {title}
      </Text>
    </Row>
  );
};
