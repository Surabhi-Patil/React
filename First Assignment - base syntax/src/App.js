import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';

class App extends Component {

  state = {
    usernames: [
      {username1: 'Surabhi Patil'}
    ]
  };

  usernameChangeHandler = (event) =>{
    this.setState(
      {
        usernames: [
          {username1: event.target.value}
        ]
      }
    )
  }

  render() {
    const style =  {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <button style = {style} onClick = {this.usernameChangeHandler}>Change Username</button>
        <UserInput currentName = {this.state.usernames[0].username1} changed = {this.usernameChangeHandler}></UserInput>
        <UserOutput name = {this.state.usernames[0].username1}></UserOutput>
      </div>
    );
  }
}

export default App;
