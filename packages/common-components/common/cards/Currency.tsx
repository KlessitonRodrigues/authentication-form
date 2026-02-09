import { Card } from "../../base/cards/Card";
import { Row } from "../../base/containers/Flex";
import { Icons } from "../../base/icons/IconMap";
import { Text } from "../../base/text/Text";

interface CurrencyCardProps {
  total: string;
  percentage: number;
  amount: string;
  percentageClassName?: string;
}

export const CurrencyCard = (props: CurrencyCardProps) => {
  const { total, percentage, amount, percentageClassName } = props;

  return (
    <Card className="w-full lg:max-w-70">
      <Row flexX="between">
        <Text bold fo="70">
          {total}
        </Text>
        <Text bold fo="70" className={percentageClassName || "text-green"}>
          + {percentage}%
        </Text>
      </Row>
      <Row flexX="between" className="mt-4">
        <Icons icon="chart" size="34" />
        <Text bold fo="70" fs="3xl" className="text-blue">
          {amount}
        </Text>
      </Row>
    </Card>
  );
};
