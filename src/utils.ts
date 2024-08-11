import { OfferType } from "./ts_types";
export const getOfferList = (offersMock:OfferType[], currentCity:string | null) => {

  const offerList = offersMock.filter((offer:OfferType) => {
    if(currentCity === offer.city.name) {
      return offer;
    }
  });

  return offerList;
};
