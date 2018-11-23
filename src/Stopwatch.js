import React, { Component } from 'react';
import moment from 'moment';

export default class Stopwatch extends Component {


    constructor({running, runningTime}){
        super();
        this.state = {
            running,
            runningTime,
            startTime: null,
        }
        console.log(moment())
    }

    handleButton = () => {
        if (!this.state.running) {
            this.setState({startTime: Date.now()})
            this.timer = setInterval(
                () => this.setState({runningTime: Date.now() - this.state.startTime}), 10) 
        } else {
            console.log("STOP")
            clearInterval(this.timer)
        }
        this.setState({
            running: !this.state.running
        })
    }

    formattime = timeInMs => {
        var millis = this.padZeros((timeInMs / 10) % 100)
        var secs = this.padZeros((timeInMs/1000) % 60)
        var mins = parseInt((timeInMs / 60000) % 60);
        if (mins !== 0) {
            return mins + ':' + secs + '.' + millis;
        }else{
            return secs + '.' + millis
        }
    }

    padZeros = num => {
        let numStr = parseInt(num).toString();
        if (numStr.length < 2) {
            return "0" + numStr;
        }
        return numStr;
    }

    render(){

        return(

            <div className='flex flex-column justify-center'>
                <div className='ph6 pv4 f-headline center tracked-tight'>
                    {this.formattime(this.state.runningTime)}
                </div>
                <div className='pb3 center ph5'>
                    {this.state.running ? 
                    <button onClick={this.handleButton} className="bw0 grow br3 bg-red white fw5 f3 pv2 ph6">STOP</button>: 
                    <button onClick={this.handleButton} className="bw0 grow br3 bg-green white fw5 f3 pv2 ph6">START</button>}
                    
                </div>
            </div>


        )

    }
}
