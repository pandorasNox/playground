
import React from 'react';
import classnames from 'classnames';

export default ({className = ''}) => (
    <nav className={className + ' ' + classnames({mainHeaderNav:true})}>
        Nav
    </nav>
);
