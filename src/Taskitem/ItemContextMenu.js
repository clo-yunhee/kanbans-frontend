import React from 'react';

import {
    ContextMenu, MenuItem, ContextMenuTrigger
} from 'react-contextmenu';

import '../react-contextmenu.css';


export default class ItemContextMenu extends React.Component {

    render() {
        const {
            children,
            id,
        } = this.props;

        return (
            <React.Fragment>
                <ContextMenuTrigger id={id}>
                    {children}
                </ContextMenuTrigger>
                <ContextMenu
                    id={id}
                >
                    <MenuItem onClick={this.props.onDelete}>
                        Delete item
                    </MenuItem>
                </ContextMenu>
            </React.Fragment>
        );
    }

}
