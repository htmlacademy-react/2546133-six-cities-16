import { Navigate } from 'react-router-dom';

type PrivateProps = {
    userId: string;
    children: JSX.element;
}

export const Private = ({userId, children}:PrivateProps):JSX.element => {
  if (userId) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};
