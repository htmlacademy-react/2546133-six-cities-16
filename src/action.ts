import { offerType } from './mocks/offers';
import { ACTION_CONST } from './actions-const';

export const changeCityAction = (city:string) => ({type: ACTION_CONST.CHANGE_CITY, city: city});

export const setOfferList = (offerList:offerType[]) => ({type: ACTION_CONST.SET_OFFER_LIST, offerList: offerList});
