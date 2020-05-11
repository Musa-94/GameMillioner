import React from 'react';
import  { Wrapper } from "./styleComponent";

const Button = props => {
    return (
        <Wrapper
            type={props.type}
        >
            Log in
        </Wrapper>
    )
}

export default Button;