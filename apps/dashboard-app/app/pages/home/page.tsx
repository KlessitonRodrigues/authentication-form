import TransactionsView from "@/lib/views/Transactions/TransactionsView";
import {
  Column,
  CurrencyCard,
  Paper,
  Row,
  TitleIcon,
} from "@packages/common-components";

export default function HomePage() {
  return (
    <Column>
      <Paper>
        <TitleIcon title="Status" icon="chart" />
        <Row responsive="lg" gap={4}>
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
        <TitleIcon title="Financial Overview" icon="currency" />
        <TransactionsView />
      </Paper>
    </Column>
  );
}
