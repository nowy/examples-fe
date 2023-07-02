import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../providers/auth';

export const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async () => {
    await login();
    // Send them back to the page they tried to visit when they were
    // redirected to the login page. Use { replace: true } so we don't create
    // another entry in the history stack for the login page.  This means that
    // when they get to the protected page and click the back button, they
    // won't end up back on the login page, which is also really nice for the
    // user experience.
    navigate(from, { replace: true });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
