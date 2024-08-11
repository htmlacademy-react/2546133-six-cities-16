
import '../../markup/css/main.css';
import { OfferType } from '../ts_types';
import { OfferList } from '../offer-list/offer-list';
import { MapComp } from '../map/map';
import { CityList } from '../city-list/city-list';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeCityAction, fetchOfferList } from '../action';
import { StateType } from '../reducer';
import { getOfferList } from '../utils';
import { Spiner } from '../spinner/spiner';
import { Link } from 'react-router-dom';
import { CITY_LIST } from '../const';
/*
type MainProps = {
  offerCount:number;
  offersMock: offerType[];
}*/
export const Main = () => {

  const dispatch = useDispatch();
  const currentCity = useSelector((state:StateType) =>state.city);
  const currentOfferList = useSelector((state:StateType) => state.offerList);
  const isLoading = useSelector((state:StateType) => state.isLoading);
  const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus);
  const authorizationData = useSelector((state:StateType) => state.authorizationData);
   

  //const offerList = offersMock.filter((offer) => {  if(currentCity === offer.city) {return offer}});

  const crdList = getOfferList(currentOfferList,currentCity).map((offer:OfferType) => ({ id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude
  }));
  //eslint-disable-next-line
   
   
  useEffect(() => {
    dispatch(fetchOfferList());
   
    dispatch(changeCityAction('Paris'));
    //dispatch(setOfferList(getOfferList(offersMock, 'Paris')));
  }, []);


  if (isLoading) {
    return (<Spiner/>)
    }
  return(
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              {authorizationStatus?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{authorizationData?.email}</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>:
              <Link to={`/login`}> Sign in</Link>}
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            {<CityList cityList={CITY_LIST}></CityList>}


          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentOfferList.length} places to stay in {currentCity}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <div className="cities__places-list places__list tabs__content">
                <OfferList offerList= {getOfferList(currentOfferList, currentCity)}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <MapComp crdList={crdList}/>

              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
