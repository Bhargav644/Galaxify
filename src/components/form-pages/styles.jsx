import { css } from "@emotion/css";
import { theme } from "../../modules/constant";

export const formPageWrapper = css`
  margin: auto;
  width: 90%;
  background-color: ${theme.grey};
  height: 90%;
`;

export const personalDetails = css`
  height: 80vh;
`;

export const quizCards = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center
  background-color: grey;
  height:60vh;

  tr {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    height: 2rem;
  }
  td {
    width: 25vw;
    text-align: center;
    height: 3rem;
  }
  td .input {
    height: 2.4rem;
    width: 25vw;
  }
  p {
    min-width: 15vw;
    margin: 0;
  }
  td button {
    width: 25vw;
  }

  & .input {
    width: 15vw;
    line-height: 10px;
    font-size: 16px;
    padding: 2px, 3px;
  }
`;

export const quizCardsPreference = css`
  tr {
    display: flex;
    justify-content: space-evenly;
    padding: 0.5rem 1rem;
  }
  & .question {
    width: 100%;
    text-align: center;
  }
`;
