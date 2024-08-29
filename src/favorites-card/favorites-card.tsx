
import { Link } from 'react-router-dom';
import { OfferPropType, DispatchType } from '../ts_types';
import { getRating } from '../utils';
import { useDispatch } from 'react-redux';
import { postFavorites } from '../action';

export const FavoritesCard = ({offer}:OfferPropType) => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  return(
    <article className="favorites__card place-card">
      <div className={`place-card__mark ${offer.isPremium ? '' : 'visually-hidden'}`}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to='#'>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
            onClick={()=> {
              dispatch(postFavorites({id: offer?.id, status: (offer?.isFavorite) ? 0 : 1}));
            }}
          >
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
  );
};
