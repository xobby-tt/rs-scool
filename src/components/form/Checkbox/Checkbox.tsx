import { Component } from 'react';
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

class Checkbox extends Component<CheckboxProps> {
  constructor(props: CheckboxProps) {
    super(props);
  }

  render() {
    return (
      <input
        className={classes.checkbox}
        name={this.props.name}
        type={this.props.type || 'checkbox'}
        data-rounded={this.props.rounded || null}
        data-error={this.props.error || null}
        ref={this.props.inputRef}
        value={this.props.value}
      ></input>
    );
  }
}

export default Checkbox;
