import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }
        
    body {
        background-color: ${({ theme }) => theme.backgroundColor};
        font-size: 16px;
    }

    button {
        cursor: pointer;
    }
`;
