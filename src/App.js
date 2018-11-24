import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch';
import History from './History';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      times: [21, 21, 3010],
    }
  }

  boxclasses = "ba b--light-gray br3 shadow-4"

  timeAdder = time => {
    let newtimes = [...this.state.times, time];
    this.setState({times: newtimes});

  }

  render() {
    return (
      <div className="avenir h-100">
        <div className="flex justify-around">
          <div className='w-80'>
            <div className='flex flex-column items-center'>
              <p className="b f-headline">Cube Timer</p>
              <div className={this.boxclasses + ' w60'}>
                <Stopwatch running={false} runningTime={0} updateTimes={this.timeAdder}/>
              </div>
              <p className='gray pt2'>Press space to toggle clock</p>
            </div>
          </div>
          <div className='w-20 pa3'>
            <div className={this.boxclasses + ' h-50'}>
              <History times={this.state.times}></History>
            </div>
          </div>
        </div>
        
      </div>
      
    );
  }
}

export default App;
