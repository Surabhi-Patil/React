//class component -> also known as "containers", "smart" or "stateful" components.

import React, { Component } from 'react';
//import styled from 'styled-components';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Auxiliary from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';
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

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    // this.state = {
    //   persons: [
    //     { id: 'abc', name: 'Sanjay', age: 55 },
    //     { id: 'def', name: 'Surabhi', age: 26 },
    //     { id: 'ghi', name: 'Sujata', age: 53 }
    //   ],
    //   otherState: 'some other value',
    //   showPersons: false
    // }
  }

  state = {
    persons: [
      { id: 'abc', name: 'Sanjay', age: 55 },
      { id: 'def', name: 'Surabhi', age: 26 },
      { id: 'ghi', name: 'Sujata', age: 53 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('[App.js] shouldComponentUpdate');
    return true; //default=true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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

    //To prevent unexpected states, use this format (setState is synchronous and not guaranteed to run immediately)
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      };
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

  loginHandler = () => {
    this.setState({
      authenticated: true
    });
  }

  render() {

    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated} />;
    };

    return (
      // <WithClass classes={classes.App}>
      <Auxiliary>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>
          Remove Cockpit
          </button>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler
        }}>
          {this.state.showCockpit ? (<Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
            login={this.loginHandler} />) : null}
          {persons}
        </AuthContext.Provider>
      </Auxiliary>
      // </WithClass>
    );
  }
}

export default withClass(App, classes.App);
