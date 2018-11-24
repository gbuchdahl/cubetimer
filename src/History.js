import React, { Component } from 'react';
import { formatTime } from './timeUtils'

export default class History extends Component {

    constructor(props){
        super();
        this.state = {
            times: [],
        }
    }

    render(){
        return(
            <div className='flex flex-column'>
                <p className='center fw6 f4'>History</p>
                <ol className='flex-wrap'>
                {this.state.times.map((time) => 
                    <li className='pv1'>{formatTime(time)}</li>)}
                </ol>
            </div>
        )
    }

}