import { OfferType } from './ts_types';
import { ACTION_CONST } from './actions-const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { DispatchType, StateType, AuthDataType, LoginObjType,CommentType, PostCommentsType, PostFavoritesType } from './ts_types';
import { AxiosInstance } from 'axios';
import { routesAPI } from './const';
import { sortReviews } from './utils';
import { setToken, rmToken } from './token';

export const changeCityAction = (city:string) => ({type: ACTION_CONST.CHANGE_CITY, city: city});

export const setOfferList = (offerList:OfferType[]) => ({type: ACTION_CONST.SET_OFFER_LIST, offerList: offerList});

export const setIsLoading = (isLoading: boolean) => ({type: ACTION_CONST.SET_LOADING, isLoading: isLoading});

export const setCurrentOffer = (currentOffer:OfferType) => ({type: ACTION_CONST.SET_CURRENT_OFFER, currentOffer:currentOffer });

export const setOfferListNear = (offerListNear:OfferType[]) => ({type: ACTION_CONST.SET_OFFER_LIST_NEAR, offerListNear: offerListNear});

export const setAuthStatus = (authorizationStatus:string) => ({type: ACTION_CONST.SET_AUTHORIZATION_STATUS,authorizationStatus: authorizationStatus });

export const setAuthData = (authorizationData:AuthDataType) => ({type: ACTION_CONST.SET_AUTHORIZATION_DATA, authorizationData: authorizationData });

export const setFavorites = (favorites:OfferType[]) => ({type: ACTION_CONST.SET_FAVORITES, favorites: favorites});

export const setComments = (comments: CommentType[]) => ({type: ACTION_CONST.SET_COMMENTS, comments: comments});

export const logOff = () => ({type:ACTION_CONST.LOG_OFF});

export const setSort = (sort: string) => ({type: ACTION_CONST.SET_SORT, sort: sort});

export const setActiveOffer = (offerId: string | null) => ({type: ACTION_CONST.SET_ACTIVE_OFFER, offerId: offerId});


export const fetchOfferList = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  '/data/offers',
  async (_args, {dispatch, extra: objApi}) => {
    dispatch(setIsLoading(true));
    const { data } = await objApi.get<OfferType[]>(routesAPI.offers);
    dispatch(setIsLoading(false));
    dispatch(setOfferList(data));
  }
);


export const fetchCurrentOffer = createAsyncThunk<void, string, {
    state: StateType;
    dispatch: DispatchType;
    extra: AxiosInstance;
}>(
  '/data/offer',
  async(currentOfferId, {dispatch, extra: objApi}) => {
    const {data} = await objApi.get<OfferType>(`${routesAPI.offers}/${currentOfferId}`);
    dispatch(setCurrentOffer(data));
  });


export const fetchOfferListNear = createAsyncThunk<void, string, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  '/data/offers_near',
  async(_args, {dispatch, extra: objApi}) => {
    const {data} = await objApi.get<OfferType[]>(`${routesAPI.offers}/${_args}/nearby`);
    dispatch(setOfferListNear(data));
  });

export const login = createAsyncThunk<void, undefined, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;
}>(
  '/auth/login',
  async(_args, {dispatch, extra: objApi}) => {
    const {data} = await objApi.get<AuthDataType>(routesAPI.login);
    let status = 'Unathorized';
    if(data.token) {
      status = 'Authorized';
      dispatch(setAuthData(data));
    }
    dispatch(setAuthStatus(status));

  });

export const loginPost = createAsyncThunk<void, LoginObjType, {
        dispatch: DispatchType;
        state: StateType;
        extra: AxiosInstance;
    }>(
      '/auth/login_post',
      async(_args, {dispatch, extra: objApi}) => {
        let status:string;
        const {data} = await objApi.post<AuthDataType>(routesAPI.login, _args);
        if(!data) {
          status = 'Unauthorized';
        } else {
          status = 'Authorized';
          setToken(data.token);
        }
        dispatch(setAuthStatus(status));
        dispatch(setAuthData(data));
      });


export const fetchFavorites = createAsyncThunk<void, undefined, {
            dispatch: DispatchType;
            state: StateType;
            extra: AxiosInstance;
        }>(
          '/data/favorites',
          async(_args, {dispatch, extra: objApi}) => {
            const {data} = await objApi.get<OfferType[]>(routesAPI.favorites);
            dispatch(setFavorites(data));

          });


export const fetchComments = createAsyncThunk<void, string, {
  dispatch: DispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  '/data/comments',
  async(_args, {dispatch, extra: objApi}) => {
    const {data} = await objApi.get<CommentType[]>(`${routesAPI.comments}/${_args}`);
    dispatch(setComments(data.sort(sortReviews)));

  }
);

export const postComments = createAsyncThunk<void, PostCommentsType, {
  dispatch: DispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  '/data/post_comments',
  async(_args, {dispatch, extra: objApi}) => {
    await objApi.post<CommentType[]>(`${routesAPI.comments}/${_args.id}`, _args.commentObj,);
    dispatch(fetchComments(_args.id));

  }
);


export const postFavorites = createAsyncThunk<void, PostFavoritesType, {
  dispatch: DispatchType;
  state: StateType;
  extra: AxiosInstance;
}>(
  '/auth/favorites',
  async(_args, {dispatch, extra: objApi}) => {
    await objApi.post<OfferType>(`${routesAPI.favorites}/${_args.id}/${_args.status}`);
    dispatch(fetchOfferList());
    dispatch(fetchFavorites());

  });


export const endSession = createAsyncThunk<void, void, {
    dispatch: DispatchType;
    state: StateType;
    extra: AxiosInstance;
  }>(
    '/auth/logoff',
    async(_args, {dispatch, extra: objApi}) => {
      await objApi.delete(`${routesAPI.logout}`);
      rmToken();
      dispatch(logOff());

    });

