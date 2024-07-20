import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
type PrivateProps = {
    userId: string | null;
    children: ReactNode;
}

export const Private = ({userId, children}:PrivateProps):ReactNode => {
  if (userId) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};
