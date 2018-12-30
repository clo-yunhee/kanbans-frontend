import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Tasklist from '../Tasklist';

import { taskItemMoved } from '../eventHandlers';

import { BoardContainer, BoardHeader,
         BoardHeaderTitle, BoardLists } from './style';

import { updateBoard } from '../update';

export default class Taskboard extends React.Component {

    handleUpdate = (value) => {
        const { _id } = this.props.data;

        const payload = {
            _id: _id,
            boardName: value,
        };

        updateBoard(payload, ({ boardName }) => {
            this.props.data.boardName = boardName;
        });
    }

    findList = (id) => {
        return this.props.data.lists.find(
            list => list._id.toString() === id
        );
    }

    handleDragEnd = taskItemMoved.bind(this);

    renderOrderedLists(lists) {
        let board = [];

        if (lists) {
            lists.forEach(list => {
                board[list.columnIndex] = (
                    <Tasklist
                        key={list._id}
                        data={list}
                    />
                )}
            );
        }

        return board;
    }

    render() {
        const { _id, boardName, lists } = this.props.data;

        return (
            <DragDropContext onDragEnd={this.handleDragEnd}>
                <BoardContainer>
                    <BoardHeader>
                        <BoardHeaderTitle
                            multiLine={false}
                            onChange={this.handleChange}
                            onUpdate={this.handleUpdate}
                        >
                            {boardName}
                        </BoardHeaderTitle>
                    </BoardHeader>
                    <Droppable
                        type="LIST"
                        droppableId={"B\\" + _id}
                        direction="horizontal"
                    >
                        {(provided, snapshot) =>
                            <BoardLists
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                {...provided.dropHandleProps}
                            >
                                {this.renderOrderedLists(lists)}
                                {provided.placeholder}
                            </BoardLists>
                        }
                    </Droppable>
                </BoardContainer>
            </DragDropContext>
        );
    }
}

