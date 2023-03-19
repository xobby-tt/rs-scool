import { Component } from 'react';
import Search from '../../components/ui/Search/Search';
import CardList from '../../features/cards/card-list/Card-list';
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
        <CardList></CardList>
      </>
    );
  }
}

export default Home;
