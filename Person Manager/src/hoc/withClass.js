import React from 'react';

//first argument should start with a capital letter since its a reference to a component.
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
}

// const withClass = (props) => {
//     <div className={props.classes}>{props.children}</div>
// }

export default withClass;