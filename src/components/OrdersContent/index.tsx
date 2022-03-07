import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state";
import { fetchWorkOrders } from "../../state/workOrders";
import { OrdersTable, SearchInput } from "../../components";
import { FetchedComponent } from "../../hoc";
import styles from './style.module.scss';

export const OrdersContent = () => {
   const dispatch = useDispatch();
   const status = useSelector((state: RootState) => state.workOrders.status);
   useEffect(() => {
     dispatch(fetchWorkOrders());
   }, []);
   return (
      <div className={styles.contentWrapper}>
         <div className={styles.contentContainer}>
            <h1>Orders table</h1>
            <SearchInput />
            <FetchedComponent component={OrdersTable} status={status} />
         </div>
      </div>
   )
};