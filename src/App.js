import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import Stopwatch from './Stopwatch';
import History from './History';
import Statistics from './Statistics';
import Box from './Box';


class App extends Component {

  constructor() {
    super();
    this.state = {
      times: [],
      running: false,
    }
    this.handleSpace = this.handleSpace.bind(this);
  }

  timeAdder = time => {
    let newtimes = [...this.state.times, time];
    this.setState({ times: newtimes });
  }

  handleSpace = e => {
    e.target.blur();
    if (e.keyCode === 32) {
      this.setState({ running: !this.state.running })
    }
    if (e.keyCode === 82) {
      this.clearHistory()
    }
  }

  clearHistory = () => {
    this.setState({ times: [] })
  };

  render() {
    return (

      <div className="tile is-ancestor avenir" style={{ marginTop: 36 + 'px' }} onKeyDown={(e) => this.handleSpace(e)}>
        <KeyboardEventHandler
          handleKeys={['space', 'r']}
          onKeyEvent={(key, e) => this.handleSpace(e)} />
        <div className='tile is-parent is-8 is-12-mobile'>
          <div className="tile is-child has-text-centered">
            <p id='page-title' className="title has-text-weight-bold">Cube Timer</p>
            <Box style={{ minHeight: 300 + 'px' }}>
              <Stopwatch running={this.state.running} runningTime={0} updateTimes={this.timeAdder} />
            </Box>
            <p className='has-text-grey'>Press space to {this.state.running ? 'stop' : 'start'} clock, r to reset history</p>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <div className='tile is-child'>
            <Box>
              <History clear={this.clearHistory} times={this.state.times}></History>
            </Box>
          </div>
          <div className='tile is-child'>
            <Box>
              <Statistics times={this.state.times}></Statistics>
            </Box>
          </div>
        </div>
      </div >


    );
  }
}

export default App;
