/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { cardWrapper } from "./styles";

function PlanetCard({planet,clickHandler}) {
  return (
    <div onClick={clickHandler} className={cardWrapper()}>
        <img src={planet.image} className="planetImg" width={100} height={40}/>
      <div className="footer">
          <p className="footer-text">
            {planet.name}
          </p>
      </div>
    </div>
  )
}

export default PlanetCard;