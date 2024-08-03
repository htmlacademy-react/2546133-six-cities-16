import React from 'react';
import ReactDOM from 'react-dom/client';
import { offersMock } from './mocks/offers';
import {App} from './App';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App offersMock = {offersMock}/>
    </React.StrictMode>
  </Provider>
);
