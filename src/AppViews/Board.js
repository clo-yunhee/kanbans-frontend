import React from 'react';

import { Loading } from './Loading';

import Taskboard from '../Taskboard';
import { fetchBoard } from '../boards';

export class Board extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };
    }

    pullData = () => {
        const payload = {
            _id: this.props.match.params.id
        }

        fetchBoard(payload, data => {
            this.setState({
                loaded: true,
                boardData: data,
            });
        });
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
    }

    render() {
        if (!this.state.loaded) {
            return <Loading />
        }

        const data = this.state.boardData;

        return (
            <Taskboard
                key={data._id}
                data={data}
            />
        );
    }

}

