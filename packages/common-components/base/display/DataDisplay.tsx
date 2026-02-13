import { Column } from "../containers/Flex";
import { Text } from "../text/Text";

type IDataDisplay = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  value?: string;
};

export const DataDisplay = (props: IDataDisplay) => {
  const { label, value, ...rest } = props;
  return (
    <Column flexX="start" gap={0} {...rest}>
      <Text bold fs="sm" fo="80" className="text-main">
        {label}
      </Text>
      <Text>{value || ""}</Text>
    </Column>
  );
};
