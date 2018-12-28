import React from 'react';

import NavItem from '../NavItem';

import LoginItem from '../LoginItem';
import LogoutItem from '../LogoutItem';

import {
    Container
} from './style';

import { storeToken, clearToken } from '../../users';


export default class NavRight extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    handleLoggedIn = (payload, remember) => {
        storeToken(payload, remember);
        this.setState({
            loggedIn: true
        })
    }

    handleLoggedOut = () => {
        clearToken();
        this.setState({
            loggedIn: false
        })
    }

    renderLogin() {
        if (this.state.loggedIn) {
            return (
                <LogoutItem onLogout={this.handleLoggedOut} />
            )
        } else {
            // not logged in
            return (
                <LoginItem onLogin={this.handleLoggedIn} />
            )
        }
    }

    render() {
        return (
            <Container>
                {this.renderLogin()}
            </Container>
        )
    }

}
