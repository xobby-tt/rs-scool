import { Component } from 'react';
import { ICard } from '../../../types';
import classes from './CardItem.module.css';

type CardProps = {
  card: ICard;
};

class CardItem extends Component<CardProps> {
  render() {
    const card = this.props.card;
    const hasBirthdate = card.isBirthDateVisible && card.birthdate;

    return (
      <div className={classes.card}>
        <img className={classes.cardImage} src={card.imageUrl}></img>
        <h3 className={classes.title}>{card.name}</h3>
        <p className={classes.content}>{card.description}</p>
        <div className={classes.info}>
          {hasBirthdate ? <div>Birthdate: {card.birthdate}</div> : null}
          {card.profession ? <div>Profession: {card.profession}</div> : null}
        </div>
      </div>
    );
  }
}

export default CardItem;
