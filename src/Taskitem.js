import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import parseDateTime from './app/parseDateTime.js';

import './Taskitem.css';

export default class Taskitem extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const { onEdit } = this.props;

        const value = event.target.value;

        // preprocess input
        alert(value);

        if (onEdit) {
            onEdit(value);
        }
    }

    handleClick(event) {
        const p = event.target;
        
        p.contentEditable = true;
        p.focus();
    }

    handleBlur(event) {
        event.target.contentEditable = false;
    }

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
                        <p className="item-content"
                            contentEditable="true" 
                            onChange={this.handleChange}>
                            {content}
                        </p>
                        <footer className="item-footer">
                            Created on {createdOn.toLocaleString()}<br />
                            Last edit on {updatedOn ? updatedOn.toLocaleString() : "never"}<br />
                        </footer>
                    </div>
                )}
            </Draggable>
        );
    }
}
