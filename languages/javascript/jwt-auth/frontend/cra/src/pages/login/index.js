
import React, { Component, Fragment } from 'react';
import { GlobalContext } from './../../contexts';
import { Link } from 'react-router-dom';

const Login = ({children}) => (
    <Fragment>
        <Link to="/" >Home</Link>
        <br />
        <Link to="/secret" >Secret</Link>
        <h1>Login</h1>
        {children}
        <GlobalContext.GlobalConsumer>
            {({login, logout, state: {isLoggedIn}}) => (
                <Fragment>
                    <button onClick={login}>Login</button>
                    <br />
                    <button onClick={logout}>Logout</button>
                    <br />
                    <span>isLoggedIn: {isLoggedIn ? 'yes' : 'no'}</span>
                </Fragment>
            )}
        </GlobalContext.GlobalConsumer>
    </Fragment>
);

export default Login;
