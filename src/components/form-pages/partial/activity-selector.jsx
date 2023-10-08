/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { activityCard } from "./style";
import { useNavigate } from "react-router-dom";

const ActivitySelector = ({ activity, packageName }) => {
  const url1 = "https://galaxify-bacend.vercel.app/api/activities/planet";
  const url2 = "https://galaxify-bacend.vercel.app/api/packages/create/new";

  const [ActivityData, setActivityData] = useState([]);
  const [errorState, setError] = useState({});
  const [selectedActivites, setSelectedActivites] = useState([]);
  const onChange = (e) => {
    setSelectedActivites((prev) => {
      return [...prev, e.target.value];
    });
  };
  const navigate = useNavigate();

  const onClick = () => {
    axios({
      url: url2,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Attaching the form data
      data: JSON.stringify({
        PackageName: packageName.letter,
        Duration: 9,
        ActivityIDs: selectedActivites,
        Destination: activity?.id ?? 1,
        DestinationName: activity?.name,
      }),
    })
      .then((res) => {
        navigate("/packages/" + res.data[0].id);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    axios({
      url: url1,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Attaching the form data
      data: JSON.stringify({
        PackageName: packageName.letter,
        Duration: 9,
        activities: activity.activities,
        Destination: activity?.id ?? 1,
      }),
    })
      .then((res) => {
        setActivityData(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, [activity]);

  return (
    <div>
      {ActivityData.map((ele, ind) => {
        return (
          <div key={ind} className={activityCard}>
            <input
              type="checkbox"
              name={ele.activityName}
              value={ele.id}
              onChange={onChange}
            />
            <label htmlFor={ele.activityName}>{ele.activityName}</label>
            <p>{ele.description}</p>
          </div>
        );
      })}
      <button onClick={onClick}>Check Activities</button>
    </div>
  );
};

export default ActivitySelector;
