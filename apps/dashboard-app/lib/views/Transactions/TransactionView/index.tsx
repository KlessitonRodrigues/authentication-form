"use client";
import { Column, TabList } from "@packages/daisy-ui-components";
import TransactionsTable from "./TransactionTable";
import useTransactions from "@/lib/hooks/useTransactions";
import { useClientTranslations } from "@/lib/hooks/useClientTranslation";
import TransactionsForm from "@/lib/forms/transactions";

const TransactionsView = () => {
  const { t } = useClientTranslations();
  const { transactions, editId, setType, setDate, setEditId } =
    useTransactions();

  const handleSelectTab = (index: number) => {
    if (index === 0) setEditId(0);
  };

  return (
    <Column flexX="start">
      <TabList
        className="min-h-170"
        defaultItem={editId ? 1 : 0}
        onSelect={(_, i) => handleSelectTab(i)}
        items={[
          {
            label: t("tables.transactions.tab.all"),
            icon: "chart",
            content: (
              <TransactionsTable
                items={transactions}
                onSelect={(item) => setEditId(item.id)}
                onTypeChange={setType}
                onDateChange={setDate}
              />
            ),
          },
          {
            label: editId
              ? t("tables.transactions.tab.edit")
              : t("tables.transactions.tab.new"),
            icon: "plus",
            color: "main",
            content: <TransactionsForm />,
          },
        ]}
      />
    </Column>
  );
};

export default TransactionsView;
