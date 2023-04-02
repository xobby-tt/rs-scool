import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './InputDate.module.css';

type InputDateProps = {
  placeholder?: string;
  icon?: string;
  errorText?: string;
};

export const InputDate = forwardRef(
  (props: InputDateProps & UseFormRegisterReturn, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className={classes.inputWithIcon}>
          <input
            type="date"
            className={classes.date}
            name={props.name}
            ref={ref}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
            data-error={props.errorText || null}
          />
          {props.icon && (
            <i className={`${classes.icon} material-symbols-outlined`}>{props.icon}</i>
          )}
        </div>
        {props.errorText ? <div className={classes.error}>{props.errorText}</div> : null}
      </>
    );
  }
);
