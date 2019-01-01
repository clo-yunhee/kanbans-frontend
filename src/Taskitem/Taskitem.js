import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import TimeAgo from 'react-time-ago/no-tooltip';
import { convenient } from 'javascript-time-ago/gradation';

import ItemContextMenu from './ItemContextMenu';

import { ItemContainer, ItemContent, ItemFooter } from './style';

import { editItem } from '../edit';

export default class Taskitem extends React.Component {

    handleUpdate = (value) => {
        const { _id, listId } = this.props.data;

        const payload = {
            _id: _id,
            listId: listId,
            content: value,
        };

        const prev = this.props.data.content;

        this.props.data.content = value;
        this.forceUpdate();

        editItem(payload, msg => {
            this.props.data.content = prev;
            this.forceUpdate();
        });
    }

    handleDelete = () => {
        if (this.props.onDelete) {
            this.props.onDelete(this.props.data);
        }
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
                <div>
                    <ItemContent
                        placeholder="Item content"
                        multiLine={true}
                        onChange={this.handleChange}
                        onUpdate={this.handleUpdate}
                    >
                        {content}
                    </ItemContent>
                </div>
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
            <ItemContextMenu
                id={"I\\" + _id}
                onDelete={this.handleDelete}
            >
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
            </ItemContextMenu>
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


