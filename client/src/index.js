import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import reducers from './config/unresolvedConfig-Redux-ReduxSaga/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/global.css';
import './assets/css/index.css';

const store = createStore(reducers);

// pass our store into our Provider
render(
    // Provider pass data into our App
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();