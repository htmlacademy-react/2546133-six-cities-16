import { Card } from '../card/card';
import { OfferType, StateType } from '../ts_types';
import { useDispatch } from 'react-redux';
import { OfferListPropType, DispatchType } from '../ts_types';
import { useSelector } from 'react-redux';
import { setActiveOffer } from '../action';


export const OfferList = ({offerList}:OfferListPropType) => {
  const sort = useSelector((state:StateType) => state.sort);
  const offerId = useSelector((state: StateType) => state.offerId);
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();

  const hoverOnHandler = (id:string) => {
    dispatch(setActiveOffer(id));
  };
  const hoverOffHandler = () => {
    dispatch(setActiveOffer(null));
  };


  if (!offerList || offerList.length === 0) {
    return 'No places to stay available';
  }
  return(
    offerList.map((offer:OfferType) => (

      <span key={offer.id} onMouseEnter={() => hoverOnHandler(offer.id)} onMouseLeave={()=> hoverOffHandler()}>
        <Card offer={offer}/>
      </span>))
  );
};
