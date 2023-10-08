/* eslint-disable react/prop-types */
import "./styles.css";
import roverImg from "../../assets/animated-rover-in-space.png";
import { Link, useParams } from "react-router-dom";
import { capitalize } from "../../helpers";

const PackageCard = ({ data, link = false }) => {
  const { destination } = useParams();
  return (
    <Link to={link ? `/packages/${data.id}`: ""} className="pkg__container">
      <div className="pkg__top">
        <img
          className="pkg__img"
          src={data?.ImageUrl ?? roverImg}
          alt="rover"
        />
      </div>
      <div className="pkg__bottom">
        <div className="pkg__heading">
          <div className="pkg__headingText">
            {data.PackageName}
            <br />
            <span>Destination: {capitalize(destination)}</span>
          </div>
          {data.Duration && (
            <div className="pkg__price">Only {data.Duration} Space Coin</div>
          )}
        </div>
        {data.ActivityIDs && (
          <div className="pkg__trip">
            This Trip consists of {data.ActivityIDs.length} activities
          </div>
        )}
        {data.description && <div className="pkg__desc">{data.description}</div>}
      </div>
    </Link>
  );
};

export default PackageCard;
