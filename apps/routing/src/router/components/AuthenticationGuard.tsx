import type { FC, ReactElement } from 'react';
import { useAuth } from '@/domains/auth';
import { ProtectedRoute } from './ProtectedRoute';

export type AuthenticationGuardProps = {
  children?: ReactElement;
  redirectPath?: string;
  guardType?: 'authenticated' | 'unauthenticated';
};

export const AuthenticationGuard: FC<AuthenticationGuardProps> = ({
  redirectPath = '/login',
  guardType = 'authenticated',
  ...props
}) => {
  const { user } = useAuth();
  const isAllowed = guardType === 'authenticated' ? !!user : !user;

  return (
    <ProtectedRoute
      redirectPath={redirectPath}
      isAllowed={isAllowed}
      {...props}
    />
  );
};
