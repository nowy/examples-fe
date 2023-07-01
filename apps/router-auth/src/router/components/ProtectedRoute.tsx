import { FC, ReactElement } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export type ProtectedRouteProps = { children?: ReactElement } & {
  isAllowed: boolean;
  redirectPath?: string;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  children,
  redirectPath = '/',
}) => {
  const location = useLocation();

  if (!isAllowed) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Children is used when the ProtectedRoute is not used as Layout component
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return children ?? <Outlet />;
};
