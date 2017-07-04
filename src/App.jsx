import React, { Component } from 'react';
import axios from 'axios';
import logo from './assets/images/logo.svg';
import './build/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Setting up initial state
    this.state = {
      title: '',
      date: '',
      organizer: '',
      location: ''
    };
  }

  // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(event => {
      this.setState({
        title: event.data[this.props.event].title[0].value,
        date: event.data[this.props.event].field_date[0].value,
        organizer: event.data[this.props.event].field_location[0].value,
        location: event.data[this.props.event].field_organizer[0].value
      });
    });
  }
  // calling the componentWillUnMount() method immediately before a component is unmounted from the DOM
  componentWillUnmount() {
    this.serverRequest.abort();
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
          <h2 style={{ color: this.props.color }}>{this.state.title}</h2>
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

export default App;
