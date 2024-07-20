import { Main } from './main/main';
import { Login } from './login/login';
import { Favorites } from './favorites/favorites';
import { Offer } from './offer/offer';
import { Error } from './error/error';
import { Private } from './private-route';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export function App() {

  return(
    /*<Main offerCount = {2}/>*/
    <BrowserRouter>
      <Routes>
        <Route index element={<Main offerCount = {2}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/favorites' element={<Private userId = {null}> <Favorites/> </Private>}/>
        <Route path='/offer/:id' element={<Offer/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}
