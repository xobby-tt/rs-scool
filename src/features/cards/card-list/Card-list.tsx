import { Component } from 'react';
import { CARDS } from '../../../mocks/cards.mock';
import CardItem from '../card-item/Card-item';
import classes from './Card-list.module.css';

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
