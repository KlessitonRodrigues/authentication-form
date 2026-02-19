import { useEffect, useState } from "react";

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

const useTransactions = () => {
  const [transactions, setTransactions] = useState(mockData);
  const [type, setType] = useState("All");
  const [editId, setEditId] = useState(0);

  useEffect(() => {
    if (!type || type === "All") setTransactions(mockData);
    else setTransactions(mockData.filter((item) => item.type === type));
  }, [type]);

  return { transactions, type, setType, editId, setEditId };
};

export default useTransactions;
