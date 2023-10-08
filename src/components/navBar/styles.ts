import { css, keyframes } from "@emotion/css";
import { theme } from "../../modules/constant";

export const container = css`
  & .planet {
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: ${theme.logoColorLight};
    position: absolute;
    transform: translate(37px, 20px);
    z-index: 10;
  }
`;

const ring1frm = keyframes`
    0% {
      transform: rotate3d(-1, 0, -1, 0deg);
    }
    100% {
      transform: rotate3d(-1, 0, -1, 360deg);
    }
  `;

const ring2frm = keyframes`
    0% {
      transform: rotate3d(1, 0, 1, 0deg);
    }
    100% {
      transform: rotate3d(1, 0, 1, 360deg);
    }
  `;

export const ring1 = css`
  width: 50px;
  height: 50px;
  border: 2px solid ${theme.logoColor};
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  top: 7.5px;
  left: 22px;
  animation: ${ring1frm} 2s linear infinite;
`;
export const ring2 = css`
  width: 50px;
  height: 50px;
  border: 2px solid ${theme.logoColor};
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  top: 7.5px;
  left: 22px;
  animation: ${ring2frm} 2s linear infinite;
`;

export const TextStyle = css`
  position: absolute;
  transform: translate(15px, 55px);
`;

export const UserIconStyle = css`
  position: absolute;
  right: 20px;
  top: 20px;
`;
