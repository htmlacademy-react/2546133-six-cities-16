
import { FavoritesCard } from '../favorites-card/favorites-card';
import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { OfferType } from '../ts_types';
import { Navigation } from '../navigation/navigation';
import { FavoritesEmpty } from '../favorites-empty';
import { Link } from 'react-router-dom';
export const Favorites = () => {
  const favorites = useSelector((state:StateType) => state.favorites);

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
                      <Link to='#' className="locations__item-link">
                        <span>{city}</span>
                      </Link>
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
        <Link to={'/'} className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};
