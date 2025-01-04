import { useSelector } from "react-redux";
import Form from "./conponent/Form";
import { getTableData } from "./context/tableSlice";
import Table from "./conponent/Table";
import { useState } from "react";
import { columns } from "./lib/columns";
import mockData from "./database/mock_data.json";

function App() {
  const tableData = useSelector(getTableData);
  const [showTable, setShowTable] = useState(false);
  console.log(tableData);

  return (
    <>
      <div className=" w-full bg-gray-100 p-2 rounded-lg gap-5 flex justify-around">
        <h1 className="text-2xl font-bold text-blue-400">
          Hello Actify, Sudhanshu here
        </h1>
        <div className="flex gap-5">
          {" "}
          <button
            onClick={() => setShowTable(false)}
            className=" rounded-md p-2 bg-white border-2 border-blue-400 text-black font-mono text-sm font-bold"
          >
            Add Data
          </button>
          <button
            onClick={() => setShowTable(true)}
            className="rounded-md p-2 bg-blue-400 text-black font-mono text-sm font-bold"
          >
            Show Data
          </button>
        </div>
      </div>
      {showTable ? <Table columns={columns} mockData={mockData} /> : <Form />}
    </>
  );
}

export default App;
