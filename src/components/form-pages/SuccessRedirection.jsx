/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import ActivitySelector from "./partial/activity-selector";

const SuccessRedirection = ({ data }) => {
  const url = "https://galaxify-bacend.vercel.app/api/recommend";
  const [packageData, setPackageData] = useState([]);
  const [errorState, setError] = useState({});

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

  console.log("reshav", data, packageData);
  return (
    <div>
      <p> Well Done! Your Quiz Has Been Submitted Successfully </p>
      {packageData.length && <ActivitySelector activity={packageData[0]} />}
    </div>
  );
};

export default SuccessRedirection;
