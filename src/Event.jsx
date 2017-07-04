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
      location: '',
      id: '',
    };
  }

  // calling the componentDidMount() method after a component is rendered for the first time
  componentDidMount() {
    this.serverRequest = axios.get(this.props.source).then(event => {
      this.setState({
        title: event.data[this.props.event].title.rendered.replace("&#8217;", "'"),
        date: event.data[this.props.event].acf.date,
        organizer: event.data[this.props.event].acf.organizer,
        location: event.data[this.props.event].acf.location,
        id: event.data[this.props.event].id
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

export default App;
