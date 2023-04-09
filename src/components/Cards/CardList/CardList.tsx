import { Pokemon } from '@favware/graphql-pokemon';
import { CardItem } from '../CardItem/CardItem';
import classes from './CardList.module.css';

type CardListProps = {
  cards: Pokemon[];
};

export const CardList = (props: CardListProps) => {
  return (
    <div className={classes.cardList}>
      {props.cards.map((card) => (
        <CardItem card={card} key={card.key}></CardItem>
      ))}
    </div>
  );
};
