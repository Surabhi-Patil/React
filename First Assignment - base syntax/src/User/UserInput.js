import React from 'react';

const input = (props) => {
    const style =  {
        border: '2px solid red'
      }

    return(
        <input type='text' style = {style} onChange={props.changed} value = {props.currentName}></input>
    );
}

export default input;