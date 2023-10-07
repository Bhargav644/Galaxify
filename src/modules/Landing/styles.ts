import { css } from "@emotion/css";
import { theme } from "../constant";
export const landingWrapper = css`
  height: 98.5vh;
  width: 100vw;
  overflow: hidden;
  background-color: ${theme.dark};
`;

export const planetDiv = css`
  width: 180vw;
  height: 240vh;
  background-color: transparent;
  transform: translate(-30%, -18%) rotateZ(-12deg);
  padding: 20% 0%;
  position: absolute;
`;

export const starsDiv = css`
  width: 180vw;
  height: 240vh;
  position: absolute;
  background-color: transparent;
  transform: translate(-30%, -18%) rotateZ(-12deg);
  padding: 20% 0%;
`;
