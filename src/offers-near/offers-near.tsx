import { OfferType, OfferListPropType } from '../ts_types';
import { Card } from '../card/card';

export const OffersNear = ({offerList}:OfferListPropType) => (
  offerList.map((offer:OfferType) => (
    <span key={offer.id} >
      <Card offer={offer}/>
    </span>))
);
