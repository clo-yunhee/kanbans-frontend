import React from 'react';

import styled from 'styled-components';
import ContentEditable from 'react-sane-contenteditable';

import { updateLater } from '../eventHandlers';

const StyledEditable = styled(ContentEditable).attrs({
    editable: true
})`
    cursor: text;
`;

export default class EditableText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
    }

    updateLater = updateLater.bind(this)

    handleChange = (event, value) => {
        const { onChange, onUpdate } = this.props;

        if (onChange) {
            onChange(value);
        }

        if (onUpdate) {
            this.updateLater('change', () => onUpdate(value));
        }
    }

    handleDrop = (event) => event.preventDefault()

    render() {
        return (
            <StyledEditable
                editable={true}
                multiLine={this.props.multiLine}
                sanitise={false}
                content={this.props.children}
                onChange={this.handleChange}
                className={this.props.className}
                onDrop={this.handleDrop}
            />
        );
    }

}

