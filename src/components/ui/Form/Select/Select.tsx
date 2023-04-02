import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import classes from './Select.module.css';

type SelectProps = {
  placeholder?: string;
  icon?: string;
  errorText?: string;
  options: string[];
};

export const Select = forwardRef(
  (props: SelectProps & UseFormRegisterReturn, ref: ForwardedRef<HTMLSelectElement>) => {
    return (
      <>
        <div className={classes.container} data-error={props.errorText || null}>
          <select
            className={classes.select}
            name={props.name}
            ref={ref}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
          >
            <option value="">None</option>

            {props.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <i className={`${classes.icon} material-symbols-outlined`}>expand_more</i>
        </div>
        {props.errorText ? <div className={classes.error}>{props.errorText}</div> : null}
      </>
    );
  }
);
