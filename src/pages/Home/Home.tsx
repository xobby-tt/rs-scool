import { useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CardList, CardsContext } from '../../components/Cards';
import { Search } from '../../components/UI/Form';
import classes from './Home.module.css';

export const Home = () => {
  const form = useForm({ defaultValues: { searchText: localStorage.getItem('search') || '' } });
  const getValues = form.getValues;
  const watchSearchText = form.watch('searchText');
  const { cards, search } = useContext(CardsContext);
  useEffect(() => {
    return () => {
      localStorage.setItem('search', getValues().searchText || '');
    };
  }, [getValues]);

  useEffect(() => {
    search(watchSearchText);
  }, [search, watchSearchText]);

  return (
    <>
      <div className={classes.poster}>
        <div className={classes.input}>
          <h1 className={classes.searchHeader}>Don&apos;t be alone, find your pair</h1>
          <FormProvider {...form}>
            <Search placeholder="Find you love..."></Search>
          </FormProvider>
        </div>
      </div>
      <CardList cards={cards}></CardList>
    </>
  );
};
