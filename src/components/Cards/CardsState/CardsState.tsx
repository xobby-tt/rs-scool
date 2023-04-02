import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { CARDS } from '../../../mocks/cards.mock';
import { AlertStatus, ICard } from '../../../types';
import { AlertContext } from '../../UI';

export const CardsContext = createContext({
  cards: CARDS,
  addCard: (_card: ICard) => {},
});

export const CardsState = (props: PropsWithChildren<object>) => {
  const [cards, setCards] = useState<ICard[]>(CARDS);
  const { sendAlert } = useContext(AlertContext);

  const addCard = (card: ICard) => {
    setCards([card, ...cards]);
    sendAlert({
      status: AlertStatus.Success,
      message: 'New sock-card created!',
    });
  };

  return (
    <>
      <CardsContext.Provider value={{ cards, addCard }}>{props.children}</CardsContext.Provider>
    </>
  );
};
