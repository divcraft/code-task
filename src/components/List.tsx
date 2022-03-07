import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { fetchWorkOrders } from '../state/workOrders';

export const List = () => {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchWorkOrders());
   }, []);
   return (
      <div>
         list
      </div>
   )
}