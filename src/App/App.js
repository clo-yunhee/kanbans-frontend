import React from 'react';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Navbar from '../Navbar';
import * as AppViews from '../AppViews';

import { AppContainer, BodyWrapper } from './style';

export default class App extends React.PureComponent {

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
