import axios from "axios";
import { useEffect, useState } from "react";

const ActivitySelector = (activityID) => {
  const url = "https://galaxify-bacend.vercel.app/api/activity/planet";
  const [ActivityData, setActivityData] = useState([]);
  const [errorState, setError] = useState({});
  console.log(activityID);
  useEffect(() => {
    axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Attaching the form data
      data: activityID.activites,
    })
      .then((res) => {
        setActivityData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.log("Reshav", err);
      });
  }, [activityID]);
  return <div>ActivitySelector</div>;
};

export default ActivitySelector;
