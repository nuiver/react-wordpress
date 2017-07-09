import React, { Component } from 'react';
import axios from 'axios';
import Event from './Event';

import './build/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting up initial state
    this.state = {
      events: 'initial'
    };
  }

  // calling the componentDidMount() method after a component is rendered for the first time
  componentWillMount() {
          console.log(this.props.source);

    this.serverRequest = axios.get(this.props.source).then(events => {
      this.setState({
        events: events
      });
    });
  }
  // calling the componentWillUnMount() method immediately before a component is unmounted from the DOM
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    if ( this.state.events !== 'initial' ) {
      var events = this.state.events.data;
      console.log(events);
      
      return (
        <div>
          <h1>Upcoming events</h1>
          {events.map(event => <Event key={event['id']} source={'http://dev.wordpress-react.com/?rest_route=/wp/v2/event/' + event['id']} />)}
        </div>
      )
    } else {
      return (
        <div>
          <h1>LET ME LOAD....</h1>
        </div>
      )
    }
  } 
}

export default App;
