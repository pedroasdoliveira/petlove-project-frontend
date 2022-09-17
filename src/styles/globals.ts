import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overflow: none;
    }
    html {
        font-size: 1rem;
    }
    html, body, #__next {
        height: 100%;
    }
    body {
        font-family: 'Roboto', 'Times New Roman', Times, serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyles;
