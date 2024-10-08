
import '../../markup/css/main.css';
import { OfferType } from '../ts_types';
import { OfferList } from '../offer-list/offer-list';
import { MapComp } from '../map/map';
import { CityList } from '../city-list/city-list';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchOfferList } from '../action';
import { StateType } from '../reducer';
import { getOfferList } from '../utils';
import { CITY_LIST } from '../const';
import { DispatchType } from '../ts_types';
import { Navigation } from '../navigation/navigation';
import { Sort } from '../sort';
import { MainEmpty } from '../main-empty/main-empty';

export const Main = () => {

  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const currentCity = useSelector((state:StateType) =>state.city);
  const currentOfferList = useSelector((state:StateType) => state.offerList);
  const sort = useSelector((state:StateType) => state.sort);
  const offerId = useSelector((state:StateType) => state.offerId);

  const crdList = getOfferList(currentOfferList,currentCity, sort).map((offer:OfferType) => ({ id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude
  }));


  useEffect(() => {
    dispatch(fetchOfferList());
  }, [dispatch]);


  return(
    <div className="page page--gray page--main">
      <Navigation/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            {<CityList cityList={CITY_LIST}></CityList>}


          </section>
        </div>
        { getOfferList(currentOfferList, currentCity, sort).length > 0 ?

          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{getOfferList(currentOfferList, currentCity, sort).length} places to stay in {currentCity}</b>
                <Sort/>
                <div className="cities__places-list places__list tabs__content">
                  <OfferList offerList= {getOfferList(currentOfferList, currentCity, sort)}/>
                </div>
              </section>
              <div className="cities__right-section" style={{backgroundImage:'url(../../markup/img/amsterdam.jpg)'}}>
                <section className="cities__map map">


                  {crdList.length > 0 && <MapComp crdList={crdList} offerId = {offerId}/>}

                </section>
              </div>
            </div>
          </div> :
          <MainEmpty city = {currentCity}/>}
      </main>
    </div>
  );
};
