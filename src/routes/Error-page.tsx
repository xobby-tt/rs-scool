import { Component } from 'react';

export default class ErrorPage extends Component {
  render() {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>404 Page not found</i>
        </p>
      </div>
    );
  }
}
