import { Component, PropsWithChildren } from 'react';
import Checkbox from '../Checkbox/Checkbox';
import classes from './InputCheckbox.module.css';

type InputCheckboxProps = {
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

class InputCheckbox extends Component<PropsWithChildren<InputCheckboxProps>> {
  render() {
    return (
      <label className={classes.checkbox}>
        <Checkbox inputRef={this.props.inputRef} name={this.props.name}></Checkbox>
        <span className={classes.checkbox__value}>{this.props.children}</span>
      </label>
    );
  }
}

export default InputCheckbox;
