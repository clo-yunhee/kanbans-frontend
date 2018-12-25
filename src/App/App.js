import React from 'react';

import Taskboard from '../Taskboard';

import { AppContainer, BoardWrapper } from './style';

import { fetchBoard } from '../app/fetch';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        let { data, id } = this.props;

        if (data) {
            this.setState({board:
                <Taskboard
                    key={data._id}
                    data={data}
                />
            });
        } else {
            if (!id) {
                id = '26d301d2-ff22-11e8-ac5d-42010a84008d';
            }

            fetchBoard(data => {
                this.setState({board:
                    <Taskboard
                        key={id}
                        data={data}
                    />
                });
            }, id);
       }
    }

    render() {
        return (
            <AppContainer>
                <BoardWrapper>
                    {this.state.board}
                </BoardWrapper>
            </AppContainer>
        );
    }
}
