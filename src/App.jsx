import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import EventDetail from './EventDetail';

import './build/css/App.css';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <PropsRoute exact path="/" component={Landing} source="http://dev.wordpress-react.com/?rest_route=/wp/v2/event" />
            <PropsRoute path="/item/:eventId" source="http://dev.wordpress-react.com/?rest_route=/wp/v2/event/" component={EventDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  } 
}

export default App;
