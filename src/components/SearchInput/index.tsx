import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../../state/searchResult";
import { RootState } from "../../state";

export const SearchInput = () => {
   const dispatch = useDispatch();
   const searchResult = useSelector((state: RootState) => state.searchResult);
   const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeSearch(e.target.value))
   };
   return (
      <div>
         <input 
            type="search" 
            placeholder="Search..." 
            onChange={(e) => handleSearchInput(e)}
            value={searchResult}
         />
      </div>
   )
};