import { TabLink } from '../UI';
import classes from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <img src="src/assets/logo-sockinder.png" className={classes.logo}></img>
        <div className={classes.tabLinks}>
          <TabLink route={'/'}>Find your Love</TabLink>
          <TabLink route={'/card-form'}>Create pokemon</TabLink>
          <TabLink route={'/about'}>About us</TabLink>
        </div>
      </header>
    </>
  );
};
