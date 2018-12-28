import React from 'react';

import NavItem from '../NavItem';
import LoadingWheel from '../../LoadingWheel';

import { LogoutContainer } from './style';

import { logoutUser, getToken, getUsername } from '../../users';

export default class LogoutItem extends React.Component {

    handleLogout = () => {
        const payload = {
            sessionToken: getToken(),
        };

        console.log(`Attempting to logout`);
        logoutUser(
            payload,
            this.resolveLogout,
            this.rejectLogout
        );
    }

    resolveLogout = () => {
        console.log('Logged out');

        if (this.props.onLogout) {
            this.props.onLogout();
        }
    }

    rejectLogout = (msg) => {
        console.log('Logout failed: ' + msg);

        if (this.props.onFail) {
            this.props.onFail(msg);
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavItem noPointer>
                    Logged in as {getUsername()}
                </NavItem>
                <NavItem onClick={this.handleLogout}>
                    Sign out
                    <LoadingWheel />
                </NavItem>
            </React.Fragment>
        )
    }

}
