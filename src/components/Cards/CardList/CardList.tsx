import { Component } from 'react';
import { ICard } from '../../../types';
import CardItem from '../CardItem/CardItem';
import classes from './CardList.module.css';

type CardListProps = {
  cards: ICard[];
};

class CardList extends Component<CardListProps> {
  render() {
    return (
      <div className={classes.cardList}>
        {this.props.cards.map((card) => (
          <CardItem card={card} key={card.id}></CardItem>
        ))}
      </div>
    );
  }
}

export default CardList;
