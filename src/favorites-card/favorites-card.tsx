import { offerMockPropsType } from '../ts_types';
import { Link } from 'react-router-dom';

export const FavoritesCard = ({offerMock}:offerMockPropsType) => (
  <article className="favorites__card place-card">
    <div className="place-card__mark">
      <span>{offerMock.premium}</span>
    </div>
    <div className="favorites__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src="img/apartment-small-03.jpg" width="150" height="110" alt="Place image"/>
      </a>
    </div>
    <div className="favorites__card-info place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offerMock.cost}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: '100%'}}></span>
          <span className="visually-hidden">{offerMock.rating}</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offerMock.key}`} key={offerMock.key} state={offerMock}> {offerMock.header}</Link>
      </h2>
      <p className="place-card__type">{offerMock.type}</p>
    </div>
  </article>
);
