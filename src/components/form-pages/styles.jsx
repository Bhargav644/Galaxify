import { css } from "@emotion/css";

export const formPageWrapper = css`
  width: 650px;
  height: 90%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
`;

export const personalDetails = css`
  height: 80vh;
  h2 {
    transform: translate(35%, 25%);
  }
`;

export const quizCards = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items:center
  background-color: grey;
  height:60vh;

  table{
    height:fit-content;
  }

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
    border-bottom : 1px solid grey;
  }
  td .input {
    height: 2.4rem;
    width: 25vw;
    border-radius: 2px 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
  font-size: 1.2rem;
  & .question-card {
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  & .answer td {
    display: flex;
  }
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

export const successWrapper = css``;
