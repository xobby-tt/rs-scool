import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './InputFile.module.css';

type InputFileProps = {
  placeholder?: string;
  icon?: string;
  errorText?: string;
};

export const InputFile = forwardRef(
  (props: InputFileProps & UseFormRegisterReturn, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <>
        <div className={classes.inputWithIcon}>
          <input
            type="file"
            className={classes.input}
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
