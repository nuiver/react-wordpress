import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './build/css/index.css';

ReactDOM.render(
  <App source="http://dev.wordpress-react.com/?rest_route=/wp/v2/event" event="0"/>,
  document.getElementById('first')
);
ReactDOM.render(
  <App source="http://dev.wordpress-react.com/?rest_route=/wp/v2/event" event="1"/>,
  document.getElementById('second')
);
registerServiceWorker();
