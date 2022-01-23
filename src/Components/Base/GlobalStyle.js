import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;700&display=swap');
 *{
     box-sizing: border-box;
     margin: 0;
     padding: 0;
     font-family:'Kanit',sans-serif;
 }


 @media screen and (max-width: 400px){
     *{
         font-size: 14px;
     }
 }
`;
