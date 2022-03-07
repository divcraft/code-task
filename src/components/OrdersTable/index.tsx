import { useSelector } from 'react-redux'
import { RootState } from '../../state';
import styles from './style.module.scss';

export const OrdersTable = () => {
   const ordersList = useSelector((state: RootState) => state.workOrders.ordersList);
   return (
      <>
         {ordersList.length > 0 && (
            <table className={styles.tableContainer}>
               <thead>
                  <tr>
                     <th>WO ID</th>
                     <th>Description</th>
                     <th>Received date</th>
                     <th>Assigned to</th>
                     <th>Status</th>
                     <th>Priority</th>
                  </tr>
               </thead>
               <tbody>
                  {ordersList.map(order => (
                     <tr key={order.work_order_id}>
                        <td>{order.work_order_id}</td>
                        <td>{order.description}</td>
                        <td>{order.received_date}</td>
                        <td>
                           {order.assigned_to.length > 0 && (
                           <ul>
                              {order.assigned_to.map(assigner => (
                                 <li key={assigner.person_name}>
                                    <div>{assigner.person_name}</div>
                                    <span>{assigner.status}</span>
                                 </li>
                              ))}
                           </ul>
                           )}
                        </td>
                        <td>{order.status}</td>
                        <td>{order.priority}</td>
                     </tr>
                  ))}
               </tbody>
            </table> 
         )}
      </>
   );
};