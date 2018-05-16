import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// main app
import App from './containers/App';

ReactDOM.render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('app'))