import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/main';
import { TrpcExampleProviderLayout } from '@/layouts/trpc/TrpcExampleProviderLayout';
import { TrpcUsersPage } from './domains/users/pages/TrpcUsersPage';

export function App() {
  return (
    /* To learn how to do advanced routing, visit the routing documentation: https://fe.engineer/handbook/routing */
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="trpc" element={<TrpcExampleProviderLayout />}>
          <Route index element={<TrpcUsersPage />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
