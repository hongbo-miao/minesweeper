import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import localForage from 'localforage';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';
// import { whyDidYouUpdate } from 'why-did-you-update';

import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducer';
import rootEpic from './epic';
import MyHome from './+home/components/home.component';
import { GameStatusEnum } from './+home/fixtures/';
import { startCountDown } from './+home/actions/';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';

import './+home/styles/board.css';
import './+home/styles/header.css';
import './+home/styles/home.css';
import './+home/styles/settings.css';
import './index.css';

const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic);
const routeMiddleware = routerMiddleware(history);

let middlewares = [
  routeMiddleware,
  epicMiddleware
];

// // debug log
// const logger = createLogger({
//   collapsed: true,
//   diff: true
// });
// middlewares = [...middlewares, logger];

// whyDidYouUpdate(React);

const config = {
  key: 'state',
  storage: localForage,
  whitelist: [
    'board',
    'gameStatus',
    'mineMap',
    'player',
    'settings',
    'timer'
  ]
};

const reducer = persistReducer(config, rootReducer);

export const store = createStore(
  reducer,

  // // debug log
  // composeWithDevTools(
    applyMiddleware(...middlewares)
  // )
);

const persistor = persistStore(store);

const onBeforeLift = () => {
  if (store.getState().gameStatus === GameStatusEnum.gaming) {
    store.dispatch(startCountDown());
  }
};

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      onBeforeLift={onBeforeLift}
      persistor={persistor}
    >
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={MyHome} />

          <Redirect to="/" />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
