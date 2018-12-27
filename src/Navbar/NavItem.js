import styled from 'styled-components';

const NavItem = styled.button`
    display: block;
    height: 100%;
    border: none;
    color: white;
    padding: 14px 28px;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    text-shadow: 1px 1px rgba(0,0,0,0.1);

    background-color: ${({ expanded }) =>
        expanded ? '#673ab7' : '#512da8'};
    box-shadow: ${({ expanded }) =>
        expanded ? '0px 0px 2px 4px rgba(0,0,0,0.2)' : 'none'};

    transition: box-shadow ease 0.2s,
                background-color ease 0.2s;

    &:hover {
        background-color: #6f40c2;
        box-shadow: 0px 0px 2px 4px rgba(0,0,0,0.2);
    }
`;

export default NavItem;
