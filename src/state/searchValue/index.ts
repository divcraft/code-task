import { createSlice } from "@reduxjs/toolkit";
import { SearchValueType } from "./types";

const initialState: SearchValueType = '';

export const searchValue = createSlice({
   name: 'searchValue',
   initialState,
   reducers: {
      changeSearch: (state: SearchValueType, action: {payload: SearchValueType}) => {
         return action.payload;
      }
   },
   },
);

export const { changeSearch } = searchValue.actions;

export default searchValue.reducer;