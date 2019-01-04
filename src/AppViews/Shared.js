import React from 'react';

import { Link } from 'react-router-dom';
import { Loading } from './Loading';

import { getSharedBoards, getUsername } from '../users';

const collator = new Intl.Collator();
const sortReverse = (sortFunc) => (a, b) => -sortFunc(a, b);

const sortFuncs = {
    createdOn: (a, b) => a.createdOn - b.createdOn,
    boardName: (a, b) => collator.compare(a.boardName, b.boardName),
};

export class Shared extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
        };
    }

    pullData = () => {
        const payload = {
            username: getUsername()
        }

        getSharedBoards(payload, data => {
            this.setState({
                loaded: true,
                sharedBoards: data.shared,
            });
        });
    }

    setSort = (name, desc) => {
        const func = sortFuncs[name];

        this.setState({
            sort: desc ? sortReverse(func) : func
        });
    }

    sortData = () => {
        if (this.state.sharedBoards) {
            this.state.sharedBoards.sort(this.state.sort);
        }
    }

    shouldComponentUpdate(prevProps, prevState) {
        return (
            this.props.id !== prevProps.id
                || this.state.loaded !== prevState.loaded
                || this.state.sortBy !== prevState.sortBy
        );
    }

    componentDidMount() {
        this.setSort("createdOn", true);
        this.pullData();
        this.sortData();
    }

    componentDidUpdate() {
        this.pullData();
        this.sortData();
    }

    renderRows(list) {
        return list.map(board => (
            <tr key={board._id}>
                <td>
                    {board.boardName}
                </td>
                <td>
                    {board.username}
                </td>
                <td>
                    <Link to={`/board/${board._id}`}>
                        View
                    </Link>
                </td>
                <td>
                    Date
                </td>
            </tr>
        ));
    }

    render() {
        if (!this.state.loaded) {
            return <Loading />
        }

        const list = this.state.sharedBoards;

        return (
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Shared by
                        </th>
                        <td></td>
                        <th>
                            Created on
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows(list)}
                </tbody>
            </table>
        );
    }

}

