import React from 'react';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Tasklist from '../Tasklist';

import { BoardContainer, BoardHeader,
         BoardHeaderTitle, BoardLists } from './style';

import { editBoard } from '../edit';
import { moveItem, moveList } from '../move';

function getIntId(id) {
    return id.substring(id.indexOf("\\") + 1);
}

function sortListsByIndex(lists) {
    lists.sort((a, b) => a.columnIndex - b.columnIndex);
}

function move(startList, endList, startIndex, endIndex) {
    const [moved] = startList.splice(startIndex, 1);
    endList.splice(endIndex, 0, moved);

    return moved;
}

export default class Taskboard extends React.Component {

    componentDidMount() {
        sortListsByIndex(this.props.data.lists);
    }

    componentDidUpdate() {
        sortListsByIndex(this.props.data.lists);
    }

    handleUpdate = (value) => {
        const { _id } = this.props.data;

        const payload = {
            _id: _id,
            boardName: value,
        };

        const prev = this.props.data.boardName;

        this.props.data.boardName = value;
        this.forceUpdate();

        editBoard(payload, msg => {
            this.props.data.boardName = prev;
            this.forceUpdate();
        });
    }

    moveList = (startIndex, endIndex, offline) => {
        const { _id, lists } = this.props.data;

        const movedList = move(lists, lists, startIndex, endIndex);

        // update indexes
        movedList.columnIndex = endIndex;

        lists.forEach((it, index) => it.columnIndex = index);

        this.forceUpdate();

        if (offline) {
            // used for client side op
            return;
        }

        // send data
        const payload = {
            boardId: _id,
            startListId: movedList._id,
            startColumnIndex: startIndex,
            endColumnIndex: endIndex,
        };

        moveList(payload, msg => {
            // if we couldn't move it, cancel.
            this.moveList(endIndex, startIndex, true);
        });
    }

    moveItem = (startList, endList, startIndex, endIndex, offline) => {
        const startItems = startList.items;
        const endItems = endList.items;

        const movedItem = move(startItems, endItems, startIndex, endIndex);

        // update indexes
        movedItem.listId = endList._id;
        movedItem.listIndex = endIndex;

        startItems.forEach((it, index) => it.listIndex = index);
        if (startItems !== endItems) {
            endItems.forEach((it, index) => it.listIndex = index);
        }

        this.forceUpdate();

        if (offline) {
            // used for client side op
            return;
        }

        // send data
        const payload = {
            startItemId: movedItem._id,
            startListId: startList._id,
            startListIndex: startIndex,
            endListId: endList._id,
            endListIndex: endIndex,
        };

        moveItem(payload, msg => {
            // if we couldn't move it, cancel.
            this.moveItem(endList, startList, endIndex, startIndex, true);
        });
    }

    handleDragEnd = (result) => {
        const { source, destination, type } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        // dropped same place
        if (source.droppableId === destination.droppableId
                && source.index === destination.index) {
            return;
        }

        // if moving columns
        if (type === 'LIST') {
            this.moveList(source.index, destination.index);
        } else if (type === 'ITEM') {
            const start = this.findList(getIntId(source.droppableId));
            const end = this.findList(getIntId(destination.droppableId));

            this.moveItem(start, end, source.index, destination.index);
        }
    }

    findList = (id) => {
        return this.props.data.lists.find(
            list => list._id.toString() === id
        );
    }

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
                            placeholder="Board name"
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

