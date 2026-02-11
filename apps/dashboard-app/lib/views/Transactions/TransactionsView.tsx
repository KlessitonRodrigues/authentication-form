"use client";
import { Pagination, Table, TabList } from "@packages/common-components";

const mockData = [
  { nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
];

const TransactionTable = (props: { type: string }) => {
  const { type } = props;
  const filterredData =
    type === "All" ? mockData : mockData.filter((item) => item.type === type);
  return (
    <div>
      <Table
        columns={[
          { label: "Nome", key: "nome" },
          { label: "Type", key: "type" },
          { label: "Data", key: "data" },
          {
            label: "Value",
            key: "value",
            render: (item) => `$ ${item.value.toFixed(2)}`,
          },
        ]}
        items={filterredData}
      />
      <Pagination currentPage={1} lastPage={10} onPageChange={() => {}} />
    </div>
  );
};

const TransactionsView = () => {
  return (
    <TabList
      items={[
        {
          label: "All transactions",
          icon: "chart",
          content: <TransactionTable type="All" />,
        },
        {
          label: "Revenue",
          icon: "chart",
          content: <TransactionTable type="Revenue" />,
        },
        {
          label: "Expenses",
          icon: "chart",
          content: <TransactionTable type="Expense" />,
        },
        {
          label: "Profit",
          icon: "chart",
          content: <TransactionTable type="Profit" />,
        },
        {
          label: "Add Transaction",
          icon: "plus",
          content: <div>Add Form</div>,
        },
      ]}
    />
  );
};

export default TransactionsView;
