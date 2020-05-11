import styled, { createGlobalStyle } from 'styled-components';

const bgColor = '#fff';
const WrapperBgColor = '#32CCBC';
const formWidth = 500;
const formHeight = 300;

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    body {
        width: 100%;
        height: 100vh;
    }
    
    #root {
        width: 100%;
        height: 100%;
        display: flex;
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: absolute;
    min-width: ${formWidth}px;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient( 135deg, #90F7EC 10%, ${WrapperBgColor} 100%);
`;

Wrapper.form = styled.div`
    width: ${formWidth}px;
    height: ${formHeight}px;
    display: flex;
    margin: 33px;
    padding: 33px;
    border-radius: 20px;
    flex-direction: column;
    background-color: ${bgColor};
`;