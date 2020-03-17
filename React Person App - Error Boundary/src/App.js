//class component -> also known as "containers", "smart" or "stateful" components.

import React, { Component } from 'react';
//import styled from 'styled-components';

import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red': 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {

  state = {
    persons: [
      { id: 'abc', name: 'Sanjay', age: 55 },
      { id: 'def', name: 'Surabhi', age: 26 },
      { id: 'ghi', name: 'Sujata', age: 53 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };

    //Alternative way
    //const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event => this.nameChangedHandler(event, person.id))} />
            </ErrorBoundary>
          })}
        </div>);

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
      btnClass = classes.Red;

    };

    let assignedclasses = [];
    if (this.state.persons.length <= 2) {
      assignedclasses.push(classes.red); //classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      assignedclasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I am a react app </h1>
        <p className={assignedclasses.join(' ')}> This is really working!</p>
        {/* The statement below (onclick)  can be inefficient */}
        <button className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {/* Try to use this -> <button onClick={this.switchNameHandler.bind(this, 'Sanjay Dnyaneshwar Patil')}>Switch Name</button> */}
        {persons}
        {/* <Person name="Surabhi" age="26"/>
        <Person name="Darshana" age="27">My hobbies: Racing</Person> */}
      </div>
    );
  }
}

export default App;
