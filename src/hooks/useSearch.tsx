import { useSelector } from "react-redux"
import { RootState } from "../state"

export const useSearch = () => {
   const ordersList = useSelector((state: RootState) => state.workOrders.ordersList);
   const searchValue = useSelector((state: RootState) => state.searchValue);
   const searchResult = ordersList.filter(order => 
      order.description
         .toLocaleLowerCase()
         .includes(searchValue.toLocaleLowerCase()));
   return searchResult;

}