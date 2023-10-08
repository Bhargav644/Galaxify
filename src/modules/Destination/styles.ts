import { css } from "@emotion/css";
import { theme } from "../constant";

export const destinationWrapper = css`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.dark};
  & .planet-div {
    width: 350px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%, 0);
  }
  & .card-div {
    padding: 0px 15px 0px 15px;
    height: 400px;
    transform: translateY(95%);
    color: black;
    align-items: end;
    overflow-x: scroll;
    width: auto;
    gap: 50px;
    display: flex;
  }
`;
