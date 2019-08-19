import React, { Component } from 'react';
import moment from 'moment';
import { formatTime } from './timeUtils'

export default class Stopwatch extends Component {


    constructor({ running, runningTime }) {
        super();
        this.state = {
            running,
            runningTime,
            startTime: null,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.running !== this.state.running) {
            this.handleButton()
        }
    }

    handleButton = () => {
        if (!this.state.running) {
            this.setState({ startTime: Date.now() })
            this.timer = setInterval(
                () => this.setState({ runningTime: Date.now() - this.state.startTime }), 10)
        } else {
            clearInterval(this.timer)
            this.props.updateTimes(this.state.runningTime)
        }
        this.setState({
            running: !this.state.running
        })
    }

    render() {

        return (

            <div >
                <div id='time' className='mono is-1 title'>
                    {formatTime(this.state.runningTime)}
                </div>
                <div>
                    {this.state.running ?
                        <button onClick={this.handleButton} className="button is-danger is-fullwidth is-large">STOP</button> :
                        <button onClick={this.handleButton} className="button is-primary is-fullwidth is-large">START</button>}

                </div>
            </div >


        )

    }
}
