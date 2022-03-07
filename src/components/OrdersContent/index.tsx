import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { fetchWorkOrders } from "../../state/workOrders";
import { OrdersTable } from "../../components";
import { FetchedComponent } from "../../hoc";

export const OrdersContent = () => {
   const dispatch = useDispatch();
   const status = useSelector((state: RootState) => state.workOrders.status);
   useEffect(() => {
     dispatch(fetchWorkOrders());
   }, []);
   return (
      <div>
         <h1>Orders table</h1>
         <FetchedComponent component={OrdersTable} status={status} />
      </div>
   )
};