import { useQuery } from '@apollo/client';
import type { Pokemon, Query } from '@favware/graphql-pokemon';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { CARDS } from '../../../mocks/cards.mock';
import { GET_ALL_POKEMONS, PokemonApiClient, SEARCH } from '../../../api';
import { AlertStatus, ICard } from '../../../types';
import { AlertContext } from '../../UI';

export const CardsContext = createContext<{ cards: Pokemon[]; addCard: (_card: ICard) => void }>({
  cards: [],
  addCard: (_card: ICard) => {},
});

type GraphQLPokemonResponse<K extends keyof Omit<Query, '__typename'>> = Record<
  K,
  Omit<Query[K], '__typename'>
>;

export const CardsState = (props: PropsWithChildren<object>) => {
  const [cards, setCards] = useState<ICard[]>(CARDS);
  const { sendAlert } = useContext(AlertContext);
  const { loading, error, data } = useQuery<{ getAllPokemon: Pokemon[] }>(GET_ALL_POKEMONS, {
    client: PokemonApiClient,
    variables: { item: 'hel' },
  });
  const addCard = (card: ICard) => {
    sendAlert({
      status: AlertStatus.Success,
      message: 'New sock-card created!',
    });
  };

  return (
    <>
      <CardsContext.Provider value={{ cards: data?.getAllPokemon || [], addCard }}>
        {props.children}
      </CardsContext.Provider>
    </>
  );
};
