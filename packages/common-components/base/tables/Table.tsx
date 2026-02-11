interface TableProps {
  items: Record<string, any>[];
  columns: {
    label: string;
    key: string;
    render?: (item: any) => React.ReactNode;
  }[];
}

export const Table = (props: TableProps) => {
  const { items, columns } = props;

  const tableTitles = columns.map((column) => (
    <th key={column.key}>{column.label}</th>
  ));

  const tableRows = items.map((item, index) => (
    <tr className="hover:bg-gray-200 cursor-pointer" key={index}>
      {columns.map((column) => (
        <td key={column.key}>
          {column.render ? column.render(item) : item[column.key]}
        </td>
      ))}
    </tr>
  ));

  return (
    <div className="overflow-x-auto min-h-130">
      <table className="table">
        <thead className="bg-bg2">
          <tr>{tableTitles}</tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};
