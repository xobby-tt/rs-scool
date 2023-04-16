import type { Pokemon } from '@favware/graphql-pokemon';
import { createContext, PropsWithChildren, useCallback, useContext, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../../store/app';
import { fetchCards, seachCards, selectCards, selectStatus } from '../../../store/cards-slice';
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
  const cards = useSelector(selectCards);
  const status = useSelector(selectStatus);

  const { sendAlert } = useContext(AlertContext);
  const dispatch = useAppDispatch();

  const addCard = (_card: ICard) => {
    sendAlert({
      status: AlertStatus.Success,
      message: 'New sock-card created!',
    });
  };

  const search = useCallback(
    (query: string) => {
      dispatch(seachCards(query));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    if (status.error) {
      sendAlert({
        status: AlertStatus.Error,
        message: status.error,
      });
    }
  }, [sendAlert, status]);

  return (
    <>
      <CardsContext.Provider
        value={{
          cards: cards || [],
          addCard,
          search,
          loading: status.loading,
          error: !!status.error,
        }}
      >
        {props.children}
      </CardsContext.Provider>
    </>
  );
};
