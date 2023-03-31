import { Component } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import classes from './Radio.module.css';

type RadioProps = {
  placeholder?: string;
  icon?: string;
  name?: string;
  errorText?: string;
  options: string[];
  inputRef?: (ref: HTMLInputElement | null) => void;
};

export class Radio extends Component<RadioProps> {
  constructor(props: RadioProps) {
    super(props);
  }

  render() {
    const hasError = !!this.props.errorText || null;

    return (
      <>
        {this.props.options.map((option) => {
          return (
            <label key={option} className={classes.radio}>
              <Checkbox
                type="radio"
                inputRef={this.props.inputRef}
                name={this.props.name}
                value={option}
                rounded={true}
                error={hasError}
              ></Checkbox>
              <span className={classes.radio__value}>{option}</span>
            </label>
          );
        })}

        {this.props.errorText ? <div className={classes.error}>{this.props.errorText}</div> : null}
      </>
    );
  }
}
