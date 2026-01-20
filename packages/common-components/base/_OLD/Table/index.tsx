import {
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderData,
  TableHeaderRow,
  TableRow,
} from "../base/tables/Table";

type ITable = {
  headers: { key: string; label: string }[];
  rows: { [key: string]: string | number }[];
};

const TableView = (Props: ITable) => {
  const { headers, rows } = Props;

  return (
    <Table>
      <TableHeader>
        <TableHeaderRow>
          {headers.map((header) => (
            <TableHeaderData key={header.key}>{header.label}</TableHeaderData>
          ))}
        </TableHeaderRow>
      </TableHeader>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index} data-row={(index + 1) % 2}>
            {headers.map((header) => (
              <TableData key={header.key}>{row[header.key]}</TableData>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableView;
