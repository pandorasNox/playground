
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Default as DefaultTheme } from './../themes';

const Index = () => (
    <DefaultTheme>
        <h1>Index / Home</h1>
        <Link to="/about">About</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/family">Family</Link>
        <br />
    </DefaultTheme>
);

export default Index;
