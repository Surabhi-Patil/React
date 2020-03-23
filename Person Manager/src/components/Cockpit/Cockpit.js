import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnref = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    //useEffect runs after everything is rendered
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        toggleBtnref.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work');
        }
    }, []);

    //will run for every update because there is no second argument
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] 2nd cleanup work');
        }
    });

    const assignedclasses = [];
    let btnClass = null;

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedclasses.push(classes.red); //classes = ['red'];
    }
    if (props.personsLength <= 1) {
        assignedclasses.push(classes.bold); //classes = ['red', 'bold'];
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedclasses.join(' ')}> This is really working!</p>
            {/* The statement below (onclick)  can be inefficient */}
            <button
                ref={toggleBtnref}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            {/* Try to use this -> <button onClick={this.switchNameHandler.bind(this, 'Sanjay Dnyaneshwar Patil')}>Switch Name</button> */}
            {/* <AuthContext.Consumer>
                {(context) => <button onClick={context.login}>Log In</button>}
            </AuthContext.Consumer> */}
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
};

export default React.memo(cockpit);