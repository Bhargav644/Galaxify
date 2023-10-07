import { landingWrapper } from "./styles"
import { Canvas } from "@react-three/fiber";
import Sphere from "../../components/models/Sphere";

function LandingModule() {
  return (
    <div id="here" className={landingWrapper}>
        <Canvas>
          <Sphere/>
        </Canvas>
    </div>
  )
}

export default LandingModule