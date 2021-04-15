import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";

const primaryFont = '"Montserrat", sans-serif';
const primaryColor = "#252B42";

export const GlobalStyle = createGlobalStyle`
${normalize()}
html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  margin: 0;
  color: ${primaryColor}; 
  font-family: ${primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}

p {
  margin: 0.2em 0;
}
`;
