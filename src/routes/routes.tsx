import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import About from '../pages/About/About';
import Creation from '../pages/Creation/Creation';
import Home from '../pages/Home/Home';
import ErrorPage from './Error-page';

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
      {
        path: '/card-form',
        element: <Creation />,
      },
    ],
  },
]);

export default router;
