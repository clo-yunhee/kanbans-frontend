import React from 'react';

import { Droppable } from 'react-beautiful-dnd';

import Taskitem from './Taskitem';

import './Tasklist.css';

export default class Tasklist extends React.Component {
    findItem(id) {
        return this.props.data.items.find(
            item => item._id.toString() === id
        )
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
        const { _id, listName, items } = this.props.data;

        return (
            <Droppable droppableId={_id.toString()}>
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className="list-container"
                        {...provided.droppableProps}
                    >
                        <header className="list-header">
                           <h4 className="list-title">{listName}</h4>
                        </header>
                        <div className="list">
                           {this.renderOrderedItems(items)}
                        </div>

                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        );
    }i
}
