import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './features/Header/Header';

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
