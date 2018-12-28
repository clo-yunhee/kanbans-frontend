import styled from 'styled-components';

const NavItem = styled.button`
    display: inline-block;
    height: 100%;
    border: none;
    color: white;
    padding: 6px 12px;
    font-size: 1rem;
    cursor: ${({ noPointer }) =>
        noPointer ? 'inherit' : 'pointer'};
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
        /* The shadow won't get hidden by the surrounding items */
        z-index: 3;
    }
`;

export default NavItem;
