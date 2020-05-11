import React from 'react';
import {
    Wrapper,
} from './styleComponents';

const Input = props => {
    return (
        <Wrapper
            type={props.type}
            placeholder={props.placeholder}
        >
        </Wrapper>
    );
}

export default Input;