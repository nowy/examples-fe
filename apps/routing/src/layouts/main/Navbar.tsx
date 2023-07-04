import { Link } from 'react-router-dom';
import { useAuth } from '@/domains/auth';

export const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">
            Settings{' '}
            <span role="img" aria-label="Locked">
              🔐
            </span>
          </Link>
        </li>
        <li>
          <Link to="/broken-link">Broken Link</Link>
        </li>
      </ul>
      <hr />
      <ul>
        <li>
          {!user ? (
            <Link to="/login">Login</Link>
          ) : (
            <Link to="/logout">Logout</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
