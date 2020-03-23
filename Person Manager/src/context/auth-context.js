import React from 'react';

//the values here don't really matter because you set the values where you use the AuthContext component.
const authContext = React.createContext({
    authenticated: false,
    login: () => { }
});

export default authContext;