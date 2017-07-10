import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './build/css/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();
