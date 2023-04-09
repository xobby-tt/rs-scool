import { useCallback, useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { CardList, CardsContext } from '../../components/Cards';
import { Loader } from '../../components/UI';
import { Search } from '../../components/UI/Form';
import classes from './Home.module.css';

export const Home = () => {
  const form = useForm({ defaultValues: { searchText: localStorage.getItem('search') || '' } });
  const getValues = form.getValues;
  const { cards, loading, search } = useContext(CardsContext);
  useEffect(() => {
    return () => {
      localStorage.setItem('search', getValues().searchText || '');
    };
  }, [getValues]);

  useEffect(() => {}, [search]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        search(getValues().searchText);
      }
    },
    [search, getValues]
  );

  return (
    <>
      <div className={classes.poster}>
        <div className={classes.input}>
          <h1 className={classes.searchHeader}>Don&apos;t be alone, find your pair</h1>
          <FormProvider {...form}>
            <div onKeyDown={handleKeyDown}>
              <Search placeholder="Find you love..."></Search>
            </div>
          </FormProvider>
        </div>
      </div>

      {loading ? (
        <div className={classes.loader}>
          <Loader></Loader>
        </div>
      ) : (
        <CardList cards={cards}></CardList>
      )}
    </>
  );
};
