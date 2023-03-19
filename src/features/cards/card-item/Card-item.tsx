import { Component } from 'react';
import { ICard } from '../../../models';
import classes from './Card-item.module.css';

type CardProps = {
  card: ICard;
};

class CardItem extends Component<CardProps> {
  render() {
    const card = this.props.card;
    return (
      <div className={classes.card}>
        <img className={classes.cardImage} src={card.imageUrl}></img>
        <h3 className={classes.title}>{card.name}</h3>
        <p className={classes.content}>{card.description}</p>
      </div>
    );
  }
}

export default CardItem;
