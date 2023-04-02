import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '../Input/Input';

type SearchProps = {
  placeholder?: string;
};

export const Search = (props: SearchProps) => {
  const { register, getValues } = useFormContext<{ searchText: string }>();

  useEffect(() => {
    return () => {
      localStorage.setItem('search', getValues().searchText || '');
    };
  }, [getValues]);

  return <Input icon="search" placeholder={props.placeholder} {...register('searchText')}></Input>;
};
