import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/main';
import { TrpcExampleProviderLayout } from '@/layouts/trpc';
import { RestExampleProviderLayout } from '@/layouts/rest';
import {
  TrpcUsersPage,
  GraphqlUsersPage,
  RestUsersPage,
} from '@/domains/users';
import { GraphqlExampleProviderLayout } from '@/layouts/graphql';

export function App() {
  return (
    /* To learn how to do advanced routing, visit the routing documentation: https://fe.engineer/handbook/routing */
    <Routes>
      <Route element={<MainLayout />}>
        <Route element={<RestExampleProviderLayout />}>
          <Route index element={<RestUsersPage />} />
        </Route>
        <Route path="trpc" element={<TrpcExampleProviderLayout />}>
          <Route index element={<TrpcUsersPage />} />
        </Route>
        <Route path="graphql" element={<GraphqlExampleProviderLayout />}>
          <Route index element={<GraphqlUsersPage />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
