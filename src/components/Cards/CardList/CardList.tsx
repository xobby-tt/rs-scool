import { ICard } from '../../../types';
import { CardItem } from '../CardItem/CardItem';
import classes from './CardList.module.css';

type CardListProps = {
  cards: ICard[];
};

export const CardList = (props: CardListProps) => {
  return (
    <div className={classes.cardList}>
      {props.cards.map((card) => (
        <CardItem card={card} key={card.id}></CardItem>
      ))}
    </div>
  );
};
