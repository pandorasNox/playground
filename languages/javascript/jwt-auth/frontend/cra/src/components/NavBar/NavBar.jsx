
import React from 'react';
import { Link } from 'react-router-dom'
import classnames from 'classnames';

export default ({className = ''}) => (
    <nav className={className + ' ' + classnames({mainHeaderNav:true})}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/login">Login</Link>
        <br />
        <Link to="/family">Family</Link>
        <br />
        <Link to="/secret">Secret</Link>
        <br />
    </nav>
);
