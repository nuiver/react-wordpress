import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/images/logo.svg';

class EventDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      location: '',
      organizer: '',
      description: '',
    };
  }

  componentWillMount() {
    let url = String(this.props.source + this.props.match.params.eventId);
    this.serverRequest = axios.get(url).then(event => {
      console.log(event.data)
      this.setState({
        title: event.data.title.rendered.replace("&#8217;", "'"),
        date: event.data.acf.date,
        location: event.data.acf.location,
        organizer: event.data.acf.organizer,
        description: event.data.acf.description,
      });
    });
  }

  render() {
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.title}</h2>
        </div>
        <div>
          <h3>{this.state.date}</h3>
          <p>{this.state.location}</p>
          <p>{this.state.organizer}</p>
          {this.state.description}
        </div>
        <a href="/">Back to overview</a>
      </div>
    )
  }
}

export default EventDetail;
