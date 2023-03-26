import { Component } from 'react';
import { IAlert } from '../../../types';
import classes from './Alert.module.css';

type AlertProps = {
  alert: IAlert;
  close: (alert: IAlert) => void;
};

class Alert extends Component<AlertProps> {
  constructor(props: AlertProps) {
    super(props);
  }

  handleClose = () => {
    this.props.close(this.props.alert);
  };

  render() {
    const alert = this.props.alert;

    return (
      <div className={classes.alert} data-status={alert.status}>
        {alert.message}
        <button className={`${classes.close} material-symbols-outlined`} onClick={this.handleClose}>
          close
        </button>
      </div>
    );
  }
}

export default Alert;
