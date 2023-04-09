import { useLazyQuery, useQuery } from '@apollo/client';
import type { Pokemon } from '@favware/graphql-pokemon';
import { createContext, PropsWithChildren, useCallback, useContext, useState } from 'react';
import { GET_ALL_POKEMONS, SEARCH } from '../../../api';
import { AlertStatus, ICard } from '../../../types';
import { AlertContext } from '../../UI';

export const CardsContext = createContext<{
  cards: Pokemon[];
  loading: boolean;
  error: boolean;
  addCard: (_card: ICard) => void;
  search: (_query: string) => void;
}>({
  cards: [],
  loading: true,
  error: false,
  addCard: (_card: ICard) => {},
  search: (_query: string) => {},
});

export const CardsState = (props: PropsWithChildren<object>) => {
  const [cards, setCards] = useState<Pokemon[]>([]);
  const { sendAlert } = useContext(AlertContext);

  const defaultResult = useQuery<{ getAllPokemon: Pokemon[] }>(GET_ALL_POKEMONS, {
    variables: { take: 20, offset: 100 },
    onCompleted({ getAllPokemon }) {
      setCards(getAllPokemon);
    },
    onError() {
      if (searchResult.error?.message) {
        sendAlert({
          status: AlertStatus.Error,
          message: searchResult.error?.message,
        });
      }
    },
  });
  const [lazySearch, searchResult] = useLazyQuery<{ getFuzzyPokemon: Pokemon[] }>(SEARCH, {
    variables: { pokemon: '' },
    onCompleted({ getFuzzyPokemon }) {
      setCards(getFuzzyPokemon);
    },
    onError() {
      if (searchResult.error?.message) {
        sendAlert({
          status: AlertStatus.Error,
          message: searchResult.error?.message,
        });
      }
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
        setCards(defaultResult.data?.getAllPokemon);
      } else {
        lazySearch({ variables: { pokemon: query } });
      }
    },
    [setCards, lazySearch, defaultResult.data?.getAllPokemon]
  );

  return (
    <>
      <CardsContext.Provider
        value={{
          cards: cards || [],
          addCard,
          search,
          loading: searchResult.loading || defaultResult.loading,
          error: !!searchResult.error || !!defaultResult.error,
        }}
      >
        {props.children}
      </CardsContext.Provider>
    </>
  );
};
