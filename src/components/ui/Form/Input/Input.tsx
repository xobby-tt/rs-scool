import { Component } from 'react';
import classes from './Input.module.css';

type InputProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={classes.inputWithIcon}>
          <input
            className={classes.input}
            name={this.props.name}
            ref={this.props.inputRef}
            placeholder={this.props.placeholder}
            data-error={this.props.errorText || null}
          />
          {this.props.icon && (
            <i className={`${classes.icon} material-symbols-outlined`}>{this.props.icon}</i>
          )}
        </div>
        {this.props.errorText ? <div className={classes.error}>{this.props.errorText}</div> : null}
      </>
    );
  }
}
