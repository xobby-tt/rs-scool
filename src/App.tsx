import { ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import { PokemonApiClient } from './api';
import { CardsState } from './components/Cards';
import { CardPopupHost } from './components/Cards/CardPopup';
import { Header } from './components/Header/Header';
import { AlertHost } from './components/UI/Alert/AlertHost/AlertHost';

export const App = () => {
  return (
    <>
      <Header></Header>
      <AlertHost>
        <CardPopupHost>
          <ApolloProvider client={PokemonApiClient}>
            <CardsState>
              <Outlet />
            </CardsState>
          </ApolloProvider>
        </CardPopupHost>
      </AlertHost>
    </>
  );
};
