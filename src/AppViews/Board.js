import React from 'react';

import { Loading } from './Loading';

import Taskboard from '../Taskboard';
import { fetchBoard } from '../fetch';

export class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    pullData = () => {
        fetchBoard(data => {
            this.setState({
                loaded: true,
                boardData: data,
            });
        }, this.props.match.params.id);
    }

    shouldComponentUpdate(prevProps, prevState) {
        return (
            this.props.id !== prevProps.id
                || this.state.loaded !== prevState.loaded
        );
    }

    componentDidMount() {
        this.pullData();
    }

    componentDidUpdate() {
        this.pullData();
        console.log("update");
    }

    render() {
        const { loaded, boardData } = this.state;

        if (!loaded) {
            return <Loading />
        }

        return (
            <Taskboard
                key={boardData._id}
                data={boardData}
            />
        );
    }

}

