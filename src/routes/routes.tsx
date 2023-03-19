import App from '../App';
import Home from '../pages/Home/Home';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './Error-page';
import About from '../pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

export default router;
