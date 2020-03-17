import React from 'react';
import './User.css';

const output = (props) => {
    return (
        <div className = 'User'>
            <p>This is the first paragraph of output component: {props.name}</p>
            <p>This is the second paragraph of output component: {props.name}</p>
        </div>

    );
}

export default output;