import { Component } from 'react';
import { CardsContext } from '../../App';
import CardList from '../../components/Cards/CardList/CardList';
import { Search } from '../../components/UI/Form';
import classes from './Home.module.css';

export class Home extends Component {
  render() {
    return (
      <>
        <div className={classes.poster}>
          <div className={classes.input}>
            <h1 className={classes.searchHeader}>Don&apos;t be alone, find your pair</h1>
            <Search placeholder="Find you love..."></Search>
          </div>
        </div>
        <CardsContext.Consumer>
          {({ cards }) => <CardList cards={cards}></CardList>}
        </CardsContext.Consumer>
      </>
    );
  }
}
