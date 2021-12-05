import styled from 'styled-components';
import {InputBase} from '@material-ui/core';

const handleWidth = wide => {
    switch (wide) {
        case 'fullWidth': 
            return '100%';
        case 'medium': 
            return '260px';
        default:
            return '160px'
    }
}

export const NeflixInput = styled(InputBase)`
 z-index:150;
 background:#fff;
 padding:25.5px;
 height: 30px;
 outline: none;
 border: none;
`;
export const NeflixButton = styled.button `
    background-color: ${({color}) => color === 'gray' ? 'ligthgray': 'red'};
    z-index: 200px;
    color: #fff;
    border-radius: ${({radius}) => radius ? radius : null };
    text-tranform: inherit;
    padding: 15px;
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    width: ${({wide}) => handleWidth(wide)};
`;

