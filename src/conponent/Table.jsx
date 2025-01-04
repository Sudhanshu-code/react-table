import React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { MoveDown, MoveUp } from "lucide-react";
import Button from "./Button";
import { exportFilteredData } from "../lib/downloadExcel";

function Table({ columns, mockData }) {
  const data = React.useMemo(() => mockData, []);

  const [sorting, setSorting] = React.useState([]);
  const [search, setSearch] = React.useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting: sorting,
      globalFilter: search,
    },
    onGlobalFilterChange: setSearch,
    onSortingChange: setSorting,
  });

  const downloadFile = () => {
    exportFilteredData(table, columns);
  };

  return (
    <div className="w-full rounded-md border">
      <div className="flex justify-end p-4 gap-5 ">
        <input
          className="border border-gray-500 rounded-lg p-2"
          placeholder="Search..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={downloadFile} className="bg-green-500 p-3 rounded-md">
          Export Excel
        </button>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs  uppercase bg-gray-700 text-gray-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    className="px-6 py-3"
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    <div className="flex items-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      {
                        {
                          asc: <MoveUp size={16} />,
                          desc: <MoveDown size={16} />,
                        }[header.column.getIsSorted() ?? null]
                      }
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className=" border-b bg-gray-100 border-gray-400"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-3">
        <Button text="First Page" onClick={() => table.setPageIndex(0)} />
        <Button
          text="Previous Page"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        />

        <Button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          text="Next Page"
        />

        <Button
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          text="Last Page"
        />
      </div>
    </div>
  );
}

export default Table;
