import classes from './Input.module.css';

type InputProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const Input = (props: InputProps) => {
  return (
    <>
      <div className={classes.inputWithIcon}>
        <input
          className={classes.input}
          name={props.name}
          ref={props.inputRef}
          placeholder={props.placeholder}
          data-error={props.errorText || null}
        />
        {props.icon && <i className={`${classes.icon} material-symbols-outlined`}>{props.icon}</i>}
      </div>
      {props.errorText ? <div className={classes.error}>{props.errorText}</div> : null}
    </>
  );
};
