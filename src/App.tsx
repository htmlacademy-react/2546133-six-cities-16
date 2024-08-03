import { Main } from './main/main';
import { Login } from './login/login';
import { Favorites } from './favorites/favorites';
import { Offer } from './offer/offer';
import { Error } from './error/error';
import { Private } from './private-route';
import { offerType } from './mocks/offers';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

type offersMockPropsType = {
  offersMock:Array<offerType>;
}

export function App({offersMock}:offersMockPropsType) {

  return(
    /*<Main offerCount = {2}/>*/
    <BrowserRouter>
      <Routes>
        <Route index element={<Main offerCount = {2} offersMock = {offersMock}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Private userId = {'aa'}> <Favorites offerList={offersMock}/> </Private>}/>
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}
