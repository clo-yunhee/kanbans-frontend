import styled from 'styled-components';

const maxLength = 30;

const radius = 4;
const grid = 10;

export const Form = styled.div`
    border-radius: ${radius}px;
    font-size: 1rem;

    display: ${({ hidden }) => hidden ? 'none' : 'flex'};
    flex-direction: column;
    align-items: center;
`;

export const Input = styled.input`
    border-radius: ${radius}px;
    padding: ${grid/2}px;
    margin: ${grid}px;
    margin-bottom: 0;
`;

export const InputUsername = styled(Input).attrs({
    maxLength: maxLength,
    autoComplete: "off",
    type: "text",
})`

`;

export const InputPassword = styled(Input).attrs({
    maxLength: maxLength,
    autoComplete: "off",
    type: "password",
})`

`;

export const FormFooter = styled.div`
    content: ' ';

    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RememberContainer = styled.div`

`;

export const RememberLabel = styled.label.attrs({
    htmlFor: "login-remember"
})``;

export const InputRemember = styled(Input).attrs({
    id: "login-remember",
    type: "checkbox",
})``;

export const SubmitContainer = styled.div`

`;

export const InputSubmit = styled(Input).attrs({
    type: "submit"
})`
`;


