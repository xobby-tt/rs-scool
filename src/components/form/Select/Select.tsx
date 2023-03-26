import { Component } from 'react';
import classes from './Select.module.css';

type SelectProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  options: string[];
  selectRef?: (ref: HTMLSelectElement | null) => void;
};

class Select extends Component<SelectProps> {
  constructor(props: SelectProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={classes.container} data-error={this.props.errorText || null}>
          <select
            className={classes.select}
            name={this.props.name}
            ref={this.props.selectRef}
            placeholder={this.props.placeholder}
          >
            <option value="">None</option>

            {this.props.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <i className={`${classes.icon} material-symbols-outlined`}>expand_more</i>
        </div>
        {this.props.errorText ? <div className={classes.error}>{this.props.errorText}</div> : null}
      </>
    );
  }
}

export default Select;
