import { createSlice } from "@reduxjs/toolkit";
import { SearchResultType } from "./types";

const initialState: SearchResultType = '';

export const searchResult = createSlice({
   name: 'workOrders',
   initialState,
   reducers: {
      changeSearch: (state: SearchResultType, action: {payload: SearchResultType}) => {
         return action.payload;
      }
   },
   },
);

export const { changeSearch } = searchResult.actions;

export default searchResult.reducer;