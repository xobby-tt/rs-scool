import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox } from '../Checkbox/Checkbox';
import classes from './InputCheckbox.module.css';

type InputCheckboxProps = {
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const InputCheckbox = forwardRef(
  (
    props: PropsWithChildren<InputCheckboxProps> & UseFormRegisterReturn,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={classes.checkbox}>
        <Checkbox
          inputRef={ref}
          onChange={props.onChange}
          onBlur={props.onBlur}
          name={props.name}
          value={'true'}
        ></Checkbox>
        <span className={classes.checkbox__value}>{props.children}</span>
      </label>
    );
  }
);
