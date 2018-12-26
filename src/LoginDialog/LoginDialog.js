import React from 'react';

import {
    Form, FormFooter,
    InputUsername,
    InputPassword,
    RememberLabel,
    InputRemember,
    InputSubmit
} from './style';

const handleChange = (name) => {
    return function(e) {
        this.setState({
            [name]: e.target.value
        });
    }
}

export default class LoginDialog extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false,
            error: {}
        };
    }

    handleLogin = () => {
        this.setState({
            error: {}
        });

        const { username, password, remember } = this.state;

        if (!this.props.onSubmit)
            return false;

        return this.props.onSubmit(
            username, password, remember
        );
    }

    handleUsername = handleChange('username').bind(this);
    handlePassword = handleChange('password').bind(this);

    handleRemember = () => {
        this.setState({
            remember: !this.state.remember
        });
    };

    render() {
        return (
            <Form
                noValidate
                onSubmit={this.handleLogin}
            >
                <InputUsername
                    placeholder="Username"
                    onChange={this.handleUsername}
                />
                <InputPassword
                    placeholder="Password"
                    onChange={this.handlePassword}
                />
                <FormFooter>
                    <RememberLabel>
                        <InputRemember
                            checked={this.state.remember}
                            onChange={this.handleRemember}
                        />
                        Remember me
                    </RememberLabel>
                    <InputSubmit
                        value="Log in"
                    />
                </FormFooter>
            </Form>
        );
    }

}
