import React from 'react';

const validation = (props) => {
    const textLength = props.textLength;
    
    let message = 'Text is of the right length';

    if(textLength < 5){
        message = 'Text too short';
    }
    else if(textLength > 5) {
        message = 'Text too long'
    }
    return (
    <p>{message}</p>
    )
};

export default validation;