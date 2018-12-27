import React from 'react';

import {
    Form, FormFooter,
    InputText,
    InputRemember,
    InputSubmit,
    RememberLabel,
    RememberContainer,
    SubmitContainer,
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

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            error: {}
        });

        const { username, password, remember } = this.state;

        const callback =
            (event.target === this.login
                || event.target === this.form)
                ? this.props.onLogin
                : (event.target === this.register)
                    ? this.props.onRegister
                    : undefined;

        if (!callback) {
            return false;
        }

        return callback(
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
                onSubmit={this.handleSubmit}
                visible={this.props.visible}
                ref={r => this.form = r}
            >
                <InputText
                    placeholder="Username"
                    onChange={this.handleUsername}
                />
                <InputText
                    placeholder="Password"
                    type="password"
                    onChange={this.handlePassword}
                />
                <FormFooter>
                    <RememberContainer>
                        <InputRemember
                            checked={this.state.remember}
                            onChange={this.handleRemember}
                        />
                        <RememberLabel>
                            Remember me
                        </RememberLabel>
                    </RememberContainer>
                    <SubmitContainer>
                        <InputSubmit
                            value="Sign in"
                            type="submit"
                            ref={r => this.login = r}
                        />
                        <InputSubmit
                            value="Register"
                            onClick={this.handleSubmit}
                            ref={r => this.register = r}
                        />
                    </SubmitContainer>
                </FormFooter>
            </Form>
        );
    }

}
