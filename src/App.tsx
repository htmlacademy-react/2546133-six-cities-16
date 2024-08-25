import { Main } from './main/main';
import { Login } from './login/login';
import { Favorites } from './favorites/favorites';
import { Offer } from './offer/offer';
import { Error } from './error/error';
import { Private } from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './action';
import { DispatchType } from './ts_types';
import { changeCityAction } from './action';
import { fetchFavorites } from './action';
import { useSelector } from 'react-redux';
import { StateType } from './reducer';

/*type offersMockPropsType = {
  offersMock:Array<offerType>;
}*/

export function App() {

  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const authorizationData = useSelector((state:StateType) => state.authorizationData);
  const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus);
  useEffect(() => {
    dispatch(login());
  }, []);


  useEffect(() => {
    dispatch(changeCityAction('Paris'));
    if(authorizationStatus === 'Authorized') {
      dispatch(fetchFavorites());
    }
  }, [authorizationData]);
  return(
    /*<Main offerCount = {2}/>*/
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/>
        <Route path='/login' element={<Login/>}/>
        {<Route path='/favorites' element={<Private> <Favorites/> </Private>}/>}
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}
