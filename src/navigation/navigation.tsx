import { useSelector } from "react-redux"
import { StateType } from "../reducer"
import { Link } from "react-router-dom";
import { logOff } from "../action";
import { DispatchType } from "../ts_types";
import { useDispatch } from "react-redux";

export const Navigation = () => {
    const useAppDispatch = () => useDispatch<DispatchType>();
    const dispatch = useAppDispatch();
    const authorizationData = useSelector((state:StateType) => state.authorizationData);
    const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus);

    const onClickSignOut = () => {
        dispatch(logOff());
    }
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
              {authorizationStatus ?
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        <Link to={'/favorites'}> {authorizationStatus ? authorizationData?.email : ''}</Link>
                      </span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout" onClick={() => {onClickSignOut()}}>Sign out</span>
                    </a>
                  </li>
                </ul> :
                <Link to={'/login'}> Sign in</Link>}
            </nav>
          </div>
        </div>
      </header>
    )
}