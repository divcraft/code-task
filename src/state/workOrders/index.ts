import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type workOrdersType = any[];

type initialStateType = {
   ordersList:workOrdersType,
   status: string | null,
}

const initialState: initialStateType = {
   ordersList: [],
   status: null,
};

export const fetchWorkOrders = createAsyncThunk(
   'workOrders/fetchWorkOrders', 
   () => {
      return fetch('data/index.json')
         .then(res => res.json())
         .then(data => data.response.data)
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
            (state: initialStateType) => {
               state.status = 'loading'
            }
         )
         .addCase(
            fetchWorkOrders.fulfilled,
            (state: initialStateType, action: {payload: any}) => {
               state.status = 'succeeded'
               state.ordersList = action.payload
            }
         )
         .addCase(
            fetchWorkOrders.rejected,
            (state: initialStateType) => {
               state.status = 'failed'
            }
         )
   }
});

export default workOrders.reducer;