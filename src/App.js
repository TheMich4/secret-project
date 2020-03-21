// @flow

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainScreen, NavBar } from './displays';

import { Provider } from 'react-redux';
import React from 'react';
import configureStore from './store';
import logo from './logo.svg';

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <NavBar logo={logo} />
        <MainScreen />
      </div>
    </Provider>
  );
};

export default App;
