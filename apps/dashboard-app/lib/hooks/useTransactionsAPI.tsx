import { useEffect, useState } from "react";

const mockData = [
  { id: "1", name: "test", date: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "2", name: "test", date: "12/01/2025", type: "Expense", value: 12344 },
  { id: "3", name: "test", date: "12/01/2025", type: "Profit", value: 12344 },
  { id: "4", name: "test", date: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "5", name: "test", date: "12/01/2025", type: "Expense", value: 12344 },
  { id: "6", name: "test", date: "12/01/2025", type: "Profit", value: 12344 },
  { id: "7", name: "test", date: "12/01/2025", type: "Revenue", value: 12344 },
  { id: "8", name: "test", date: "12/01/2025", type: "Expense", value: 12344 },
  { id: "9", name: "test", date: "12/01/2025", type: "Profit", value: 12344 },
  { id: "10", name: "test", date: "12/01/2025", type: "Revenue", value: 12344 },
];

const useTransactionsAPI = () => {
  const [transactions, setTransactions] = useState(mockData);
  const [type, setType] = useState("All");
  const [date, setDate] = useState("All");
  const [editId, setEditId] = useState(0);

  console.log(type);

  useEffect(() => {
    if (!type || type === "All") setTransactions(mockData);
    else setTransactions(mockData.filter((item) => item.type === type));
  }, [type]);

  return { transactions, type, date, editId, setType, setDate, setEditId };
};

export default useTransactionsAPI;
