import classes from './InputDate.module.css';

type InputDateProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const InputDate = (props: InputDateProps) => {
  return (
    <>
      <div className={classes.inputWithIcon}>
        <input
          type="date"
          className={classes.date}
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
