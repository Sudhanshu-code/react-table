export const exportFilteredData = (table, columns) => {
  // Access the filtered rows
  const filteredRows = table.getFilteredRowModel().rows;

  // Format the data as needed, e.g., CSV
  const csvData = filteredRows
    .map((row) => {
      return columns
        .map((column) => row.getValue(column.accessorKey))
        .join(",");
    })
    .join("\n");

  // Trigger a download (for CSV)
  const blob = new Blob([csvData], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.csv";
  a.click();
  URL.revokeObjectURL(url);
};
