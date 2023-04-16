import { useCallback, useContext, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { CardList, CardsContext } from '../../components/Cards';
import { Loader } from '../../components/UI';
import { Search } from '../../components/UI/Form';
import { selectSearchQuery, setSearchQuery, useAppDispatch } from '../../store';
import classes from './Home.module.css';

export const SEARCH_LS_KEY = 'search';

export const Home = () => {
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useAppDispatch();

  const form = useForm({
    defaultValues: { searchText: searchQuery || '' },
  });
  const getValues = form.getValues;
  const { cards, loading, search } = useContext(CardsContext);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        search(getValues().searchText);
      }
    },
    [search, getValues]
  );

  useEffect(() => {
    if (getValues().searchText) {
      search(getValues().searchText);
    }

    return () => {
      dispatch(setSearchQuery(getValues().searchText || ''));
    };
  }, [dispatch, search, getValues]);

  useEffect(() => {}, [search]);

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
