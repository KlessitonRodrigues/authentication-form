import { twMerge } from "tailwind-merge";

type ITable = React.HTMLAttributes<HTMLTableElement>;
type ITableBody = React.HTMLAttributes<HTMLHeadElement>;

export const Table = ({ className, ...props }: ITable) => {
  return (
    <table
      {...props}
      className={twMerge(`block sm:table w-full overflow-auto text-left`)}
    />
  );
};

export const TableHeader = ({ className, ...props }: ITableBody) => {
  return <thead {...props} className={twMerge(`whitespace-nowrap`)} />;
};

export const TableHeaderRow = ({ className, ...props }: ITableBody) => {
  return <tr {...props} className={twMerge(`bg-bg2 text-text3`)} />;
};

export const TableHeaderData = ({ className, ...props }: ITableBody) => {
  return <th {...props} className={twMerge(`p-2`)} />;
};

export const TableBody = ({ className, ...props }: ITableBody) => {
  return <tbody {...props} className={twMerge(``)} />;
};

export const TableRow = ({ className, ...props }: ITableBody) => {
  return <tr {...props} className={twMerge(`border-b`)} />;
};

export const TableData = ({ className, ...props }: ITableBody) => {
  return <td {...props} className={twMerge(`p-2`)} />;
};
