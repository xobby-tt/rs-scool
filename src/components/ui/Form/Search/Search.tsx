import { useFormContext } from 'react-hook-form';
import { Input } from '../Input/Input';

type SearchProps = {
  placeholder?: string;
};

export const Search = (props: SearchProps) => {
  const { register } = useFormContext<{ searchText: string }>();

  return <Input icon="search" placeholder={props.placeholder} {...register('searchText')}></Input>;
};
