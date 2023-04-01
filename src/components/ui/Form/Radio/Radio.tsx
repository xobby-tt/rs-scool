import { Checkbox } from '../Checkbox/Checkbox';
import classes from './Radio.module.css';

type RadioProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  options: string[];
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const Radio = (props: RadioProps) => {
  const hasError = !!props.errorText || null;

  return (
    <>
      {props.options.map((option) => {
        return (
          <label key={option} className={classes.radio}>
            <Checkbox
              type="radio"
              inputRef={props.inputRef}
              name={props.name}
              value={option}
              rounded={true}
              error={hasError}
            ></Checkbox>
            <span className={classes.radio__value}>{option}</span>
          </label>
        );
      })}

      {props.errorText ? <div className={classes.error}>{props.errorText}</div> : null}
    </>
  );
};
