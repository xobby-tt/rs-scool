import { IAlert } from '../../../types';
import classes from './Alert.module.css';

type AlertProps = {
  alert: IAlert;
  close: (alert: IAlert) => void;
};

export const Alert = (props: AlertProps) => {
  const handleClose = () => {
    props.close(props.alert);
  };

  return (
    <div className={classes.alert} data-status={props.alert.status}>
      {props.alert.message}
      <button className={`${classes.close} material-symbols-outlined`} onClick={handleClose}>
        close
      </button>
    </div>
  );
};
