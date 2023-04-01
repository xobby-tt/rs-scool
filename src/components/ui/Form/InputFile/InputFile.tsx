import classes from './InputFile.module.css';

type InputFileProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const InputFile = (props: InputFileProps) => {
  return (
    <>
      <div className={classes.inputWithIcon}>
        <input
          type="file"
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
