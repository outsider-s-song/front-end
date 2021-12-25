import { createGlobalStyle } from 'styled-components';
import { normalize } from 'react-style-reset/string';

export const GlobalStyle = createGlobalStyle`

${normalize};
 
*{
    padding:0; 
    margin:0;
    box-sizing: border-box;
    list-style: none;
    
}

button{
    cursor: pointer;
}

html{
    width: 100%;
    height: 100vh;
    background-color: #132326;
    color:white;
    overflow-X:hidden;
    body{
        width: 100%;
        height: 100%;  
        overflow-X:hidden;
        a{
            text-decoration: none;
            outline: none;
            color:white;
        }
        p{margin:0;}
    }
}

`;
