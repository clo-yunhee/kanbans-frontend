import React from 'react';

import { Draggable, Droppable } from 'react-beautiful-dnd';

import Taskitem from './Taskitem';

import 'react-perfect-scrollbar/dist/css/styles.css';

import { ListContainer, ListHeader, ListHeaderTitle,
         ListScrollContainer, ListItems } from './styles/Tasklist';

export default class Tasklist extends React.Component {
    handleChange = (value) => {
        this.props.data.listName = value;
    }

    handleUpdate = (value) => {
        console.log("Update list: ", value);
    }

    findItem = (id) => {
        return this.props.data.items.find(
            item => item._id.toString() === id
        );
    }

    renderOrderedItems(items) {
        let list = [];

        if (items) {
            items.forEach(item => {
                list[item.listIndex] = (
                    <Taskitem
                        key={item._id}
                        data={item}
                    />
                );
            });
        }

        return list;
    }

    render() {
        const { _id, listName,
                columnIndex, items } = this.props.data;

        const list = (
            <React.Fragment>
                <ListHeader>
                    <ListHeaderTitle
                        multiLine={false}
                        onChange={this.handleChange}
                        onUpdate={this.handleUpdate}
                    >
                        {listName}
                    </ListHeaderTitle>
                </ListHeader>
                <ListScrollContainer>
                    <Droppable
                        type="ITEM"
                        droppableId={_id.toString()}
                    >
                        {(provided, snapshot) => (
                            <ListItems
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                isDraggingOver={snapshot.isDraggingOver}
                            >
                                {this.renderOrderedItems(items)}
                                {provided.placeholder}
                            </ListItems>
                        )}
                    </Droppable>
                </ListScrollContainer>
            </React.Fragment>
        );

        return (
            <Draggable
                key={_id}
                type="LIST"
                draggableId={_id.toString()}
                index={columnIndex}
            >
                {(provided, snapshot) =>
                    <ListContainer
                        key={_id}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {list}
                    </ListContainer>
                }
            </Draggable>
        );
    }
}
