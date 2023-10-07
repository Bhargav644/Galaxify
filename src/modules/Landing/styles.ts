import { css } from "@emotion/css";
import { theme } from "../constant";
export const landingWrapper = css`
  height: 98.5vh;
  width: 100vw;
  overflow: hidden;
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
`;

export const planetDiv = css`
  width: 180vw;
  height: 240vh;
  background-color: transparent;
  transform: translate(-22%, -20%);
  padding: 20% 0%;
  z-index: 10;
  position: absolute;
`;
