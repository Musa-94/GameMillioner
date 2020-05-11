import styled from "styled-components";

const bgInput = '#4C83FF';
const colorPlaceholder = '#000';
const WrapperBgColor = '#32CCBC';

export const Wrapper = styled.input`
    font-size: 18px;
    padding: 20px;
    margin: 20px;
    border: none;
    border-radius: 10px;
    background-image: linear-gradient(90deg, ${WrapperBgColor} 0, ${WrapperBgColor} 50%, ${bgInput} 50%, ${bgInput} 100%);
    border: none;
    border-radius: 3px;
    background-size: 200%;
    background-position-x: 100%;
    transition: background .2s ease-out;
    
    &:focus {
        background-position-x: 0;
    }
    
    ::placeholder {
        color: ${colorPlaceholder};
    }
`;