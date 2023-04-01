import { PropsWithChildren } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import classes from './InputCheckbox.module.css';

type InputCheckboxProps = {
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const InputCheckbox = (props: PropsWithChildren<InputCheckboxProps>) => {
  return (
    <label className={classes.checkbox}>
      <Checkbox inputRef={props.inputRef} name={props.name}></Checkbox>
      <span className={classes.checkbox__value}>{props.children}</span>
    </label>
  );
};
