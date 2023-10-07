/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/
import { landingWrapper,planetDiv} from "./styles"
import Planet from "../../components/planets/index";
import Cloud from "../../assets/cloud.png"
import Earth from "../../assets/earth.jpeg"
import StarsModel from "../../components/stars";

function LandingModule() {

  return (
    <div id="here" className={landingWrapper}>
      <div className="landingPageText">
        <p>Escape the Exosphere</p>
      </div>
      <StarsModel/>
      <div className={planetDiv}>
          <Planet atmosphereTexture={Cloud} planetTexture={Earth}  planetRadius={3}/>
      </div>
    </div>
  )
}

export default LandingModule