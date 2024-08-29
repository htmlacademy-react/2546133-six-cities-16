import { OfferType, CommentType } from './ts_types';

export const sortReviews = (a:CommentType,b:CommentType):number => {
  if(a.date > b.date) {
    return -1;
  } else if(a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
};

export const getRating = (rating: number) => (Math.round(rating)) * 20;
export const getOfferList = (offersMock:OfferType[], currentCity:string | null, sort: string) => {

  const order = (a:OfferType,b:OfferType):number => {
    switch(sort) {
      case 'Popular':
        return 0;
      case 'Price: low to high':
        if(a.price < b.price) {
          return -1;
        } else if (a.price > b.price) {
          return 1;
        } else {
          return 0;
        }
      case 'Price: high to low':
        if(a.price > b.price) {
          return -1;
        } else if (a.price < b.price) {
          return 1;
        } else {
          return 0;
        }
      case 'Top rated first':
        if(a.rating > b.rating) {
          return -1;
        } else if (a.rating < b.rating) {
          return 1;
        } else {
          return 0;
        }
      default:
        return 0;

    }
  };

  const offerList = offersMock.filter((offer:OfferType) => {
    if(currentCity === offer.city.name) {
      return offer;
    }
  }).sort(order);

  return offerList;
};
