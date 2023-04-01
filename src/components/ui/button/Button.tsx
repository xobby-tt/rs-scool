import { PropsWithChildren } from 'react';
import classes from './Button.module.css';

export enum Size {
  XS = 'xs',
  S = 's',
  M = 'm',
  L = 'l',
}

type ButtonProps = {
  size?: Size;
  type?: 'button' | 'submit' | 'reset';
};

export const Button = (props: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={classes.button} type={props.type} data-size={props.size || Size.S}>
      {props.children}
    </button>
  );
};
