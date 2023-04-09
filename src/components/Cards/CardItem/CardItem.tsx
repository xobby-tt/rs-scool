import { Pokemon } from '@favware/graphql-pokemon';
import classes from './CardItem.module.css';

type CardProps = {
  card: Partial<Pokemon>;
};

export const CardItem = (props: CardProps) => {
  const card = props.card;

  return (
    <div className={classes.card}>
      <img className={classes.cardImage} src={card.sprite}></img>
      <h3 className={classes.title}>{card.key}</h3>
      <p className={classes.content}>{card.color}</p>
      <div className={classes.info}>
        {card.height ? <div>Height: {card.height}</div> : null}
        {card.weight ? <div>Weight: {card.weight}</div> : null}
      </div>
    </div>
  );
};
