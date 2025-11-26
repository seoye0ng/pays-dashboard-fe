import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import NotFound from './pages/NotFound';
import Merchants from './pages/Merchants';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'transactions', element: <Transactions /> },
      { path: 'merchants', element: <Merchants /> },
    ],
  },
]);
