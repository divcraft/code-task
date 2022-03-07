import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearch } from "../../state/searchValue";
import { RootState } from "../../state";
import styles from './style.module.scss';

export const SearchInput = () => {
   const dispatch = useDispatch();
   const searchValue = useSelector((state: RootState) => state.searchValue);
   const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(changeSearch(e.target.value))
   };
   return (
      <div className={styles.inputContainer}>
         <input 
            type="search" 
            placeholder="Search..." 
            onChange={(e) => handleSearchInput(e)}
            value={searchValue}
         />
      </div>
   )
};