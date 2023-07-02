import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export const MainLayout = () => (
  <div>
    <h1>Dashboard</h1>
    <hr />
    <Navigation />
    <hr />
    <Outlet />
  </div>
);
