// 각 페이지에서 로컬로 Css를 다뤗다면 이건 전체적임
// yarn add styled-reset
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing: border-box;
    }
    body {
        height:100%;
        font-family:-apple-system;
        font-size:18px;
        background-color:#151515;
        color:white;
        
    }
`;

export default GlobalStyles;
