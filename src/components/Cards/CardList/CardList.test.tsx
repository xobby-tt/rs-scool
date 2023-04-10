import { Pokemon } from '@favware/graphql-pokemon';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { POKEMONS_LIST_MOCK } from '../../../mocks';
import { PopupContext } from '../CardPopup';
import { CardList } from './CardList';

describe('CardList', () => {
  test('Should have cards', () => {
    render(
      <PopupContext.Provider value={{ popups: [], openPopup: (_pokemon: Partial<Pokemon>) => {} }}>
        <CardList cards={POKEMONS_LIST_MOCK}></CardList>
      </PopupContext.Provider>
    );
    expect(screen.getAllByRole('heading')).toHaveLength(POKEMONS_LIST_MOCK.length);
  });
});
