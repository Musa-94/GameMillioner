import React from 'react';
import  { Wrapper } from "./styleComponent";

const Button = props => {
    return (
        <Wrapper
            type={props.type}
            onClick={props.click}
        >
            Log in
        </Wrapper>
    )
}

export default Button;