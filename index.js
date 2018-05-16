import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'

// main app
import App from './containers/App';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('app'))