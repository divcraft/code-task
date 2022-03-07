import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { FetchedDataType, WorkOrdersType, OrderType } from "./types";

const initialState: WorkOrdersType = {
   ordersList: [],
   status: null,
   }

export const fetchWorkOrders = createAsyncThunk(
   'workOrders/fetchWorkOrders', 
   () => {
      return fetch('data/index.json')
         .then(res => res.json())
         .then((data: FetchedDataType) => data.response.data)
   },
 );

export const workOrders = createSlice({
   name: 'workOrders',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(
            fetchWorkOrders.pending,
            (state: WorkOrdersType) => {
               state.status = 'LOADING'
            }
         )
         .addCase(
            fetchWorkOrders.fulfilled,
            (state: WorkOrdersType, action: {payload: OrderType[]}) => {
               state.status = 'SUCCEEDED'
               state.ordersList = action.payload
            }
         )
         .addCase(
            fetchWorkOrders.rejected,
            (state: WorkOrdersType) => {
               state.status = 'FAILED'
            }
         );
      },
   },
);

export default workOrders.reducer;