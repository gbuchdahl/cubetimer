import React, { Component } from 'react';
import { formatTime } from './timeUtils';

export default class Statistics extends Component {

    constructor({times}){
        super();
        this.state = {
            times,
            average: null,
            average35: null,

        }
    }

    componentWillReceiveProps(nextProps){
        const sum = arr => arr.reduce((a,b) => a + b, 0);
        const average = sum(nextProps.times) / nextProps.times.length
        let average35 = null;
        if (nextProps.times.length === 5) {
            average35 = ((sum(nextProps.times) - Math.max(...nextProps.times) - Math.min(...nextProps.times)) / (nextProps.times.length - 2))
        }
        this.setState({average, average35})
    }

    render(){
        return(
            <div className='flex flex-column ph3 pv1'>
                <p className='center fw6 f4 ph3'>Statistics</p>
                <p>Average:  
                    <span className='gray'> {this.state.average ? formatTime(this.state.average) : 'N/A'}</span>
                </p>
                <p>Average 3 of 5:  
                    <span className='gray'> {this.state.average35 ? formatTime(this.state.average35) : 'N/A'}</span>
                </p>
            </div>
        )
    }

}