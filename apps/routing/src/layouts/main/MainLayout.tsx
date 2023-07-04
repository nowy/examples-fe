import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const MainLayout = () => (
  <div>
    <h1>Dashboard</h1>
    <hr />
    <Navbar />
    <hr />
    <Outlet />
  </div>
);
