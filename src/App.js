import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { history } from './_helpers/history';
import { createStore, applyMiddleware } from 'redux';
import { compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './_redux/_saga/fetchDataSaga';
import rootReducer from './_redux/reducers';

import ListItem from './_pages/ListItem';

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(
      sagaMiddleware,
      loggerMiddleware
  )
);
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <div>
            <Route path="/" component={ListItem}></Route>
          </div>
        </Router>     
      </Provider>
    )
;
  }
}

export default App;
