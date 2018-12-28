import React from 'react';

import {
    FormWrapper, LoadingOverlay,
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

    componentDidUpdate(prevProps, prevState) {
        if ((!prevProps.visible && this.props.visible
                    && !this.props.isLoading)
                || (!prevProps.isLoading && this.props.isLoading)) {
            this.username.focus();
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            error: {}
        });

        const { username, password, remember } = this.state;
        const { onLogin } = this.props;

        if (!onLogin) {
            return false;
        }

        return onLogin(
            username, password, remember,
            (event.target === this.register)
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
            <FormWrapper visible={this.props.visible}>
                <LoadingOverlay show={this.props.isLoading} />
                <Form
                    noValidate
                    onSubmit={this.handleSubmit}
                    isLoading={this.props.isLoading}
                >
                    <InputText
                        autoFocus
                        placeholder="Username"
                        onChange={this.handleUsername}
                        ref={r => this.username = r}
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
                            />
                            <InputSubmit
                                value="Register"
                                onClick={this.handleSubmit}
                                ref={r => this.register = r}
                            />
                        </SubmitContainer>
                    </FormFooter>
                </Form>
            </FormWrapper>
        );
    }

}
