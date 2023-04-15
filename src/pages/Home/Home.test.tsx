import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { CardsState } from '../../components/Cards';
import { AlertHost } from '../../components/UI';
import { POKEMON_RESPONCES_MOCK } from '../../test-utils';
import { Home } from './Home';

describe('Home', () => {
  test('Should have cards', async () => {
    render(
      <MockedProvider mocks={POKEMON_RESPONCES_MOCK} addTypename={false}>
        <AlertHost>
          <CardsState>
            <Home></Home>
          </CardsState>
        </AlertHost>
      </MockedProvider>
    );

    expect(await screen.findByRole('cardList')).toBeInTheDocument();
  });
});
