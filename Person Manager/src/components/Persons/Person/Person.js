//functional component -> also referred as "presentational", "dumb" or "stateless" components

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    //Can be used from React 16 onwards
    constructor(props) {
        super(props); //Always add super when you have a constructor
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext; //only used in class based component

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[Person.js] rendering..');

        return (
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please Log In!</p>}
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type='text'
                    // ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}
                    onChange={this.props.changed}
                    value={this.props.name}></input>
            </Auxiliary>
        )
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

};

export default withClass(Person, classes.Person);



    //     const StyledDiv = styled.div`
    //     width: 60%;
    //     margin:16px auto;
    //     border: 1px solid #eee;
    //     box-shadow: 0 2px 3px, #ccc0;
    //     padding: 16px;
    //     text-align: center;

    //     @media (min-width: 500px) {
    //             width: 450px;
    //     }
    // }`;
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    // return [
    //     // <div className = 'Person' style = {style}>
    //     <p key="i1" onClick={this.props.click}>
    //         I'm {this.props.name} and I am {this.props.age} years old!
    //         </p>
    //     <p key="i2">{this.props.children}</p>
    //     <input
    //         key="i3"
    //         type='text'
    //         onChange={this.props.changed}
    //         value={this.props.name}>
    //     </input>
    // ];