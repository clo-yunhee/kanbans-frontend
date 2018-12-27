import React from 'react';

import NavItem from '../NavItem';
import LoginDialog from '../LoginDialog';

import { LoginContainer } from './style';

export default class LoginButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDialog: false,
        };
    }

    handleButton = () => {
        this.setState({
            showDialog: !this.state.showDialog
        })
    }

    handleLogin = (username, password, remember) => {
        alert('Signing in ' + username);
    }

    handleRegister = (username, password, remember) => {
        alert('Signing up ' + username);
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
                    onLogin={this.handleLogin}
                    onRegister={this.handleRegister}
                />
            </LoginContainer>
        )
    }

}
