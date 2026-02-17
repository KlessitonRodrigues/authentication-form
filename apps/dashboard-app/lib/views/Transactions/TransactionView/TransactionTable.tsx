import { Pagination, Table } from "@packages/common-components";

interface TransactionsTableProps {
  items: any[];
  page?: number;
  lastPage?: number;
  onPageChange?: (page: number) => void;
  onSelect?: (item: any) => void;
}

const TransactionsTable = (props: TransactionsTableProps) => {
  const { items, page, lastPage, onPageChange, onSelect } = props;

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
            render: (item: any) => `$ ${item.value.toFixed(2)}`,
          },
        ]}
        items={items}
        onSelect={onSelect}
      />
      <Pagination
        currentPage={page}
        lastPage={lastPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default TransactionsTable;
