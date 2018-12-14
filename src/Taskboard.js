import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import Tasklist from './Tasklist';

import taskItemMoved from './app/taskItemMoved.js';

import './Taskboard.css';

export default class Taskboard extends React.Component {
    constructor(props) {
        super(props);

        this.taskItemMoved = taskItemMoved.bind(this);
    }

    findList(id) {
        return this.props.data.lists.find(
            list => list._id.toString() === id
        );
    }

    renderLists(lists) {
        if (lists) {
            return lists.map(list =>
                <Tasklist
                    key={list._id}
                    data={list}
                />
            );
        }

        return [];
    }

    render() {
        const { boardName, lists } = this.props.data;

        return (
            <DragDropContext onDragEnd={this.taskItemMoved}>
                <div className="board-container">
                    <header className="board-header">
                        <h2 className="board-title">{boardName}</h2>
                    </header>
                    <div className="board">
                        {this.renderLists(lists)}
                    </div>
                </div>
            </DragDropContext>
        );
    }
}

