import { Component } from 'react';
import TabLink from '../../components/ui/TabLink/TabLink';
import classes from './Header.module.css';

class Home extends Component {
  render() {
    return (
      <>
        <header className={classes.header}>
          <img src="src/assets/logo-sockinder.png" className={classes.logo}></img>
          <div className={classes.tabLinks}>
            <TabLink route={'/'}>Find your Love</TabLink>
            <TabLink route={'/card-form'}>Create a sock-card</TabLink>
            <TabLink route={'/about'}>About us</TabLink>
          </div>
        </header>
      </>
    );
  }
}

export default Home;
