import { createSlice, nanoid } from "@reduxjs/toolkit";
const id = nanoid();
const initialState = {
  tableData: [],
  filteredData: [],
};

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTableData: (state, action) => {
      // state.tableData = [...state.tableData, action.payload];
      state.tableData = [
        ...state.tableData,
        { ...action.payload, id: state.tableData.length + 1 },
      ];

      // state.filteredData = [
      //   ...state.filteredData,
      //   { ...action.payload, id: state.filteredData.length + 1 },
      // ];
    },
    setFilteredData: (state, action) => {
      state.filteredData = [
        ...state.filteredData,
        { ...action.payload, id: state.filteredData.length + 1 },
        console.log(state.filteredData),
      ];
    },
  },
});

export const { setTableData, setFilteredData } = tableSlice.actions;
export const getTableData = (state) => state.table.tableData;
export const getFilteredData = (state) => state.table.filteredData;

export default tableSlice.reducer;
