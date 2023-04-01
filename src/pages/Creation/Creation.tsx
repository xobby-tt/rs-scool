import { Component } from 'react';
import { CardForm, CardList, CardsContext } from '../../components/Cards';
import { ICard } from '../../types';
import classes from './Creation.module.css';

type CreationState = {
  newCards: ICard[];
};

export class Creation extends Component<object, CreationState> {
  constructor(props: object) {
    super(props);

    this.state = {
      newCards: [],
    };
  }

  handleCreateCard = (card: ICard, updateContextCards: (card: ICard) => void) => {
    this.setState(({ newCards }) => ({ newCards: [...newCards, card] }));

    updateContextCards(card);
  };

  render() {
    return (
      <>
        <CardsContext.Consumer>
          {({ addCard }) => (
            <div className={classes.formContainer}>
              <h1 className={classes.title}>Create a sock-card</h1>
              <div className={classes.creationForm}>
                <CardForm createCard={(card) => this.handleCreateCard(card, addCard)}></CardForm>
              </div>
            </div>
          )}
        </CardsContext.Consumer>

        <div className={classes.cardList}>
          <h2>New cards</h2>
          {this.state.newCards.length ? (
            <CardList cards={this.state.newCards}></CardList>
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
  }
}

export default Creation;
