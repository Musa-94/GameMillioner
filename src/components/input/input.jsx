import React from 'react';
import {
    Wrapper,
} from './styleComponents';


const Input = props => {
    return (
        <Wrapper
            type={props.type}
            name={props.name}
            onChange={props.change}
            placeholder={props.placeholder}
        />
    );
}

export default Input;