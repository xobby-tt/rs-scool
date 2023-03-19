import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './features/header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header></Header>
        <Outlet />
      </>
    );
  }
}

export default App;
