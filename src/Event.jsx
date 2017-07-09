import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
import { string, number } from 'prop-types';

import './build/css/App.css';

class Event extends Component {
  constructor(props) {
    super(props);
    // Setting up initial state
    this.state = {
      title: this.props.title.rendered.replace("&#8217;", "'"),
      date: this.props.acf.date,
      organizer: this.props.acf.organizer,
      location: this.props.acf.location,
      id: this.props.id,
    };
  }

  render() {
    let printdate;
    let cdate = new Date(this.state.date).toDateString();
    if (cdate !== 'Invalid date') {
      printdate = <p className="App-intro">{cdate}</p>;
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a href={"http://dev.wordpress-react.com/?page_id="+ this.state.id } className="App__title"><h2>{this.state.title}</h2></a>
        </div>
        {printdate}
        <p className="App-intro">
          {this.state.organizer}
        </p>
        <p className="App-intro">
          {this.state.location}
        </p>
      </div>
    );
  }
}

Event.propTypes = {
    title: string.isRequired,
    date: string.isRequired,
    organizer: string.isRequired,
    location: string.isRequired,
    id: number.isRequired,
};

export default Event;
