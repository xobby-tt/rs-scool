import { Component } from 'react';
import { CARDS } from '../../../mocks/cards.mock';
import CardItem from '../CardItem/CardItem';
import classes from './CardList.module.css';

class CardList extends Component {
  cards = CARDS;

  render() {
    return (
      <div className={classes.cardList}>
        {this.cards.map((card) => (
          <CardItem card={card} key={card.id}></CardItem>
        ))}
      </div>
    );
  }
}

export default CardList;
