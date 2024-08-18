import { useLocation } from 'react-router-dom';
import { CommentForm } from '../comment-form/comment-form';
import { OfferType } from '../ts_types';
import { ReviewList } from '../review-list/review-list';
import { MapComp } from '../map/map';
//import { CrdType } from '../ts_types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentOffer, fetchOfferListNear, postFavorites } from '../action';
import { useSelector } from 'react-redux';
import { Error } from '../error/error';
import { OfferList } from '../offer-list/offer-list';
import { StateType } from '../reducer';
import { Spiner } from '../spinner/spiner';
import { DispatchType } from '../ts_types';
import { Navigation } from '../navigation/navigation';
import { getRating } from '../utils';
import { useNavigate } from 'react-router-dom';

export const Offer = ()=> {
  const stateLocation = useLocation();
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentOfferId = stateLocation.state as string;
  const currentOffer = useSelector((state: StateType) => state.currentOffer);
  const currentOfferListNear = useSelector((state:StateType) => state.offerListNear);
  const authorizationStatus = useSelector((state: StateType) => state.authorizationStatus);
  const comments = useSelector((state:StateType) => state.comments);
  //const offersNear = offersMock.filter((offer) => currentOffer.id !== offer.key);
  useEffect(() => {
    //read documentation
    dispatch(fetchCurrentOffer(currentOfferId));
    dispatch(fetchOfferListNear(currentOfferId));
  }, []);


  const crdNear = currentOfferListNear.map((offer:OfferType) => ({ id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude
  }));

  if (!currentOfferId) {
    return (<Error/>);
  }

  if (!currentOffer) {
    return (<Spiner/>);
  }

  const onClickFavorites = () => {
    console.log('clickeed');
    if(authorizationStatus==='Authorized') {
      if (currentOffer) {
      dispatch(postFavorites({id: currentOffer?.id, status: (currentOffer?.isFavorite)?0:1}));
      }
    }
    else
    {
      navigate("/login");
    }
 
      

     
  }

  return(
    <div className="page">
      <Navigation/>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
            {currentOffer.images.map((img:string, indx: number) => {
              if(indx<6) {
              return(
                <div className="offer__image-wrapper">
                <img className="offer__image" src={img} alt="Photo studio"/>
                </div>  )}
})}

            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className={`offer__mark ${currentOffer.isPremium?'':'visually-hidden'}`}>
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className="offer__bookmark-button button" type="button" onClick={() => {onClickFavorites()}}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${getRating(currentOffer.rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((good:string) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${currentOffer.host.isPro?'offer__avatar-wrapper--pro':''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {currentOffer.host.isPro?'Pro':''}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                <ReviewList/>


                {(authorizationStatus === 'Authorized') && <CommentForm/> }

              </section>
            </div>
          </div>
          <section className="map">
            {/*comments */}
            <MapComp crdList={crdNear}></MapComp>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offerList ={currentOfferListNear}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
