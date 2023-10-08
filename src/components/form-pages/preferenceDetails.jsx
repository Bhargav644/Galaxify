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
    onNextButtonClick(prefDetails);
  };

  return (
    <div className={personalDetails}>
      <h2>Preferences Details</h2>
      <table className={quizCardsPreference}>
        <div className="question-card">
          <tr>
            <td className="question">
              <p> What's your idea of a perfect vacation? </p>
            </td>
          </tr>
          <tr className="answer">
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
              <span>Adventure and thrill-seeking</span>
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
                checked={
                  prefDetails.perfectVacation === "Scientific exploration"
                }
              />
              Scientific exploration
            </td>
          </tr>
        </div>
        <div className="question-card">
          <tr>
            <td className="question">
              <p> How active do you like to be on vacation? </p>
            </td>
          </tr>
          <tr className="answer">
            <td>
              <input
                type="radio"
                value="Very active"
                name="activityLevel"
                onChange={onInputChange}
                checked={prefDetails.activityLevel === "Very active"}
              />
              <span>I want to feel the burn!</span>
            </td>
            <td className="answer">
              <input
                type="radio"
                value="Moderately active"
                onChange={onInputChange}
                name="activityLevel"
                checked={prefDetails.activityLevel === "Moderately active"}
              />
              <span> A little sweat never hurt anyone</span>
            </td>
            <td className="answer">
              <input
                type="radio"
                value="Not active"
                name="activityLevel"
                checked={prefDetails.activityLevel === "Not active"}
                onChange={onInputChange}
              />
              <span> I'm here to chill</span>
            </td>
          </tr>
        </div>
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
              value={"Both of them"}
              onChange={onInputChange}
              name="interest"
              checked={prefDetails.interest === "Both of them"}
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
