import { GET_ALL_POKEMONS, SEARCH } from '../api';
import { PIKACHU_MOCK, POKEMONS_LIST_MOCK, SLOWPOKE_MOCK } from './pokemon.mock';

export const POKEMON_RESPONCES_MOCK = [
  {
    request: {
      query: GET_ALL_POKEMONS,
      variables: { take: 20, offset: 100 },
    },
    result: {
      data: POKEMONS_LIST_MOCK,
    },
  },
  {
    request: {
      query: SEARCH,
      variables: { pokemon: '' },
    },
    result: {
      data: [PIKACHU_MOCK, SLOWPOKE_MOCK],
    },
  },
];
