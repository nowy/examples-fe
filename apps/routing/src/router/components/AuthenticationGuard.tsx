import type { FC, ReactElement } from 'react';
import { useAuth } from '../../domains/auth/providers/auth';
import { ProtectedRoute } from './ProtectedRoute';

export type AuthenticationGuardProps = {
  children?: ReactElement;
  redirectPath?: string;
};

export const AuthenticationGuard: FC<AuthenticationGuardProps> = ({
  redirectPath = '/login',
  ...props
}) => {
  const { user } = useAuth();

  return (
    <ProtectedRoute redirectPath={redirectPath} isAllowed={!!user} {...props} />
  );
};

export const UnAuthenticationGuard: FC<AuthenticationGuardProps> = ({
  redirectPath = '/',
  ...props
}) => {
  const { user } = useAuth();

  return (
    <ProtectedRoute redirectPath={redirectPath} isAllowed={!user} {...props} />
  );
};
