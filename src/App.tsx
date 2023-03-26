import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './features/Header/Header';
import { CARDS } from './mocks/cards.mock';
import { AlertStatus, IAlert, ICard } from './types';
import classes from './App.module.css';
import Alert from './components/ui/Alert/Alert';

export const CardsContext = React.createContext({
  cards: CARDS,
  addCard: (card: ICard) => {},
});

export const AlertContext = React.createContext({
  alerts: [],
  sendAlert: (alert: IAlert) => {},
});

type AppState = {
  cards: ICard[];
  addCard: (card: ICard) => void;
  alerts: (IAlert & { dateKey: number })[];
  sendAlert: (alert: IAlert) => void;
};

class App extends Component<object, AppState> {
  constructor(props: object) {
    super(props);

    this.state = {
      cards: CARDS,
      addCard: this.addCard,
      alerts: [],
      sendAlert: this.sendAlert,
    };
  }

  addCard = (card: ICard) => {
    this.setState((state) => ({
      cards: [card, ...state.cards],
    }));
    this.sendAlert({
      status: AlertStatus.Success,
      message: 'New sock-card created!',
    });
  };

  sendAlert = (alert: IAlert) => {
    this.setState((state) => ({
      alerts: [...state.alerts, { dateKey: Date.now(), ...alert }],
    }));
  };

  closeAlert = (alert: IAlert) => {
    this.setState((state) => ({
      ...this.state,
      alerts: state.alerts.filter((alertItems) => alertItems !== alert),
    }));
  };

  render() {
    return (
      <>
        <Header></Header>

        <AlertContext.Provider value={this.state}>
          <CardsContext.Provider value={this.state}>
            <Outlet />
          </CardsContext.Provider>
        </AlertContext.Provider>

        <div className={classes.alerts}>
          {this.state.alerts.map((alert) => (
            <div key={alert.dateKey} className={classes.alert}>
              <Alert alert={alert} close={this.closeAlert}></Alert>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
