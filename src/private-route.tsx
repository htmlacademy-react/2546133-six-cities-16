import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { StateType } from './reducer';

type PrivateProps = {
    children: ReactNode;
}

export const Private = ({children}:PrivateProps):ReactNode => {
  const authorizationStatus = useSelector((state: StateType) => state.authorizationStatus);


  if (authorizationStatus === 'Authorized') {
    return children;
  } else if (authorizationStatus === 'Unauthorized') {
    return <Navigate to={'/login'} />;
  } else if (!authorizationStatus) {
    return (<div>loading...</div>);
  }
};
