import { cityPropsType} from '../ts_types';
import { useDispatch } from 'react-redux';
import { changeCityAction} from '../action';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { Link } from 'react-router-dom';

export const City = ({city}:cityPropsType) => {
  const dispatch = useDispatch();
  const currentCity = useSelector((state:StateType) => state.city);
  const onCityClick = (evt:React.MouseEvent<HTMLSpanElement>) => {
    dispatch(changeCityAction(evt.currentTarget.id));
  };
  return (
    <li className="locations__item">
      <Link to='#' className={`locations__item-link tabs__item ${(currentCity === city) ? 'tabs__item--active' : ''}`} >
        <span id={city} onClick={(evt)=> {
          onCityClick(evt);
        }}
        >{city}
        </span>
      </Link>
    </li>
  );
};
