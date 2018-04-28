
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Index = () => (
    <Fragment>
        <h1>Index / Home</h1>
        <Link to="/about">About</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/family">Family</Link>
        <br />
    </Fragment>
);

export default Index;
