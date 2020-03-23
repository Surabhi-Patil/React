// import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    // static getDerivedStateFromProps(props, state){
    //     console.log('[Persons.js] getDerivedStateFromProps');
    //     return state;
    // }

    //-----Not used anymore becasue it was easy to use it incorrectly
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps');
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     //You add some condition here comparing current props to the next props.
    //     if (nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //     }
    //     else {
    //         return false;
    //     }
    // }

    getSnapshotBeforeUpdate(pervProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    //-----Not used anymore becasue it was easy to use it incorrectly
    // componentWillUpdate(){

    // }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    //any code to be run right before the component is removed
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render() {
        console.log('[Persons.js] rendering..');

        return this.props.persons.map((person, index) => {
            return (<Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.props.changed(event, person.id)} />
            );
        });
    }
};

export default Persons;