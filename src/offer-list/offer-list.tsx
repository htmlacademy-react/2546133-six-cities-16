import { Card } from '../card/card';
import { offersMockPropsType } from '../ts_types';
import { offerType } from '../mocks/offers';
import { useState } from 'react';

export const OfferList = ({offersMock}:offersMockPropsType) => {
  const [activeOffer, setActiveOffer] = useState(0);
  const hoverOnHandler = (key:number) => {
    setActiveOffer(key);
  };
  const hoverOffHandler = () => {
    setActiveOffer(0);
  };
  return(
    offersMock.map((offerMock:offerType) => (
      <span key={offerMock.key} onMouseEnter={() => hoverOnHandler(offerMock.key)} onMouseLeave={()=> hoverOffHandler()}>
        {activeOffer && 0} <Card offerMock={offerMock}/>
      </span>))
  );
};
