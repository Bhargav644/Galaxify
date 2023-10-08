/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/
import { landingWrapper, planetDiv } from "./styles";
import Planet from "../../components/planets/index";
import Cloud from "../../assets/cloud.png";
import Earth from "../../assets/earth.jpeg";
import StarsModel from "../../components/stars";
import Navbar from "../../components/navBar";
import { useNavigate } from "react-router-dom";

function LandingModule() {
  const navigate = useNavigate();
  return (
    <div id="here" className={landingWrapper}>
      <Navbar />
      <div className="landingPageText">
        <p>Escape the Exosphere</p>
      </div>
      <StarsModel />
      <div className={planetDiv}>
        <Planet
          atmosphereTexture={Cloud}
          planetTexture={Earth}
          planetRadius={3}
        />
      </div>
      <div className="buttonWrapper">
        <button className="grey" onClick={() => navigate("/destination")}>
          EXPLORE
        </button>
        <button className="blue" onClick={() => navigate("/quiz")}>
          GET STARTED
        </button>
      </div>
    </div>
  );
}

export default LandingModule;
