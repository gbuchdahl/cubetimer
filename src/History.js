import React, { Component } from 'react';
import { formatTime } from './timeUtils'

export default class History extends Component {

    constructor({times}){
        super();
        this.state = {
            times
        }
    }

    componentWillReceiveProps(nextProps){
        this.setState({times: nextProps.times})
    }

    render(){
        return(
            <div className='flex flex-column justify-around'>
                <div>
                    <p className='center fw6 f4 ph3'>History</p>
                    <ol className='flex-wrap'>
                    {this.state.times.map((time) => 
                        <li className='pv1 gray'>{formatTime(time)}</li>)}
                    </ol>
                </div>
                <button onClick={this.props.clear} className="bw0 grow br3 bg-orange white fw5 f3 center">RESET</button>
            </div>
        )
    }

}