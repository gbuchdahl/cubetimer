import React from 'react';

const Box = (props) => {
    return (
        <div className="columns is-mobile">
            <div className="column"></div>
            <div className='box column is-four-fifths'>
                {props.children}
            </div>
            <div className="column"></div>
        </div>
    )
}

export default Box
