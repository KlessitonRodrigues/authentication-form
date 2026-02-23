import { useClientTranslations } from "@/lib/hooks/useClientTranslation";
import { Pagination, Table } from "@packages/common-components";

interface TransactionsTableProps {
  items: any[];
  page?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
  onSelect?: (item: any) => void;
}

const TransactionsTable = (props: TransactionsTableProps) => {
  const { t } = useClientTranslations();
  const { items, page, lastPage, onPageChange, onSelect } = props;

  const transactionTable = [
    { label: t("tables.transactions.columns.name"), key: "name" },
    { label: t("tables.transactions.columns.type"), key: "type" },
    { label: t("tables.transactions.columns.date"), key: "date" },
    {
      label: t("tables.transactions.columns.value"),
      key: "value",
      render: (item: any) => `$ ${item.value.toFixed(2)}`,
    },
  ];

  return (
    <div>
      <Table columns={transactionTable} items={items} onSelect={onSelect} />
      <Pagination
        currentPage={page}
        lastPage={lastPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TransactionsTable;
