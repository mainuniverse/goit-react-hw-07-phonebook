import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

const filterReducer = createReducer("", {
  [changeFilter]: (state, { payload }) => payload,
});

export { filterReducer };