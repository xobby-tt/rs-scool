import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './Checkbox.module.css';

type CheckboxProps = {
  placeholder?: string;
  icon?: string;
  value?: string;
  type?: string;
  rounded?: boolean;
  inputRef: ForwardedRef<HTMLInputElement>;
  error?: boolean;
};

export const Checkbox = (props: CheckboxProps & Partial<UseFormRegisterReturn>) => {
  return (
    <input
      className={classes.checkbox}
      name={props.name}
      type={props.type || 'checkbox'}
      data-rounded={props.rounded || null}
      data-error={props.error || null}
      onChange={props.onChange}
      onBlur={props.onBlur}
      ref={props.inputRef}
      value={props.value}
    ></input>
  );
};
