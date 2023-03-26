import { Component, PropsWithChildren } from 'react';
import classes from './Label.module.css';

type LabelProps = {
  label: string;
  className?: string;
};

class Label extends Component<PropsWithChildren<LabelProps>> {
  render() {
    return (
      <>
        <label className={this.props.className}>
          <div className={classes.label}>{this.props.label}</div>
          {this.props.children}
        </label>
      </>
    );
  }
}

export default Label;
