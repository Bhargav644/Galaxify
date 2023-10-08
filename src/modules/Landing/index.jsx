/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/
import { landingWrapper, planetDiv } from "./styles";
import Planet from "../../components/planets/index";
import Cloud from "../../assets/cloud.png";
import Earth from "../../assets/earth.jpeg";
import StarsModel from "../../components/stars";
import Navbar from "../../components/navBar";

function LandingModule() {
  return (
    <div id="here" className={landingWrapper}>
      <Navbar />
      <StarsModel />
      <div className={planetDiv}>
        <Planet
          atmosphereTexture={Cloud}
          planetTexture={Earth}
          planetRadius={3}
          showAtmosphere={true}
        />
      </div>
    </div>
  );
}

export default LandingModule;
