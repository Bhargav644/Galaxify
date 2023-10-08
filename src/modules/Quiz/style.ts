import { css } from "@emotion/css";

export const quizWrapper = css`
  height: 100vh;
  width: 100vw;
  h1 {
    margin: 0;
    font-family: Quantico;
    text-align: center;
  }
  & .planet-wrapper {
    position: absolute;
    height: 900px;
    width: 900px;
    bottom: 0%;
    left: 30%;
  }

  & .form-wrapper {
    position: relative;
    z-index: 50;
  }
`;
