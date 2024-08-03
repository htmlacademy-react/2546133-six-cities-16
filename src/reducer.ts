import { ACTION_CONST } from './actions-const';
import { offerType } from './mocks/offers';

export type stateType = {
  city: string | null;
  offerList: offerType[];
};

export const INITIAL_STATE:stateType = {
  city: null,
  offerList: []
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
  offerList: offerType[];
}


export const cityReducer = (state = INITIAL_STATE, action: ActionType):stateType => {
  switch(action.type) {
    case ACTION_CONST.CHANGE_CITY: return { ...state, city: action.city };
    case ACTION_CONST.SET_OFFER_LIST: return {...state, offerList: action.offerList};
    default: return state;
  }
};
