import React, { Component } from 'react';
import { formatTime } from './timeUtils'

export default class History extends Component {

    constructor({ times }) {
        super();
        this.state = {
            times
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ times: nextProps.times })
    }

    render() {

        let minTime = Math.min(...this.state.times)


        return (
            <div >
                <p className='title has-text-centered '>History</p>
                <ol id="time-container" className="mono">
                    {this.state.times.map((time) =>
                        <li className={(minTime === time) ? 'has-text-primary has-text-weight-bold is-size-4' : 'is-size-4 has-text-grey'}>{formatTime(time)}</li>)}
                </ol>
                <button onClick={this.props.clear} className="button is-danger is-fullwidth">RESET</button>
            </div>
        )
    }

}