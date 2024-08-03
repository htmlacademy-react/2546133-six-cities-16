import { configureStore } from '@reduxjs/toolkit';
import { cityReducer, INITIAL_STATE } from '../reducer';

export const store = configureStore({
  reducer: cityReducer,
  preloadedState: INITIAL_STATE

});
