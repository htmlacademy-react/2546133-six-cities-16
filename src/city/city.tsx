import { cityPropsType } from '../ts_types';
import { useDispatch } from 'react-redux';
import { changeCityAction, setOfferList } from '../action';
import { offersMock } from '../mocks/offers';
import { getOfferList } from '../utils';

export const City = ({city}:cityPropsType) => {
  const dispatch = useDispatch();


  const onCityClick = (evt:React.MouseEvent<HTMLSpanElement>) => {
    dispatch(changeCityAction(evt.currentTarget.id));
    dispatch(setOfferList(getOfferList(offersMock, evt.currentTarget.id)));
  };
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" >
        <span id={city} onClick={(evt)=> {
          onCityClick(evt);
        }}
        >{city}
        </span>
      </a>
    </li>
  );
};
