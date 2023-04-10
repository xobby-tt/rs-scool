import { Pokemon } from '@favware/graphql-pokemon';
import { useContext } from 'react';
import { CardItem } from '../CardItem/CardItem';
import { PopupContext } from '../CardPopup';
import classes from './CardList.module.css';

type CardListProps = {
  cards: Partial<Pokemon>[];
};

export const CardList = (props: CardListProps) => {
  const { openPopup } = useContext(PopupContext);

  return (
    <div role="cardList" className={classes.cardList}>
      {props.cards.map((card) => (
        <div key={card.key} onClick={() => openPopup(card)}>
          <CardItem card={card}></CardItem>
        </div>
      ))}
    </div>
  );
};
