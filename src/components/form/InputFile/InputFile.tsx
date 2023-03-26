import { Component } from 'react';
import classes from './InputFile.module.css';

type InputFileProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  inputRef?: (ref: HTMLInputElement | null) => void;
};

class InputFile extends Component<InputFileProps> {
  constructor(props: InputFileProps) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={classes.inputWithIcon}>
          <input
            type="file"
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

export default InputFile;
