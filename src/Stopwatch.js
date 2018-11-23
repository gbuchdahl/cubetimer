import React, { Component } from 'react';

export default class Stopwatch extends Component {


    constructor({running, runningTime}){
        super();
        this.state = {
            running,
            runningTime,
        }
    }

    handleButton = () => {
        this.setState({
            running: !this.state.running
        })
    }

    handleKey = (event) => {
        console.log(event.keyCode)
        if (event.keyCode === 32) {
            this.setState({
                running: !this.state.running
            })
        }
    }

    render(){

        return(

            <div onKeyDown={this.handleKey} className='flex flex-column justify-center'>
                <div className='ph6 pv4 f-headline center'>
                    {this.state.runningTime}
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
