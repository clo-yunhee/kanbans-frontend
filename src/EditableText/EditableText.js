import React from 'react';

import styled from 'styled-components';
import ContentEditable from 'react-sane-contenteditable';

import { updateLater } from '../eventHandlers';

const StyledEditable = styled(ContentEditable).attrs({
    editable: true
})`
    cursor: text;
    user-select: text;

    &:empty::before {
        content: attr(placeholder);
        display: block;
        font-style: italic;
        opacity: 0.5;
    }
`;

export default class EditableText extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    grabFocus = () => {
        this.ref.focus();
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
                sanitise={true}
                content={this.props.children}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                className={this.props.className}
                onDrop={this.handleDrop}
                ref={r => this.ref = r}
            />
        );
    }

}

