
import { FavoritesCard } from '../favorites-card/favorites-card';
import { fetchFavorites} from '../action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { OfferType } from '../ts_types';
import { CITY_LIST } from '../const';
import { DispatchType } from '../ts_types';
import { Navigation } from '../navigation/navigation';
export const Favorites = () => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const favorites = useSelector((state:StateType) => state.favorites);

  useEffect(()=>{
    dispatch(fetchFavorites());
  }, []);
  return (

    <div className="page">
      <Navigation/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {CITY_LIST.map((city:string) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favorites.map((offer:OfferType) => ((offer.city.name === city) ? <FavoritesCard key={offer.id} offer={offer}/> : '')
                    ) }
                  </div>
                </li>
              )
              )}

            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};
