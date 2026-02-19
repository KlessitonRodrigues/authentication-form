"use client";
import { Column, TabList, TabListProps } from "@packages/common-components";
import TransactionsTable from "./TransactionTable";
import useTransactions from "@/lib/hooks/useTransactions";

const TransactionsView = () => {
  const { transactions, setType, editId, setEditId } = useTransactions();

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
      label: "All transactions",
      icon: "chart",
      value: "All",
      content: <TabContent />,
    },
    {
      label: "Revenue",
      icon: "chart",
      responsive: "sm",
      value: "Revenue",
      content: <TabContent />,
    },
    {
      label: "Expenses",
      icon: "chart",
      responsive: "sm",
      value: "Expense",
      content: <TabContent />,
    },
    {
      label: "Profit",
      icon: "chart",
      responsive: "sm",
      value: "Profit",
      content: <TabContent />,
    },
    {
      label: "New",
      icon: "plus",
      content: <div>Add Form</div>,
      color: "main",
      value: "",
    },
    {
      label: "Edit",
      icon: "pencil",
      content: <div>Edit Form</div>,
      disabled: !editId,
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
