"use client";
import { Column, TabList, TabListProps } from "@packages/daisy-ui-components";
import TransactionsTable from "./TransactionTable";
import useTransactions from "@/lib/hooks/useTransactions";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";
import TransactionsForm from "@/lib/forms/transactions";

const TransactionsView = () => {
  const { t } = useClientTranslations();
  const { transactions, setType, setEditId } = useTransactions();

  const TabContent = () => {
    return (
      <TransactionsTable
        items={transactions}
        onSelect={(item) => setEditId(item.id)}
      />
    );
  };

  const tabItems: TabListProps["items"] = [
    {
      label: t("tables.transactions.filters.allTransactions"),
      icon: "chart",
      value: "All",
      content: <TabContent />,
    },
    {
      label: t("tables.transactions.filters.revenue"),
      icon: "chart",
      responsive: "sm",
      value: "Revenue",
      content: <TabContent />,
    },
    {
      label: t("tables.transactions.filters.expenses"),
      icon: "chart",
      responsive: "sm",
      value: "Expense",
      content: <TabContent />,
    },
    {
      label: t("tables.transactions.filters.profit"),
      icon: "chart",
      responsive: "sm",
      value: "Profit",
      content: <TabContent />,
    },
    {
      label: t("tables.transactions.filters.new"),
      icon: "plus",
      content: <TransactionsForm />,
      color: "main",
      value: "",
    },
  ];

  return (
    <Column>
      <TabList
        items={tabItems}
        onSelect={(item) => setType(String(item.value))}
      />
    </Column>
  );
};

export default TransactionsView;
