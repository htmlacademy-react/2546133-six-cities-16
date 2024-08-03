import { Card } from '../card/card';
import { offersMockPropsType } from '../ts_types';
import { offerType } from '../mocks/offers';
import { useState } from 'react';

export const OfferList = ({offerList}:offersMockPropsType) => {
  const [activeOffer, setActiveOffer] = useState(0);
  //eslint-disable-next-line
  console.log(activeOffer);

  const hoverOnHandler = (key:number) => {
    setActiveOffer(key);
  };
  const hoverOffHandler = () => {
    setActiveOffer(0);
  };
  if (!offerList) {
    return '';
  }
  return(
    offerList.map((offer:offerType) => (

      <span key={offer.key} onMouseEnter={() => hoverOnHandler(offer.key)} onMouseLeave={()=> hoverOffHandler()}>
        <Card offerMock={offer}/>
      </span>))
  );
};
