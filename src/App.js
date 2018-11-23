import React, { Component } from 'react';
import './App.css';
import Stopwatch from './Stopwatch';

class App extends Component {
  

  boxclasses = "ba b--light-gray br3 shadow-4 w-60"

  render() {
    return (
      <div className="Avenir">
        <div className="flex justify-center b f-headline">
          <p>Cube Timer</p>
        </div>
        <div className="flex justify-center">
          <div className={this.boxclasses}>
            <Stopwatch running={false} runningTime={0}/>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
