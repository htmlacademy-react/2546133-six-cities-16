import { OfferType } from './ts_types';
import { ACTION_CONST } from './actions-const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DispatchType, StateType, AuthDateType } from './ts_types';
import { AxiosInstance } from 'axios';
import { routesAPI } from './const';

export const changeCityAction = (city:string) => ({type: ACTION_CONST.CHANGE_CITY, city: city});

export const setOfferList = (offerList:OfferType[]) => ({type: ACTION_CONST.SET_OFFER_LIST, offerList: offerList});

export const setIsLoading = (isLoading: boolean) => ({type: ACTION_CONST.SET_LOADING, isLoading: isLoading});
 
export const setCurrentOffer =(currentOffer:OfferType) => ({type: ACTION_CONST.SET_CURRENT_OFFER, currentOffer:currentOffer })

export const setOfferListNear = (offerListNear:OfferType[]) => ({type: ACTION_CONST.SET_OFFER_LIST_NEAR, offerListNear: offerListNear});

export const setAuthStatus = (authorizationStatus:string) => ({type: ACTION_CONST.SET_AUTHORIZATION_STATUS,authorizationStatus: authorizationStatus })

export const setAuthData = (authorizationData:AuthDateType) => ({type: ACTION_CONST.SET_AUTHORIZATION_DATA, authorizationData: authorizationData })

export const setFavorites = (favorites:OfferType[]) => ({type: ACTION_CONST.SET_FAVORITES, favorites: favorites});

export const fetchOfferList = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;  
}>(
    '/data/offers',
    async (_args, {dispatch, extra: objApi}) => {
        dispatch(setIsLoading(true));
        const { data } = await objApi.get(routesAPI.offers);
        dispatch(setIsLoading(false));
        dispatch(setOfferList(data));
      }
)


export const fetchCurrentOffer = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;  
}>(
    '/data/offer',
    async(_args, {dispatch, extra: objApi}) => {
        const {data} = await objApi.get(routesAPI.offers+`/${_args}`);
        dispatch(setCurrentOffer(data));
    })


 
    


export const fetchOfferListNear = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;  
}>(
    '/data/offers_near',
    async(_args, {dispatch, extra: objApi}) => {
        const {data} = await objApi.get(routesAPI.offers+`/${_args}/nearby`);
        dispatch(setOfferListNear(data));
    })

export const login = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;  
}>(
    '/auth/login',
    async(_args, {dispatch, extra: objApi}) => { 
        let {data} = await objApi.get(routesAPI.login);
        if(!data) {
            data = 'Unauthorized'
        }
        dispatch(setAuthStatus(data));
    })

export const loginPost = createAsyncThunk<void, undefined, {
        dispatch: DispatchType;
        state: StateType;
        extra: AxiosInstance;  
    }>(
        '/auth/login_post',
        async(_args, {dispatch, extra: objApi}) => { 
            let status:string;
            let {data} = await objApi.post(routesAPI.login, _args );
            if(!data) {
                status = 'Unauthorized'
            }
            else { status ='Authorized'};
            dispatch(setAuthStatus(status));
            dispatch(setAuthData(data));
        })


export const fetchFavorites = createAsyncThunk<void, undefined, {
            dispatch: DispatchType;
            state: StateType;
            extra: AxiosInstance;  
        }>(
            '/data/favorites',
            async(_args, {dispatch, extra: objApi}) => { 
                let {data} = await objApi.get(routesAPI.favorites);
                dispatch(setFavorites(data));
                 
            })        