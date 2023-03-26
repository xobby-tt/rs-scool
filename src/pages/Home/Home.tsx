import { Component } from 'react';
import { CardsContext } from '../../App';
import Search from '../../components/form/Search/Search';
import CardList from '../../features/cards/CardList/CardList';
import classes from './Home.module.css';

class Home extends Component {
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

export default Home;
