import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import PerfectScrollbar from 'react-perfect-scrollbar';

import parseDateTime from './app/parseDateTime';

import TimeAgo from 'react-time-ago/no-tooltip';
import { convenient } from 'javascript-time-ago/gradation';

import 'react-perfect-scrollbar/dist/css/styles.css';

import { ItemContainer, ItemContent, ItemFooter } from './styles/Taskitem';

import { updateItem } from './app/update';
import extractProps from './app/extractProps';

export default class Taskitem extends React.Component {

    handleChange = (value) => {
        this.props.data.content = value;
    }

    handleUpdate = (value) => {
        updateItem(extractProps(
            ['_id', 'listId', 'boardId', 'content'],
            this.props.postData
        ));
    }

    render() {
        const { _id, listIndex, content } = this.props.data;

        const createdOn = parseDateTime(this.props.data.createdOn);
        const updatedOn = parseDateTime(this.props.data.updatedOn);

        const createdTimeStyle = {
            flavour: 'long',
            gradation: convenient,
        };

        const body = (
            <React.Fragment>
                <PerfectScrollbar>
                    <ItemContent
                        multiLine={true}
                        onChange={this.handleChange}
                        onUpdate={this.handleUpdate}
                    >
                        {content}
                    </ItemContent>
                </PerfectScrollbar>
                <ItemFooter>
                    <div>
                        Created <TimeAgo timeStyle={createdTimeStyle}>{createdOn}</TimeAgo>
                    </div>
                    <div>
                        Last edited {updatedOn ? ( <TimeAgo>{updatedOn}</TimeAgo> ) : "never"}
                    </div>
                </ItemFooter>
            </React.Fragment>
        );

        return (
            <Draggable
                key={_id}
                type="ITEM"
                draggableId={"I\\" + _id}
                index={listIndex}
            >
                {(provided, snapshot) => (
                    <ItemContainer
                        key={_id}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        {body}
                    </ItemContainer>
                )}
            </Draggable>
        );
    }
}
