import { Navigate } from 'react-router-dom';

type PrivateProps = {
    userId: string | null;
    children: JSX.Element;
}

export const Private = ({userId, children}:PrivateProps):JSX.Element => {
  if (userId) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};
