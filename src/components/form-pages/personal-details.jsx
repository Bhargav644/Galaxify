/* eslint-disable react/prop-types */
import { useState } from "react";
import { personalDetails, quizCards } from "./styles";

const PersonalDetails = ({
  onNextButtonClick,
  onBackButtonClick,
  backDisabled = false,
}) => {
  const today = new Date();
  const value = {
    name: "",
    email: "",
    gender: "Male",
    age: "",
  };
  const [personalDetail, setPersonDetail] = useState(value);
  const onSubmitClick = () => {
    onNextButtonClick(personalDetail);
  };

  const onInputChange = (e) => {
    if (e.target.name === "dob") {
      const age =
        (today - new Date(e.target.value)) / (365 * 60 * 60 * 60 * 365);
      let ageData;
      if (age < 18) ageData = "Under 18";
      else if (age < 31) ageData = "18-30";
      else if (age < 51) ageData = "31-50";
      else ageData = "51 and above";

      setPersonDetail((prev) => {
        return { ...prev, age: ageData };
      });
      return;
    }
    setPersonDetail((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className={personalDetails}>
      <h2>Personal Details</h2>
      <table className={quizCards}>
        <tr>
          <td>
            <p>Full Name:</p>
          </td>
          <td>
            <input
              type="text"
              className="input"
              name="name"
              onChange={onInputChange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <p>Email:</p>
          </td>
          <td>
            <input
              type="text"
              className="input"
              name="email"
              onChange={onInputChange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <p>Gender:</p>
          </td>
          <td>
            <select className="input" name="gender" onChange={onInputChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <p>D.O.B</p>
          </td>
          <td>
            <input
              type="date"
              className="input"
              name="dob"
              onChange={onInputChange}
            />
          </td>
        </tr>
        <tr>
          <td>
            <button disabled={backDisabled} onClick={onBackButtonClick}>
              Back
            </button>
          </td>
          <td>
            <button onClick={onSubmitClick}>Next</button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default PersonalDetails;
