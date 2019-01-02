import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import { Container } from './style';

import NavItem from '../NavItem';

const NavLink = (props) => (
    <NavItem
        as={Link}
        exact={true}
        activeClassName="nav-active"
        {...props}
    />
);


export default class NavLeft extends React.Component {

    render() {
        return (
            <Container>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/board/26d301d2-ff22-11e8-ac5d-42010a84008d">
                    Test Board
                </NavLink>

            </Container>
        )
    }

}
