import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export const MainLayout = () => {
  return (
    <main className="main">
      <div className="wrapper">
        <Navbar />
        <hr />
        <div className="main-container">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
