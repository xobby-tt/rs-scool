import classes from './Select.module.css';

type SelectProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  options: string[];
  selectRef?: (ref: HTMLSelectElement | null) => void;
};

export const Select = (props: SelectProps) => {
  return (
    <>
      <div className={classes.container} data-error={props.errorText || null}>
        <select
          className={classes.select}
          name={props.name}
          ref={props.selectRef}
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
};
