/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import ActivitySelector from "./partial/activity-selector";
import { successWrapper } from "./styles";

const SuccessRedirection = ({ data }) => {
  const url = "https://galaxify-bacend.vercel.app/api/recommend";
  const [packageData, setPackageData] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [errorState, setError] = useState({});
  const [currName, setCurrName] = useState("");
  const onChange = (e) => {
    const letter = e.target.value;
    setCurrName((prev) => ({ ...prev, letter }));
  };
  const onClick = () => {
    setPackageName(currName);
  };

  useEffect(() => {
    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Attaching the form data
      data: data,
    })
      .then((res) => {
        setPackageData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log("Reshav", err);
      });
  }, [errorState, data]);

  return (
    <div className={successWrapper}>
      <p> Well Done! Your Quiz Has Been Submitted Successfully </p>
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={onClick}>Done</button>
      </div>

      {packageData.length && packageName && (
        <ActivitySelector activity={packageData[0]} packageName={packageName} />
      )}
    </div>
  );
};

export default SuccessRedirection;
