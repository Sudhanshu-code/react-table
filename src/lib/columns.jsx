import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const columns = [
  columnHelper.accessor("id", {
    id: "id",
    cell: (info) => (
      <span className="italic text-blue-400"> {info.getValue()}</span>
    ),
    header: "ID",
  }),
  columnHelper.accessor("name", {
    id: "name",
    cell: (info) => <span className="italic"> {info.getValue()}</span>,
    header: "Name",
  }),
  columnHelper.accessor("phone_number", {
    id: "phone_number",
    cell: (info) => <span className="italic "> {info.getValue()}</span>,
    header: "Phone No.",
  }),
  columnHelper.accessor("website", {
    id: "website",
    cell: (info) => (
      <span className="italic text-blue-400"> {info.getValue()}</span>
    ),
    header: "Website",
  }),
  columnHelper.accessor("industry", {
    id: "industry",
    cell: (info) => <span className="italic "> {info.getValue()}</span>,
    header: "Industry",
  }),
  columnHelper.accessor("account_status", {
    id: "account_status",
    cell: (info) => (
      <span
        className={`   ${info.getValue() ? "text-green-400" : "text-red-400"}`}
      >
        {`${info.getValue()}`}
      </span>
    ),
    header: "Account Status",
  }),
  columnHelper.accessor("remark", {
    id: "remark",
    cell: (info) => <span className="text-blue-400"> {info.getValue()}</span>,
    header: "Remark",
  }),
  columnHelper.accessor("date", {
    id: "date",
    cell: (info) => <span className="italic "> {info.getValue()}</span>,
    header: "Date",
  }),
];
