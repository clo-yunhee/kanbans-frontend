import React from 'react';

import LoginItem from '../LoginItem';
import LogoutItem from '../LogoutItem';

import {
    Container
} from './style';

import {
    getPersistedToken,
    storeToken,
    clearToken,
    reauthUser,
} from '../../users';

export default class NavRight extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false
        };
    }

    componentDidMount() {
        // re-log if the token is persisted
        const token = getPersistedToken();
        if (token === null) {
            return;
        }

        const payload = {
            sessionToken: token
        };

        reauthUser(payload, res => {
            if (!res.valid) {
                clearToken();
                return;
            }

            storeToken(res, true);
            this.setState({
                loggedIn: true
            });
        }, rej => {
            // fail silently if the token is invalid
            clearToken();
        });
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
