import { FormProvider, useForm } from 'react-hook-form';
import { CardList, CardsContext } from '../../components/Cards';
import { Search } from '../../components/UI/Form';
import classes from './Home.module.css';

export const Home = () => {
  const methods = useForm({ defaultValues: { searchText: localStorage.getItem('search') || '' } });

  return (
    <>
      <div className={classes.poster}>
        <div className={classes.input}>
          <h1 className={classes.searchHeader}>Don&apos;t be alone, find your pair</h1>
          <FormProvider {...methods}>
            <Search placeholder="Find you love..."></Search>
          </FormProvider>
        </div>
      </div>
      <CardsContext.Consumer>
        {({ cards }) => <CardList cards={cards}></CardList>}
      </CardsContext.Consumer>
    </>
  );
};
