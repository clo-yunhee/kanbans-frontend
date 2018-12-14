import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import parseDateTime from './app/parseDateTime.js';

import './Taskitem.css';

export default class Taskitem extends React.Component {
    render() {
        const { _id, listIndex, content } = this.props.data;

        const createdOn = parseDateTime(this.props.data.createdOn);
        const updatedOn = parseDateTime(this.props.data.updatedOn);

        return (
            <Draggable
                key={_id}
                draggableId={_id.toString()}
                index={listIndex}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        className="item-container"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <p className="item-content">
                            {content}
                        </p>
                        <footer className="item-footer">
                            Last edited {createdOn.toLocaleString()}<br />
                            Last updated {updatedOn ? updatedOn.toLocaleString() : "never"}<br />
                        </footer>
                    </div>
                )}
            </Draggable>
        );
    }
}
