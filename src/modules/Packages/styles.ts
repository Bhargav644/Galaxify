import { css } from "@emotion/css";
import { theme } from "../constant";

export const packagePlanet = css`
  width: 100vw;
  height: 400px;
`;

export const activityCard = (id) => css`
  display: flex;
  padding: 20px;

  ${id % 2 === 0 ? "flex-direction: row-reverse;" : ""}

  & div .activity-image {
    width: 14rem;
    height: 18rem;
    border-radius: 15px;
  }
  & div {
    width: fit-content;
  }

  & div .activity-text {
    text-align: left;
    ${id % 2 !== 0 ? "padding: 0 0px 0 10rem;" : "padding: 10 0px 0 0rem;"}
    width: 80%;
  }
`;

export const activityWrapper = css`
  width: 80%;
  margin: auto;
`;

export const activityTitle = css`
  padding: 10px;
  font-size: 3rem;
  font-weight: 600;
  text-align: left;
`;

export const packageWrapper = css`
  text-align: center;

  & .title-image {
    width: 80%;
    height: 190px;
    border-radius: 15px;
    border: 1px solid white;
  }

  & .title-text {
    transform: translateY(160px);
  }
`;

export const buttonWrapper = css`
  font-size: 24px;
  margin: 70px auto;
  background-color: white;
  color: ${theme.dark};
`;
