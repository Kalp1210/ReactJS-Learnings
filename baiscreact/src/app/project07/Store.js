import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../../features/project07/todo/todoSlice";
export const Store = configureStore({
  reducer: todoReducer,
});
