import { useLocation } from 'react-router-dom';
import { CommentForm } from '../comment-form/comment-form';
import { offerType,itemType } from '../mocks/offers';
import { ReviewList } from '../review-list/review-list';
import { MapComp } from '../map/map';
import { crdType } from '../ts_types';
import { offersMock } from '../mocks/offers';
import { OfferList } from '../offer-list/offer-list';
export const Offer = ()=> {
  const state = useLocation();
  const offerMock:offerType = state.state as offerType;
  const offersNear = offersMock.filter((offer) => offerMock.key !== offer.key);

  const crdNear:crdType[] =
  [
    {
      key: 1,
      lat: 52.3909553943508,
      lng: 4.85309666406198
    },
    {
      key: 2,
      lat: 52.3609553943508,
      lng: 4.85309666406198
    },
    {
      key: 3,
      lat: 52.3909553943508,
      lng: 4.929309666406198
    },
    {
      key: 4,
      lat: 52.3809553943508,
      lng: 4.939309666406198
    }
  ];
  return(
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Photo studio"/>
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Photo studio"/>
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>{offerMock.premium}</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerMock.header}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerMock.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerMock.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerMock.bedroomsNum} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerMock.guestNum} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerMock.cost}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerMock.itemList.map((item:itemType) => (
                    <li key={item.key} className="offer__inside-item">
                      {item.item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {offerMock.landLord.name}
                  </span>
                  <span className="offer__user-status">
                    {offerMock.landLord.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerMock.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList offerMock={offerMock}/>
                <CommentForm/>
              </section>
            </div>
          </div>
          <section className="map">
            <MapComp crdList={crdNear}></MapComp>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offersMock={offersNear}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
