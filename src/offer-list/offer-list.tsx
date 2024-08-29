import { Card } from '../card/card';
import { OfferType} from '../ts_types';
import { useDispatch } from 'react-redux';
import { OfferListPropType, DispatchType } from '../ts_types';
import { setActiveOffer } from '../action';


export const OfferList = ({offerList}:OfferListPropType) => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();

  const hoverOnHandler = (id:string) => {
    dispatch(setActiveOffer(id));
  };
  const hoverOffHandler = () => {
    dispatch(setActiveOffer(null));
  };


  return(
    offerList.map((offer:OfferType) => (

      <span key={offer.id} onMouseEnter={() => hoverOnHandler(offer.id)} onMouseLeave={()=> hoverOffHandler()}>
        <Card offer={offer}/>
      </span>))
  );
};
