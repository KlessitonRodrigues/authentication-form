import {
  Column,
  CurrencyCard,
  Icons,
  Paper,
  Row,
  Text,
} from "@packages/common-components";

export default function HomePage() {
  return (
    <Column>
      <Paper>
        <Row>
          <Icons icon="chart" />
          <Text bold fo="70">
            Status
          </Text>
        </Row>
        <Row responsive="sm" gap={4}>
          <CurrencyCard
            total="Total Revenue"
            percentage={12.5}
            amount="$25,000"
            percentageClassName="text-green"
          />
          <CurrencyCard
            total="Total Expenses"
            percentage={8.2}
            amount="$15,000"
            percentageClassName="text-red"
          />
          <CurrencyCard
            total="Net Profit"
            percentage={5.3}
            amount="$10,000"
            percentageClassName="text-green"
          />
          <CurrencyCard
            total="Customer Growth"
            percentage={20.1}
            amount="1,200"
            percentageClassName="text-green"
          />
        </Row>
      </Paper>
      <Paper>
        <Text>Home Page</Text>
      </Paper>
    </Column>
  );
}
