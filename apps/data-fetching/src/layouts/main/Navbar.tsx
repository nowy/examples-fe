import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/trpc">tRPC Example</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
