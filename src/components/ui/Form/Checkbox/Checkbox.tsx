import classes from './Checkbox.module.css';

type CheckboxProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  value?: string;
  type?: string;
  rounded?: boolean;
  error?: boolean;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export const Checkbox = (props: CheckboxProps) => {
  return (
    <input
      className={classes.checkbox}
      name={props.name}
      type={props.type || 'checkbox'}
      data-rounded={props.rounded || null}
      data-error={props.error || null}
      ref={props.inputRef}
      value={props.value}
    ></input>
  );
};
