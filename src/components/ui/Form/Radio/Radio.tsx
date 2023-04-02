import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Checkbox } from '../Checkbox/Checkbox';
import classes from './Radio.module.css';

type RadioProps = {
  placeholder?: string;
  icon?: string;
  errorText?: string;
  options: string[];
};

export const Radio = forwardRef(
  (props: RadioProps & UseFormRegisterReturn, ref: ForwardedRef<HTMLInputElement>) => {
    const hasError = !!props.errorText || null;

    return (
      <>
        {props.options.map((option) => {
          return (
            <label key={option} className={classes.radio}>
              <Checkbox
                type="radio"
                inputRef={ref}
                value={option}
                rounded={true}
                error={hasError}
                {...props}
              ></Checkbox>
              <span className={classes.radio__value}>{option}</span>
            </label>
          );
        })}

        {props.errorText ? <div className={classes.error}>{props.errorText}</div> : null}
      </>
    );
  }
);
