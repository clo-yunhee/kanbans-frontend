import styled from 'styled-components';

const maxLength = 30;

const radius = 4;
const grid = 10;

export const Form = styled.form`
    background-color: #f091f0;

    border-radius: ${radius}px;
    font-size: 1rem;
    color: #3c3c3c;

    display: ${({ visible }) => visible ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    position: absolute;
    right: 0;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);

    padding: ${grid}px;

    user-select: none;
`;

export const Input = styled.input`
    border: none;
    border-radius: ${radius}px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    padding: ${grid/2}px;

    &:hover {
        background-color: #eeeafc;
    }
`;

export const InputText = styled(Input).attrs({
    maxLength: maxLength,
    autoComplete: "off",
    type: "text",
})`
    margin-top: ${grid}px;
`;

export const FormFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${grid}px;
`;

export const RememberContainer = styled.div`
`;

export const RememberLabel = styled.label.attrs({
    htmlFor: "login-remember"
})`
    font-size: 0.85rem;
    padding-left: ${grid/2}px;
`;

export const InputRemember = styled(Input).attrs({
    id: "login-remember",
    type: "checkbox",
})`
    vertical-align: middle;
`;

export const SubmitContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: ${grid}px;
    padding-left: ${grid/2}px;
    padding-right: ${grid/2}px;
`;

export const InputSubmit = styled(Input).attrs({
    type: "button"
})`
    margin-left: ${grid/2}px;
    margin-right: ${grid/2}px;

    &:active {
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.2);
        transform: translateY(2px);
    }

    transition: transform ease-in-out 0.1s;
`;


