import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, test } from 'vitest';
import { CardsState } from '../../components/Cards';
import { AlertHost } from '../../components/UI';
import { AppStore } from '../../store';
import { POKEMON_RESPONCES_MOCK } from '../../test-utils';
import { Home } from './Home';

describe('Home', () => {
  test('Should have cards', async () => {
    render(
      <MockedProvider mocks={POKEMON_RESPONCES_MOCK} addTypename={false}>
        <Provider store={AppStore}>
          <AlertHost>
            <CardsState>
              <Home></Home>
            </CardsState>
          </AlertHost>
        </Provider>
      </MockedProvider>
    );

    expect(await screen.findByRole('cardList')).toBeInTheDocument();
  });
});
