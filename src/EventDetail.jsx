import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/images/logo.svg';
import glamorous from 'glamorous';

const EventDetailWrapper = glamorous.div({
  backgroundColor: 'white',
  color: 'tomato'
});

const EventHeader = glamorous.div({
  backgroundColor: 'tomato'
});

class EventDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      date: '',
      location: '',
      organizer: '',
      description: ''
    };
  }

  componentWillMount() {
    let url = String(this.props.source + this.props.match.params.eventId);
    this.serverRequest = axios.get(url).then(event => {
      console.log(event.data);
      this.setState({
        title: event.data.title.rendered.replace('&#8217;', "'"),
        date: event.data.acf.date,
        location: event.data.acf.location,
        organizer: event.data.acf.organizer,
        description: event.data.acf.description
      });
    });
  }

  render() {
    return (
      <EventDetailWrapper className="App">
        <EventHeader className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>
            {this.state.title}
          </h2>
        </EventHeader>
        <div>
          <h3>
            {this.state.date}
          </h3>
          <p>
            {this.state.location}
          </p>
          <p>
            {this.state.organizer}
          </p>
          {this.state.description}
        </div>
        <div className="App-button">
          <a href="/">Back to overview</a>
        </div>
      </EventDetailWrapper>
    );
  }
}

export default EventDetail;
