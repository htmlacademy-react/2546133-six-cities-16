import { useDispatch } from "react-redux";
import { DispatchType } from "./ts_types";
import { useSelector } from "react-redux";
import { useState } from "react";
import { setSort } from "./action";
import { StateType } from "./reducer";
import { setOfferList } from "./action";


export const Sort = () => {
    
    const useAppDispatch = () => useDispatch<DispatchType>();
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const sort = useSelector((state:StateType) => state.sort);
    const offerList = useSelector((state:StateType) => state.offerList);
    /*const order = (a,b) => {
      switch(sort) {
         case 'Price: low to high':
         if(a.price<b.price) {
           return -1;
         }
         else if (a.price>b.price) {
           return 1;
         }
         else {
           return 0;
         }
       case 'Price: high to low':
         if(a.price>b.price) {
           return -1;
         }
         else if (a.price<b.price) {
           return 1;
         }
         else {
           return 0
         }
       case 'Top rated first':
         if(a.rating> b.rating) {
           return -1
         }
         else if (a.rating<b.rating) {
           return 1;
         }
         else {
           return 0
         }
        default:
          return 0;
      }
   }*/
    const onSortClick = (sort_value: string) => {
        dispatch(setSort(sort_value));
        setIsOpen(!isOpen);
        //let sortedOfferList = offerList.sort(order);
        //dispatch(setOfferList(sortedOfferList));
        

    }

    const onOpenClick = () => {
        setIsOpen(!isOpen);
    }

    return(
        <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0} onClick={() => {onOpenClick()}}>
              {sort}
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className={`places__options places__options--custom ${isOpen?'places__options--opened':''}`}>
                  <li className="places__option places__option--active" tabIndex={0} onClick={()=>{onSortClick('Popular')}}>Popular</li>
                  <li className="places__option" tabIndex={0} onClick={()=>{onSortClick('Price: low to high')}}>Price: low to high</li>
                  <li className="places__option" tabIndex={0} onClick={()=>{onSortClick('Price: high to low')}}>Price: high to low</li>
                  <li className="places__option" tabIndex={0} onClick={()=>{onSortClick('Top rated first')}}>Top rated first</li>
                </ul>
              </form>
    )
}