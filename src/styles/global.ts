import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --background: #DADFF7;
    --primary: #232C33;
    --primary-dark: #13181c;
    --primary-very-dark: #090b0d;
    --primary-contrast: #FFF;
    --primary-contrast-shade: #a8a8a8;
    --secondary: #B5B2C2;
    --text: #5A7D7C;
    --text-light: #40424a;
    --navbar-bg: rgba(255, 255, 255, 0.5);
    --transparent-bg: rgba(117, 117, 117, 0.1);
    --input: #e4e3df;
    --input-focus: #f5f4f0;
    --modal-background: #fefefe;
    --modal-item: #888;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Montserrat, sans-serif;
  }
`;
