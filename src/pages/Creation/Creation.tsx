import { Pokemon } from '@favware/graphql-pokemon';
import { useSelector } from 'react-redux';
import { CardForm, CardList } from '../../components/Cards';
import { useAppDispatch } from '../../store';
import { addNewCard, selectNewCards } from '../../store/new-cards-slice';
import classes from './Creation.module.css';

export const Creation = () => {
  // const [newCards, setNewCards] = useState([]);

  const newCards = useSelector(selectNewCards);

  const dispatch = useAppDispatch();

  const handleCreateCard = (card: Partial<Pokemon>) => {
    dispatch(addNewCard(card));
  };

  return (
    <>
      <div className={classes.formContainer}>
        <h1 className={classes.title}>Create pokemon</h1>
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
