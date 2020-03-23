//class component -> also known as "containers", "smart" or "stateful" components.

import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Sanjay', age: 55},
      {name: 'Surabhi', age: 26},
      {name: 'Sujata', age: 53}
    ], 
    otherState: 'some other value'
  });

  const switchNameHandler = () => {
    //console.log('was clicked')
    //DON'T DO personsState: personsState.state.persons[0].name = "Sanjay Dnyaneshwar";
    setPersonsState({
      persons: [
      {name: 'Sanjay Dnyaneshwar Patil', age: 55},
      {name: 'Surabhi Sanjay Patil', age: 26},
      {name: 'Sujata Sanjay Patil', age: 53}
    ]
  } );
  };

    return (
      <div className="App">
        <h1>Hi, I am a react app </h1>
        <p>personsState is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age={personsState.state.persons[0].age}></Person>
        <Person name = {personsState.state.persons[1].name} age={personsState.state.persons[1].age}></Person>
        <Person name = {personsState.state.persons[2].name} age={personsState.state.persons[2].age}></Person>
        {/* <Person name="Surabhi" age="26"/>
        <Person name="Darshana" age="27">My hobbies: Racing</Person> */}
      </div>
    );
  }

export default app;

state = {
  persons: [
    {name: 'Sanjay', age: 55},
    {name: 'Surabhi', age: 26},
    {name: 'Sujata', age: 53}
  ], 
  otherState: 'some other value'
}



