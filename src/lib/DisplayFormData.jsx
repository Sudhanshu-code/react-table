import { useSelector } from "react-redux";
import { getTableData } from "../context/tableSlice";

function DisplayFormData() {
  const formData = useSelector(getTableData);

  return formData.length > 0 ? (
    <table className="table-auto w-full">
      <thead className="bg-gray-200">
        <tr className="text-left">
          <td>id</td>
          <td>name</td>
          <td>email</td>
          <td>phone no</td>
          <td>website</td>
          <td>Industry Name</td>
          <td>Staus</td>
          <td>Remark</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {formData.map((data) => (
          <tr key={data.id} className="text-left">
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.phone_number}</td>
            <td>{data.website}</td>
            <td>{data.industry}</td>
            <td>{data.account_status ? "true" : "false"}</td>
            <td>{data.remark}</td>
            <td>{data.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}

export default DisplayFormData;
