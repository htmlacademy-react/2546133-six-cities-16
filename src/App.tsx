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

/*type offersMockPropsType = {
  offersMock:Array<offerType>;
}*/

export function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login());


  }, []);
  return(
    /*<Main offerCount = {2}/>*/
    <BrowserRouter>
      <Routes>
        <Route index element={<Main/>}/> 
        <Route path='/login' element={<Login/>}/>
        {<Route path='/favorites' element={<Private> <Favorites offerList={offersMock}/> </Private>}/>}
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}
