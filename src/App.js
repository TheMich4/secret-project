// @flow

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store';
import logo from './logo.svg';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            rel="noopener noreferrer"
            target="_blank">
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
}

export default App;
