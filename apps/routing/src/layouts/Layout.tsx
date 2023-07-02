import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../domains/auth/providers/auth';

export const Layout = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/logout">Logout</Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
