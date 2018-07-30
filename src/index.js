import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import MainLayout from './layouts/MainLayout';
import Login from './components/Login'
// import userReducer from './reducers/userReducer'
import reducer from './reducers/reducers'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(userReducer)
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={MainLayout} />
        </Switch>
    </Router>
    </Provider>,
    document.getElementById("root")
  );
registerServiceWorker();
