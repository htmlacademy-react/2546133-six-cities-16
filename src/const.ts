
import { CityType } from './ts_types';
import { Icon } from 'leaflet';

export const routesAPI = {
  offers: '/six-cities/offers',
  login: '/six-cities/login',
  favorites:'/six-cities/favorite',
  comments: '/six-cities/comments',
  logout: '/six-cities/logout'
};

export const defaultCustomIcon = new Icon({
  iconUrl: '../markup/img/pin.svg'

});


export const activeCustomIcon = new Icon({
  iconUrl: '../markup/img/pin-active.svg'
});


export const CITY_LIST = ['Paris','Cologne','Brussels','Amsterdam','Hamburg','Dusseldorf'];

export const CITIES:CityType[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];


export const MAIN_MAP_STYLE = {
  height: '100%',
  marginBottom : '50px'
} as const;


export const OFFER_MAP_STYLE = {
  height: '700px',
  marginBottom : '50px'
} as const;
