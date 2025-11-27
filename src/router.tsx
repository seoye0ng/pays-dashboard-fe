import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Dashboard from './pages/Dashboard';
import Payments from './pages/Payments';
import NotFound from './pages/NotFound';
import Merchants from './pages/Merchants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'payments', element: <Payments /> },
      { path: 'merchants', element: <Merchants /> },
    ],
  },
]);
