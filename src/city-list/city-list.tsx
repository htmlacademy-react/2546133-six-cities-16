import { cityListPropsType } from '../ts_types';
import { City } from '../city/city';

export const CityList = ({cityList}:cityListPropsType) => (
  <ul className="locations__list tabs__list">
    {cityList.map((city) => (<City key={city} city={city}/>))}
  </ul>
);
