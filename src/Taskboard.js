import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Tasklist from './Tasklist';

import taskItemMoved from './app/taskItemMoved';

import { BoardContainer, BoardHeader,
         BoardHeaderTitle, BoardLists } from './styles/Taskboard';

import { updateBoard } from './app/update';
import extractProps from './app/extractProps';

export default class Taskboard extends React.Component {

    handleChange = (value) => {
        this.props.data.boardName = value;
    }

    handleUpdate = (value) => {
        updateBoard(extractProps(
            ['_id', 'boardName'],
            this.props.data
        ));
    }

    findList = (id) => {
        return this.props.data.lists.find(
            list => list._id.toString() === id
        );
    }

    handleDragEnd = taskItemMoved.bind(this);

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
                                {this.renderLists(lists)}
                                {provided.placeholder}
                            </BoardLists>
                        }
                    </Droppable>
                </BoardContainer>
            </DragDropContext>
        );
    }
}

