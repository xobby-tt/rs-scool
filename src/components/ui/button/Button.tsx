import { Component, PropsWithChildren } from 'react';
import classes from './Button.module.css';

enum Size {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

type ButtonProps = {
  size?: Size;
};

class Button extends Component<PropsWithChildren<ButtonProps>> {
  constructor(props: PropsWithChildren<ButtonProps>) {
    super(props);
  }
  render() {
    return (
      <button className={classes.button} data-size={this.props.size || Size.S}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
