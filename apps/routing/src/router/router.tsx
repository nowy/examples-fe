import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useAuth } from '../domains/auth/providers/auth';
import { Layout } from '../layouts/Layout';
import {
  AuthenticationGuard,
  UnAuthenticationGuard,
} from './components/AuthenticationGuard';
import { useEffect } from 'react';

const HomePage = () => <div>Home</div>;
const SettingsPage = () => <div>Settings</div>;

const LoginPage = () => {
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

const LogoutPage = () => {
  const { user, logout } = useAuth();

  useEffect(() => {
    if (user) logout();
  }, [logout, user]);

  return null;
};

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<HomePage />} />

    {/* Protect route based on authentication */}
    <Route element={<AuthenticationGuard />}>
      <Route path="settings" element={<SettingsPage />} />
      <Route path="logout" element={<LogoutPage />} />
    </Route>

    {/* Login page in case unauthenticated */}
    <Route element={<UnAuthenticationGuard />}>
      <Route path="login" element={<LoginPage />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(routes);
