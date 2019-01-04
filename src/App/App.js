import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';
import * as AppViews from '../AppViews';

import { AppContainer, BodyWrapper } from './style';

import {
    getPersistedToken,
    storeToken,
    clearToken,
    reauthUser,
    listenLogin,
    listenLogout,
} from '../users';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            username: null,
        };

        listenLogin(this.handleLogin);
        listenLogout(this.handleLogout);
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
        }, rej => {
            // fail silently if the token is invalid
            clearToken();
        });
    }

    handleLogin = (username) => {
        this.setState({
            isLoggedIn: true,
            username: username,
        })
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false,
            username: null,
        })
    }

    render() {
        return (
            <Router>
                <AppContainer>
                    <Navbar />
                    <BodyWrapper>
                        <Route path="/board/:id" component={AppViews.Board} />
                        <Route path="/owned" component={AppViews.Owned} />
                        <Route path="/shared" component={AppViews.Shared} />
                    </BodyWrapper>

                    {/* The server redirects invalid API paths */}
                    <Route path="/api/*">
                        {({ match }) =>
                            match
                                ? <Redirect to="/" />
                                : null
                        }
                    </Route>
                </AppContainer>
           </Router>
        );
    }

}
