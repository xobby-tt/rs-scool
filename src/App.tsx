import { Outlet } from 'react-router-dom';
import { CardsState } from './components/Cards';
import { Header } from './components/Header/Header';
import { AlertHost } from './components/UI/Alert/AlertHost/AlertHost';

export const App = () => {
  return (
    <>
      <Header></Header>
      <AlertHost>
        <CardsState>
          <Outlet />
        </CardsState>
      </AlertHost>
    </>
  );
};
