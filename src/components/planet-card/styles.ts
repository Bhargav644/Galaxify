import { css } from "@emotion/css";
import { theme } from "../../modules/constant";

export const cardWrapper = () => css`
  max-height: 270px;
  max-width: 208px;
  min-width: 208px;
  min-height: 270px;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    & .footer-text {
      padding: 0;
      margin: 0;
      text-transform: uppercase;
    }

    & p button {
      font-size: 15px;
      background-color: ${theme.dark};
      color: "white" !important;
      text-decoration: none;
    }

    & p button .link {
      color: white;
    }
  }
`;
