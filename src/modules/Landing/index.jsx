/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { landingWrapper } from "./styles"
import Planet from "../../components/planets/index";
import Cloud from "../../assets/cloud.jpeg"
import Earth from "../../assets/earth.jpeg"

function LandingModule() {
  return (
    <div id="here" className={landingWrapper}>
        <Planet atmosphereTexture={Cloud} planetTexture={Earth}  planetRadius={1}/>
    </div>
  )
}

export default LandingModule