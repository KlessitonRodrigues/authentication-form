"use client";
import { Column, TabList } from "@packages/common-components";
import { useMemo, useState } from "react";
import TransactionsTable from "./TransactionTable";

const mockData = [
  { id: "1", nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "2", nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { id: "3", nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { id: "4", nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "5", nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { id: "6", nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { id: "7", nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "8", nome: "test", data: "12/01/2025", type: "Expense", value: 12344 },
  { id: "9", nome: "test", data: "12/01/2025", type: "Profit", value: 12344 },
  { id: "10", nome: "test", data: "12/01/2025", type: "Revenue", value: 12344 },
];

const TransactionsView = () => {
  const [type, setType] = useState("All");
  const [editId, setEditId] = useState(0);

  const FilteredTable = useMemo(() => {
    let filterredData = [];
    if (type === "All") filterredData = mockData;
    else filterredData = mockData.filter((item) => item.type === type);

    return (
      <TransactionsTable
        items={filterredData}
        onSelect={(item) => setEditId(item.id)}
      />
    );
  }, [type]);

  return (
    <Column>
      <TabList
        items={[
          { label: "All transactions", icon: "chart", content: FilteredTable },
          {
            label: "Revenue",
            icon: "chart",
            responsive: "sm",
            content: FilteredTable,
          },
          {
            label: "Expenses",
            icon: "chart",
            responsive: "sm",
            content: FilteredTable,
          },
          {
            label: "Profit",
            icon: "chart",
            responsive: "sm",
            content: FilteredTable,
          },
          {
            label: "New",
            icon: "plus",
            content: <div>Add Form</div>,
            color: "main",
          },
          {
            label: "Edit",
            icon: "pencil",
            content: <div>Edit Form</div>,
            disabled: !editId,
          },
        ]}
      />
    </Column>
  );
};

export default TransactionsView;
