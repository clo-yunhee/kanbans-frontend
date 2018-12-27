import React from 'react';

import NavLeft from './NavLeft';
import NavCenter from './NavCenter';
import NavRight from './NavRight';

import { NavContainer } from './style';

export default class Navbar extends React.Component {

    render() {
        return (
            <NavContainer>
                <NavLeft />
                <NavCenter />
                <NavRight />
            </NavContainer>
        );
    }

}
