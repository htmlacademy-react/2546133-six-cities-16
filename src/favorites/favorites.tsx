
import { FavoritesCard } from '../favorites-card/favorites-card';
import { fetchFavorites} from '../action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { OfferType } from '../ts_types';
import { DispatchType } from '../ts_types';
import { Navigation } from '../navigation/navigation';
import { FavoritesEmpty } from '../favorites-empty';
export const Favorites = () => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const favorites = useSelector((state:StateType) => state.favorites);

  useEffect(()=>{
    dispatch(fetchFavorites());
  }, []);

  if (favorites.length <= 0) {
    return(
      <FavoritesEmpty/>
    );
  }

  const cityList = favorites.map((item) => item.city.name).filter((value, index, self) =>
    self.indexOf(value) === index);


  return (

    <div className="page">
      <Navigation/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cityList.map((city:string) => (
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
