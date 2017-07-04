import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './build/css/index.css';

ReactDOM.render(
  <App source="http://dev.drupalreact.com/api/events" event="0"/>,
  document.getElementById('first')
);
ReactDOM.render(
  <App source="http://dev.drupalreact.com/api/events" event="1" color="tomato" />,
  document.getElementById('second')
);
registerServiceWorker();
