import React, { Component } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './App.css';
import Stopwatch from './Stopwatch';
import History from './History';
import Statistics from './Statistics';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      times: [],
      running: false,
    }
    this.handleSpace = this.handleSpace.bind(this);
  }


  boxclasses = "ba b--light-gray br3 shadow-4"

  timeAdder = time => {
    let newtimes = [...this.state.times, time];
    this.setState({times: newtimes});
  }

  handleSpace = e => {
    e.target.blur();
    if (e.keyCode === 32) {
      this.setState({running: !this.state.running})
    }
  }

  clearHistory = () => {
    this.setState({times: []})
  
  };

  render() {
    return (
      <div className="avenir">
      <KeyboardEventHandler
        handleKeys={['space']}
        onKeyEvent={(key, e) => this.handleSpace(e)} />
        <div className="flex vh-100 justify-around" onKeyDown={(e) => this.handleSpace(e)}>
          <div className='w-80'>
            <div className='flex flex-column items-center'>
              <p className="b f-headline">Cube Timer</p>
              <div className={this.boxclasses + ' w60'}>
                <Stopwatch running={this.state.running} runningTime={0} updateTimes={this.timeAdder}/>
              </div>
              <p className='gray pt2'>Press space to toggle clock</p>
            </div>
          </div>
          <div className='w-20 pa3 flex flex-column justify-around'>
            <div className={this.boxclasses + ' h5'}>
              <History clear={this.clearHistory} times={this.state.times}></History>
            </div>
            <div className={this.boxclasses + ' h5'}>
              <Statistics times={this.state.times}></Statistics>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;
