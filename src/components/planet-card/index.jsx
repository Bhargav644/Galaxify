/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { Link } from "react-router-dom";
import { cardWrapper } from "./styles";

function PlanetCard({planet,clickHandler}) {
  return (
    <div onClick={clickHandler} className={cardWrapper()}>
        <img src={planet.image} className="planetImg" width={100} height={40}/>
      <div className="footer">
          <p className="footer-text">
            {planet.name}
          </p>
          <p>
            <button>
              <Link className="link" to={`/destinations/${planet.name}`}>
                Select
              </Link>
            </button>
          </p>
      </div>
    </div>
  )
}

export default PlanetCard;