import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">REST Example</Link>
          </li>
          <li>
            <Link to="/trpc">tRPC Example</Link>
          </li>
          <li>
            <Link to="/graphql">GraphQL Example</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
