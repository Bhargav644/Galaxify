import { css } from "@emotion/css";
import { theme } from "../constant";
export const landingWrapper = css`
  height: 98.5vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  background-color: ${theme.dark};

  & .landingPageText {
    position: absolute;
    top: 50%;
    left: 11%;
    height: auto;
    z-index: 20;
    & p {
      color: ${theme.textColor};
      word-spacing: 3rem;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 2rem;
      font-size: 34px;
      @media (max-width: 1020px) {
        line-height: 40px;
        font-size: 14px;
      }
      line-height: 34px;
      font-weight: 900;
    }
  }
  & .buttonWrapper {
    height: auto;
    top: 65%;
    position: absolute;
    z-index: 20;
    left: 50%;
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    transform: translateX(-50%);
    button {
      border-radius: 50px;
      letter-spacing: 3.645px;
    }
  }

  & .grey {
    left: 20%;
    border: 1px solid ${theme.dark};
    background: ${theme.grey};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  & .blue {
    right: 20%;
    border: 1px solid ${theme.dark};
    background: ${theme.blue};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const planetDiv = css`
  width: 180vw;
  height: 240vh;
  background-color: transparent;
  transform: translate(-22%, -20%);
  padding: 20% 0%;
  z-index: 1;
  position: absolute;
`;
