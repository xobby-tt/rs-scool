import { PropsWithChildren } from 'react';
import classes from './Label.module.css';

type LabelProps = {
  label: string;
  className?: string;
};

export const Label = (props: PropsWithChildren<LabelProps>) => {
  return (
    <>
      <label className={props.className}>
        <div className={classes.label}>{props.label}</div>
        {props.children}
      </label>
    </>
  );
};
