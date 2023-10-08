import { css } from "@emotion/css";

export const cardWrapper = () => css`
  max-height: 250px;
  max-width: 208px;
  min-width: 208px;
  min-height: 250px;
  background-color: white;
  padding: 5px;

  & .planetImg {
    width: 100%;
    height: 60%;
  }

  & .footer {
    font-size: 18px;
    font-weight: 800;
    padding: 0;
    margin: 0;

    & .footer-text {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
    }
  }
`;
