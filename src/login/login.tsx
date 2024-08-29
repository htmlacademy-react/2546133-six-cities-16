import { loginPost } from '../action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { DispatchType, StateType} from '../ts_types';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Login = () => {

  const useAppDispatch = () => useDispatch<DispatchType>();
  const dispatch = useAppDispatch();
  const inputEmail = useRef<HTMLInputElement | null>(null);
  const inputPassword = useRef<HTMLInputElement | null>(null);
  const authorizationStatus = useSelector((state:StateType) => state.authorizationStatus);
  const navigate = useNavigate();

  const handleFormSubmit = (evt:React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (inputEmail.current && inputPassword.current) {
      dispatch(loginPost({
        email: inputEmail.current.value,
        password: inputPassword.current.value
      }));
    }
  };

  if (authorizationStatus === 'Authorized') {
    navigate('/');
  }


  return(
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={'/'} className="header__logo-link">  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>

              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={(evt)=>{
              handleFormSubmit(evt);
            }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref ={inputEmail}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" pattern='([a-zA-Z]+[0-9]|[0-9]+[a-zA-Z])[a-zA-Z0-9]*' required ref ={inputPassword}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={'#'} className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
