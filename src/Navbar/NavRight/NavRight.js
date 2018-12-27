import React from 'react';

import LoginButton from '../LoginButton';

import {
    Container
} from './style';


export default class NavRight extends React.Component {

    render() {
        return (
            <Container>
                <LoginButton />
            </Container>
        )
    }

}
