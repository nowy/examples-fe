import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from '@/domains/auth/providers/auth';
import { router } from '@/router/router';

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default App;
