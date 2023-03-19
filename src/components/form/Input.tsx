import { Component } from 'react';
import classes from './Input.module.css';

type InputProps = {
  value?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (text: string) => void;
};

type InputState = {
  value: string;
};

class Input extends Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = { value: props.value || '' };
  }

  handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    this.setState({ ...this.state, value: value });

    console.log('change');
    if (this.props.onChange) {
      console.log('push');

      this.props.onChange(value);
    }
  };

  render() {
    return (
      <div className={classes.inputWithIcon}>
        <input
          className={classes.input}
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder={this.props.placeholder}
        />
        {this.props.icon && (
          <i className={`${classes.icon} material-symbols-outlined`}>{this.props.icon}</i>
        )}
      </div>
    );
  }
}

export default Input;
