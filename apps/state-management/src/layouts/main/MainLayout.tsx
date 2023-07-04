import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { useThemeStore } from '@/store/theme';

export const MainLayout = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <main className={`main ${theme}`}>
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
