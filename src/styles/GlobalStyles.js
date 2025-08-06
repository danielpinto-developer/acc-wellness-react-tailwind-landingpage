import { createGlobalStyle } from "styled-components";
import { globalStyles } from "twin.macro";

const GlobalStyles = createGlobalStyle(
  globalStyles,
  `
    html, body, #root {
      margin: 0;
      padding: 0;
      height: 100%;
      width: 100%;
      overflow-x: hidden;
      font-family: 'Inter', sans-serif;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    main {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }

    .ReactModal__Overlay {
      transition: transform 300ms ease-in-out;
      transition-delay: 100ms;
      transform: scale(0);
    }

    .ReactModal__Overlay--after-open {
      transform: scale(1);
    }

    .ReactModal__Overlay--before-close {
      transform: scale(0);
    }
  `
);

export default GlobalStyles;
