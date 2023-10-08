/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { personalDetails, quizCardsPreference } from "./styles";

const PreferenceDetails = ({
  onNextButtonClick,
  onBackButtonClick,
  backDisabled = false,
}) => {
  const value = {
    perfectVacation: "",
    activityLevel: "",
    extremeConditions: "",
    interest: "",
  };
  const [prefDetails, setPrefDetails] = useState(value);

  const onInputChange = (e) => {
    setPrefDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmitClick = () => {
    console.log("reshav", prefDetails);
    onNextButtonClick(prefDetails);
  };

  return (
    <div className={personalDetails}>
      <h2>Preferences Details</h2>
      <table className={quizCardsPreference}>
        <tr>
          <td className="question">
            <p> What's your idea of a perfect vacation? </p>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              value="Adventure and thrill-seeking"
              name="perfectVacation"
              checked={
                prefDetails.perfectVacation === "Adventure and thrill-seeking"
              }
              onChange={onInputChange}
            />
            Adventure and thrill-seeking
          </td>
          <td>
            <input
              type="radio"
              value="Relaxing and Rejuvenating"
              name="perfectVacation"
              checked={
                prefDetails.perfectVacation === "Relaxing and Rejuvenating"
              }
              onChange={onInputChange}
            />
            Relaxing and Rejuvenating
          </td>
          <td>
            <input
              type="radio"
              value="Scientific exploration"
              name="perfectVacation"
              onChange={onInputChange}
              checked={prefDetails.perfectVacation === "Scientific exploration"}
            />
            Scientific exploration
          </td>
        </tr>
        <tr>
          <td className="question">
            <p> How active do you like to be on vacation? </p>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              value="Very active"
              name="activityLevel"
              onChange={onInputChange}
              checked={prefDetails.activityLevel === "Very active"}
            />
            I want to feel the burn!
          </td>
          <td>
            <input
              type="radio"
              value="Moderately active"
              onChange={onInputChange}
              name="activityLevel"
              checked={prefDetails.activityLevel === "Moderately active"}
            />
            A little sweat never hurt anyone
          </td>
          <td>
            <input
              type="radio"
              value="Not active"
              name="activityLevel"
              checked={prefDetails.activityLevel === "Not active"}
              onChange={onInputChange}
            />
            I'm here to chill
          </td>
        </tr>
        <tr>
          <td className="question">
            <p> What's your tolerance for extreme conditions? </p>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              placeholder="Bring it on!"
              value={"High tolerance"}
              onChange={onInputChange}
              name="extremeConditions"
              checked={prefDetails.extremeConditions === "High tolerance"}
            />
            Bring it on!
          </td>
          <td>
            <input
              type="radio"
              placeholder="I can handle some extremes"
              value={"Moderate tolerance"}
              onChange={onInputChange}
              name="extremeConditions"
              checked={prefDetails.extremeConditions === "Moderate tolerance"}
            />
            I can handle some extremes
          </td>
          <td>
            <input
              type="radio"
              placeholder="I prefer comfort"
              value={"Low tolerance"}
              onChange={onInputChange}
              name="extremeConditions"
              checked={prefDetails.extremeConditions === "Low tolerance"}
            />
            I prefer comfort
          </td>
        </tr>
        <tr>
          <td className="question">
            <p> What are you most interested in seeing? </p>
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="radio"
              placeholder="Natural Beauty"
              value={"Natural Beauty"}
              onChange={onInputChange}
              name="interest"
              checked={prefDetails.interest === "Natural Beauty"}
            />
            Natural Beauty
          </td>
          <td>
            <input
              type="radio"
              placeholder="Alien Landscapes"
              value={"Alien Landscapes"}
              onChange={onInputChange}
              name="interest"
              checked={prefDetails.interest === "Alien Landscapes"}
            />
            Alien Landscapes
          </td>
          <td>
            <input
              type="radio"
              placeholder="Both of them"
              value={"Alien Landscapes"}
              onChange={onInputChange}
              name="interest"
              checked={prefDetails.interest === "Alien Landscapes"}
            />
            Both of them
          </td>
        </tr>
        <tr>
          <td>
            <button disabled={backDisabled} onClick={onBackButtonClick}>
              Back
            </button>
          </td>
          <td>
            <button onClick={onSubmitClick}>Submit</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PreferenceDetails;
