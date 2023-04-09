import { useLazyQuery, useQuery } from '@apollo/client';
import type { Pokemon } from '@favware/graphql-pokemon';
import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { GET_ALL_POKEMONS, SEARCH } from '../../../api';
import { AlertStatus, ICard } from '../../../types';
import { AlertContext } from '../../UI';

export const CardsContext = createContext<{
  cards: Pokemon[];
  addCard: (_card: ICard) => void;
  search: (_query: string) => void;
}>({
  cards: [],
  addCard: (_card: ICard) => {},
  search: (_query: string) => {},
});

export const CardsState = (props: PropsWithChildren<object>) => {
  const [cards, setCards] = useState<Pokemon[]>([]);
  const { sendAlert } = useContext(AlertContext);
  const defaultCards = useQuery<{ getAllPokemon: Pokemon[] }>(GET_ALL_POKEMONS, {
    variables: { take: 20, offset: 100 },
    onCompleted({ getAllPokemon }) {
      setCards(getAllPokemon);
    },
  });
  const [lazySearch] = useLazyQuery<{ getFuzzyPokemon: Pokemon[] }>(SEARCH, {
    variables: { pokemon: '' },
    onCompleted({ getFuzzyPokemon }) {
      setCards(getFuzzyPokemon);
    },
  });

  const addCard = (_card: ICard) => {
    sendAlert({
      status: AlertStatus.Success,
      message: 'New sock-card created!',
    });
  };
  const search = useCallback(
    (query: string) => {
      if (!query) {
        setCards(defaultCards.data?.getAllPokemon);
      }
      lazySearch({ variables: { pokemon: query } });
    },
    [setCards, lazySearch, defaultCards.data?.getAllPokemon]
  );

  return (
    <>
      <CardsContext.Provider value={{ cards: cards || [], addCard, search }}>
        {props.children}
      </CardsContext.Provider>
    </>
  );
};
