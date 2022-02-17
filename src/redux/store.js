import { configureStore } from "@reduxjs/toolkit";
import { phonebookApiList } from "../services/api";
import { filterReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    [phonebookApiList.reducerPath]: phonebookApiList.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phonebookApiList.middleware),
});