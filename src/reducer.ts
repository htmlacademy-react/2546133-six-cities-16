import { ACTION_CONST } from './actions-const';
import { OfferType, OfferDType, AuthDataType } from './ts_types';

export type StateType = {
  city: string | null;
  offerList: OfferType[];
  isLoading: boolean;
  currentOffer: OfferDType | null;
  offerListNear: OfferType[];
  authorizationStatus: string | null;
  authorizationData: AuthDataType | null;
  favorites: OfferType[];
};

export const INITIAL_STATE:StateType = {
  city: null,
  offerList: [],
  isLoading: false,
  currentOffer: null,
  offerListNear: [],
  authorizationStatus: null,
  authorizationData: null,
  favorites: []
};

/*
type changeCActionType = {
  type: string;
  city: string | null;
}

type changeOLActionType = {
  type: string;
  offerList: offerType[];
}*/

type ActionType =
{
  type: string;
  city: string | null;
  offerList: OfferType[];
  isLoading: boolean;
  currentOffer: OfferDType;
  offerListNear: OfferType[];
  authorizationStatus: string | null;
  authorizationData: AuthDataType | null;
  favorites: OfferType[];
}


export const cityReducer = (state = INITIAL_STATE, action: ActionType):StateType => {
  switch(action.type) {
    case ACTION_CONST.CHANGE_CITY: return { ...state, city: action.city };
    case ACTION_CONST.SET_OFFER_LIST: return {...state, offerList: action.offerList};
    case ACTION_CONST.SET_LOADING: return {...state, isLoading: action.isLoading};
    case ACTION_CONST.SET_CURRENT_OFFER: return {...state, currentOffer: action.currentOffer};
    case ACTION_CONST.SET_OFFER_LIST_NEAR: return {...state, offerListNear: action.offerListNear};
    case ACTION_CONST.SET_AUTHORIZATION_STATUS: return {...state, authorizationStatus: action.authorizationStatus};
    case ACTION_CONST.SET_AUTHORIZATION_DATA: return {...state, authorizationData: action.authorizationData};
    case ACTION_CONST.SET_FAVORITES: return {...state, favorites: action.favorites};
    default: return state;
  }
};
