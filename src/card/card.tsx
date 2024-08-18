import { CardPropType, DispatchType } from '../ts_types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postFavorites } from '../action';
import { getRating } from '../utils';

export const Card = ({offer}:CardPropType) => {

  const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus );
  const currentOffer = useSelector((state:StateType) => state.currentOffer);

  const navigate = useNavigate();
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();

  const onClickFavorites = (evt:React.MouseEvent<HTMLButtonElement>) => {
    console.log('clickeed');
    if(authorizationStatus=='Authorized') {
      if (offer) {
      dispatch(postFavorites({id: offer?.id, status: (offer?.isFavorite)?0:1}));
      }
    }
    else
    {
      navigate("/login");
    }
 
      

     
  }
return(
  <article className="cities__card place-card">
                <div className={`place-card__mark ${offer.isPremium?'':'visually-hidden'}`}>
                    <span>Premium</span>
                  </div>
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={`place-card__bookmark-button ${offer.isFavorite?'':'place-card__bookmark-button--active'} button`} type="button" 
        onClick={(evt) => {  onClickFavorites(evt)}} >
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${getRating(offer.rating)}%`}}></span>
          <span className="visually-hidden">{offer.rating}</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`} key={offer.id} state={offer.id}> {offer.title}</Link>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>
)}
