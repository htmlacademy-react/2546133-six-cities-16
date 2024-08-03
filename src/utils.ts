import { offerType } from './mocks/offers';
export const getOfferList = (offersMock:offerType[], currentCity:string) => {

  const offerList = offersMock.filter((offer:offerType) => {
    if(currentCity === offer.city) {
      return offer;
    }
  });

  return offerList;
};
