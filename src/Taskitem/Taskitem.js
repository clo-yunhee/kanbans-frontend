import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import TimeAgo from 'react-time-ago/no-tooltip';
import { convenient } from 'javascript-time-ago/gradation';

import { ItemContainer, ItemContentScroll,
         ItemContent, ItemFooter } from './style';

import { updateItem } from '../update';
import { extractProps } from '../utils';

export default class Taskitem extends React.Component {

    handleChange = (value) => {
        this.props.data.content = value;
    }

    handleUpdate = (value) => {
        updateItem(extractProps(
            ['_id', 'listId', 'boardId', 'content'],
            this.props.data
        ));
    }

    render() {
        const { _id, listIndex, content,
                createdOn, updatedOn } = this.props.data;

        const createdOnDate = new Date(createdOn * 1000);
        const updatedOnDate = (updatedOn !== null)
                                ? new Date(updatedOn * 1000)
                                : null;

        const createdTimeStyle = {
            flavour: 'long',
            gradation: convenient,
        };

        const body = (
            <React.Fragment>
                <ItemContentScroll>
                    <ItemContent
                        multiLine={true}
                        onChange={this.handleChange}
                        onUpdate={this.handleUpdate}
                    >
                        {content}
                    </ItemContent>
                </ItemContentScroll>
                <ItemFooter>
                    <div>
                        Created <TimeAgo timeStyle={createdTimeStyle}>{createdOnDate}</TimeAgo>
                    </div>
                    <div>
                        Last edited {(updatedOnDate !== null) ? ( <TimeAgo>{updatedOnDate}</TimeAgo> ) : "never"}
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

    static mockItem(listId) {
        return (
            <ItemContainer
                key={`mock-${listId}`}
                style={{visibility: 'hidden'}}
            >
                <ItemContent as="div">
                    Mock item
                </ItemContent>
                <ItemFooter>
                    <div>Mock item</div>
                    <div>Mock item</div>
                </ItemFooter>
            </ItemContainer>
        )
    }

}


