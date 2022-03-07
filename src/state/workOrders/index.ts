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
               state.status = 'loading'
            }
         )
         .addCase(
            fetchWorkOrders.fulfilled,
            (state: WorkOrdersType, action: {payload: OrderType[]}) => {
               state.status = 'succeeded'
               state.ordersList = action.payload
            }
         )
         .addCase(
            fetchWorkOrders.rejected,
            (state: WorkOrdersType) => {
               state.status = 'failed'
            }
         );
      },
   },
);

export default workOrders.reducer;