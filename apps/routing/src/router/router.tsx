import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { AuthenticationGuard } from './components/AuthenticationGuard';
import { HomePage } from '@/domains/home';
import { SettingsPage } from '@/domains/settings';
import { LoginPage, LogoutPage } from '@/domains/auth';
import { NotFoundPage } from '@/domains/404';

const routes = createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route index element={<HomePage />} />

    {/* Protect route based on authentication */}
    <Route element={<AuthenticationGuard />}>
      <Route path="settings" element={<SettingsPage />} />
      <Route path="logout" element={<LogoutPage />} />
    </Route>

    {/* Only allow login if the user is unauthenticated */}
    <Route element={<AuthenticationGuard guardType="unauthenticated" />}>
      <Route path="login" element={<LoginPage />} />
    </Route>

    {/* 404 page */}
    <Route path="*" element={<NotFoundPage />} />
  </Route>
);

export const router = createBrowserRouter(routes);
