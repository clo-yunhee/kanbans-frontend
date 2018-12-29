import React from 'react';

import { Draggable, Droppable } from 'react-beautiful-dnd';

import Taskitem from '../Taskitem';

import 'react-perfect-scrollbar/dist/css/styles.css';

import { ListContainer, ListHeader, ListHeaderTitle,
         ListHeaderDrag, ListItems,
         ListFooter, ListFooterNewItem } from './style';

import { updateList } from '../update';
import { extractProps } from '../utils';

export default class Tasklist extends React.Component {

    handleChange = (value) => {
        this.props.data.listName = value;
    }

    handleUpdate = (value) => {
        updateList(extractProps(
            ['_id', 'boardId', 'listName'],
            this.props.data
        ));
    }

    findItem = (id) => {
        return this.props.data.items.find(
            item => item._id.toString() === id
        );
    }

    renderOrderedItems(items, isDraggingOver) {
        let list = [];

        if (Array.isArray(items) && items.length > 0) {
            items.forEach(item => {
                list[item.listIndex] = (
                    <Taskitem
                        key={item._id}
                        data={item}
                    />
                );
            });
        } else if (!isDraggingOver) {
            // placeholder item
            list.push(Taskitem.mockItem(this.props.data._id));
        }

        return list;
    }

    render() {
        const { _id, listName,
                columnIndex, items } = this.props.data;

        return (
            <Draggable
                key={_id}
                type="LIST"
                draggableId={"L\\" + _id}
                index={columnIndex}
            >
                {(provided, snapshot) =>
                    <ListContainer
                        key={_id}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.draggableProps}
                    >
                        <ListHeader isDragging={snapshot.isDragging}>
                            <ListHeaderDrag
                                isDragging={snapshot.isDragging}
                                {...provided.dragHandleProps}
                            />
                            <ListHeaderTitle
                                multiLine={false}
                                onChange={this.handleChange}
                                onUpdate={this.handleUpdate}
                                isDragging={snapshot.isDragging}
                            >
                                {listName}
                            </ListHeaderTitle>
                        </ListHeader>
                        <Droppable
                            type="ITEM"
                            droppableId={"L\\" + _id}
                        >
                            {(dropProvided, dropSnapshot) => (
                                <ListItems
                                    containerRef={dropProvided.innerRef}
                                    {...dropProvided.droppableProps}
                                    isDraggingOver={dropSnapshot.isDraggingOver}
                                >
                                    {this.renderOrderedItems(items, dropSnapshot.isDraggingOver)}
                                    {dropProvided.placeholder}
                                </ListItems>
                            )}
                        </Droppable>
                        <ListFooter>
                            <ListFooterNewItem />
                        </ListFooter>
                    </ListContainer>
                }
            </Draggable>
        );
    }
}
