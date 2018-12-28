import React from 'react';

import styled from 'styled-components';

export default styled.div.attrs({
    children: (
        <React.Fragment>
            <div></div><div></div><div></div>
        </React.Fragment>
    )
})`
    display: ${({ show }) =>
        show ? 'inline-block' : 'none'};

    width: 64px;
    height: 64px;

    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 51px;
        height: 51px;
        margin: 6px;
        border: 6px solid #fdd;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #fdd transparent transparent transparent;
    }

    div:nth-child(1) { animation-delay: -0.45s; }
    div:nth-child(2) { animation-delay: -0.3s;  }
    div:nth-child(3) { animation-delay: -0.15s; }

    @keyframes lds-ring {
        0%   { transform: rotate(0deg);   }
        100% { transform: rotate(360deg); }
    }
`

