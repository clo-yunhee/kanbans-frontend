import React from 'react';

import LoginItem from '../LoginItem';
import LogoutItem from '../LogoutItem';

import {
    Container
} from './style';

import {
    isLoggedIn,
    storeToken,
    clearToken,
} from '../../users';

export default class NavRight extends React.Component {

    handleLoggedIn = (payload, remember) => {
        storeToken(payload, remember);
    }

    handleLoggedOut = () => {
        clearToken();
    }

    renderLogin() {
        if (isLoggedIn()) {
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
