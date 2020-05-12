import styled from "styled-components";

const bgInput = '#4C83FF';
const WrapperBgColor = '#32CCBC';

const btnHeight = 60;

export const Wrapper = styled.button`
    height: ${btnHeight}px;
    margin: 20px;
    border: none;
    padding: 10px;
    font-size: 20px;
    border-radius: 3px;
    background-size: 200%;
    background-image: linear-gradient(90deg, ${WrapperBgColor} 0, ${WrapperBgColor} 50%, ${bgInput} 50%, ${bgInput} 100%);
    background-position-x: 100%;
    transition: background .2s ease-out;
    
    &:focus {
        background-position-x: 0;
    }
`;

