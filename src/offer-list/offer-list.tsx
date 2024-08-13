import { Card } from '../card/card';
import { OfferType } from '../ts_types';
import { useState } from 'react';
import { OfferListPropType } from '../ts_types';

export const OfferList = ({offerList}:OfferListPropType) => {
  const [activeOffer, setActiveOffer] = useState('');

  //eslint-disable-next-line
  console.log(activeOffer);
  const hoverOnHandler = (id:string) => {
    setActiveOffer(id);
  };
  const hoverOffHandler = () => {
    setActiveOffer('0');
  };
  if (!offerList) {
    return '';
  }
  return(
    offerList.map((offer:OfferType) => (

      <span key={offer.id} onMouseEnter={() => hoverOnHandler(offer.id)} onMouseLeave={()=> hoverOffHandler()}>
        <Card offer={offer}/>
      </span>))
  );
};
