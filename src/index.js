import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';
import { ConfigureStore } from './redux/configureStore';

import './index.css';
import 'tachyons';

import Main from './components/MainComponent';

const store = ConfigureStore();

ReactDOM.render(<Provider store={ store }><Main/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
