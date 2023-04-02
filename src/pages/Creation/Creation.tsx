import { useContext, useState } from 'react';
import { CardForm, CardList, CardsContext } from '../../components/Cards';
import { ICard } from '../../types';
import classes from './Creation.module.css';

export const Creation = () => {
  const [newCards, setNewCards] = useState([]);
  const { addCard } = useContext(CardsContext);

  const handleCreateCard = (card: ICard) => {
    setNewCards([...newCards, card]);
    addCard(card);
  };

  return (
    <>
      <div className={classes.formContainer}>
        <h1 className={classes.title}>Create a sock-card</h1>
        <div className={classes.creationForm}>
          <CardForm createCard={handleCreateCard}></CardForm>
        </div>
      </div>

      <div className={classes.cardList}>
        <h2>New cards</h2>
        {newCards.length ? (
          <CardList cards={newCards}></CardList>
        ) : (
          <div className={classes.emptyList}>
            <span className={`${classes.emptyList__icon} material-symbols-outlined`}>
              heart_broken
            </span>
            <p>The list is empty, add some cards...</p>
          </div>
        )}
      </div>
    </>
  );
};
