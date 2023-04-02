import { createContext, PropsWithChildren, useState } from 'react';
import { IAlert } from '../../../../types';
import { Alert } from '../Alert';
import classes from './AlertHost.module.css';

export const AlertContext = createContext({
  alerts: [],
  sendAlert: (_alert: IAlert) => {},
});

export const AlertHost = (props: PropsWithChildren<object>) => {
  const [alerts, setAlerts] = useState<(IAlert & { key: number })[]>([]);

  const sendAlert = (alert: IAlert) => {
    setAlerts([...alerts, { key: Date.now(), ...alert }]);
  };

  const closeAlert = (alert: IAlert) => {
    setAlerts([...alerts.filter((alertItems) => alertItems !== alert)]);
  };

  return (
    <>
      <AlertContext.Provider value={{ alerts, sendAlert }}>{props.children}</AlertContext.Provider>

      <div className={classes.alerts}>
        {alerts.map((alert) => (
          <div key={alert.key} className={classes.alert}>
            <Alert alert={alert} close={closeAlert}></Alert>
          </div>
        ))}
      </div>
    </>
  );
};
