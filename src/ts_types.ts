import { store } from './store';

export type cityPropsType = {
  city: string;
}

export type cityListPropsType = {
  cityList: string[];
}


export type reviewPropsType = {
  review:reviewType;
}

export type CrdType = {
  id: string;
  latitude: number;
  longitude: number;
}

export type HostType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}
export type OfferDType = {

    'id': string;
    'title': string;
    'type': string;
    'price': number;
    'city': CityType;
    'location': LocationType;
    'isFavorite': boolean;
    'isPremium': boolean;
    'rating': number;
    'description': string;
    'bedrooms': number;
    'goods': string[];
    'host': HostType;
    'images': string[];
    'maxAdults': number;
    }

export type reviewType = {
  key: number;
  userPic: string;
  name: string;
  reviewRating: number;
  reviewDate: string;
  reviewText: string;
}

export type landLordType = {
  userPic: string;
  name: string;
  isPro: boolean;
}


export type MapPropsType = {
  crdList: CrdType[];
}

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;

}

export type CityType = {
  name: string;
  location: LocationType;
}


export type ItemType = {
  key: number;
  item: string;
}

export type LoginObjType = {
  email: string;
  password: string;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type AuthDateType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}


export type OfferListPropType = {
  offerList:Array<OfferType>;
}

export type OfferPropType = {
  offer: OfferType;
}


export type mapRefType = {
  current: HTMLDivElement;
}

export type CardPropType = {
  offer: OfferType;
}

export type StateType = ReturnType<typeof store.getState>;

export type DispatchType = typeof store.dispatch;
