
import React, {Fragment} from 'react';
import { NavBar } from './../../components';

export default ({children}) => (
    <Fragment>
        <NavBar />
        {children}
    </Fragment>
);
