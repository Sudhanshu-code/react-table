import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "../context/tableSlice";

export const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});
