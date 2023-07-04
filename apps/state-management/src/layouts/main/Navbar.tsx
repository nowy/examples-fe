import { useThemeStore } from '@/store/theme';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/notifications">Notifications</Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme}>Current theme: {theme}</button>
    </div>
  );
};
