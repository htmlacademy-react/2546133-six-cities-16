import { useSelector } from 'react-redux';
import { StateType } from '../reducer';
import { Link } from 'react-router-dom';
import { endSession } from '../action';
import { DispatchType } from '../ts_types';
import { useDispatch } from 'react-redux';

export const Navigation = () => {
  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const authorizationData = useSelector((state:StateType) => state.authorizationData);
  const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus);
  const favorites = useSelector((state:StateType) => state.favorites);
  const onClickSignOut = () => {
    dispatch(endSession());
  };
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === 'Authorized' ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to='#' className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      <Link to={'/favorites'}> {authorizationStatus === 'Authorized' ? authorizationData?.email : ''}</Link>
                    </span>
                    <span className="header__favorite-count">{favorites.length}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to='#' className="header__nav-link">
                    <span className="header__signout" onClick={() => {
                      onClickSignOut();
                    }}
                    >Sign out
                    </span>
                  </Link>
                </li>
              </ul> :
              <Link to={'/login'}> Sign in</Link>}
          </nav>
        </div>
      </div>
    </header>
  );
};
