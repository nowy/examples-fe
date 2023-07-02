import { useEffect } from 'react';
import { useAuth } from '../providers/auth';

export const LogoutPage = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) logout();
  }, [logout, user]);

  return null;
};
