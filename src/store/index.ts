import { configureStore } from '@reduxjs/toolkit';
import { cityReducer, INITIAL_STATE } from '../reducer';
import { configureAxios } from '../api';
 

let axiosObj = configureAxios();

export const store = configureStore({
  reducer: cityReducer,
  preloadedState: INITIAL_STATE,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    thunk: {
      extraArgument: axiosObj,
    }
  })

});
