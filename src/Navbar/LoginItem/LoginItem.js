import React from 'react';

import NavItem from '../NavItem';
import LoginDialog from './LoginDialog';

import { LoginContainer } from './style';

import { loginUser, registerUser } from '../../users';

export default class LoginItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
            isLoading: false,
        };
    }

    handleButton = () => {
        this.setState({
            showDialog: !this.state.showDialog
        })
    }

    handleLogin = (username, password, remember, register) => {
        this.setState({ isLoading: true });

        const payload = {
            username: username,
            password: password,
        };

        let name, callback;

        if (register) {
            name = 'register';
            callback = registerUser;
        } else {
            name = 'login';
            callback = loginUser;
        }

        console.log(`Attempting to ${name}: ${username}`);
        callback(
            payload,
            this.resolveLogin,
            this.rejectLogin,
            remember
        );
    }

    resolveLogin = (payload, remember) => {
        const { username, sessionToken } = payload;

        console.log('Logged in as ' + username);
        console.log('Session token is ' + sessionToken);

        this.setState({ isLoading: false });

        if (this.props.onLogin) {
            this.props.onLogin(payload, remember);
        }
    }

    rejectLogin = (msg) => {
        console.log('Logging failed: ' + msg);

        this.setState({ isLoading: false });

        if (this.props.onFail) {
            this.props.onFail(msg);
        }
    }

    render() {
        return (
            <LoginContainer>
                <NavItem
                    expanded={this.state.showDialog}
                    onClick={this.handleButton}
                >
                    Sign in
                </NavItem>
                <LoginDialog
                    visible={this.state.showDialog}
                    isLoading={this.state.isLoading}
                    onLogin={this.handleLogin}
                />
            </LoginContainer>
        )
    }

}
