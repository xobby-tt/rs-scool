import { ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import { PokemonApiClient } from './api';
import { CardsState } from './components/Cards';
import { CardPopupHost } from './components/Cards/CardPopup';
import { Header } from './components/Header/Header';
import { AlertHost } from './components/UI/Alert/AlertHost/AlertHost';
import { Provider } from 'react-redux';
import { AppStore } from './store/app';

export const App = () => {
  return (
    <>
      <Provider store={AppStore}>
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
      </Provider>
    </>
  );
};
