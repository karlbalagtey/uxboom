import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
    }

    .dashboard-panel {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        margin-left: 230px;
        height: 100vh;
        overflow: scroll;
        transition: all .4s;
    
        &.collapsed {
            margin-left: 55px;
        }
    }
`;
