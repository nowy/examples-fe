import { Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/layouts/main';
import './style.css';

export function App() {
  return (
    /* To learn how to do advanced routing, visit the routing documentation: https://fe.engineer/handbook/routing */
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<div />} />
      </Route>
    </Routes>
  );
}

export default App;
