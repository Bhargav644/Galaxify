/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"

function Sphere(props) {
  const {texture,radius,isTransparent=false,opacity=1,mashRef}=props;
  const colorMap=useLoader(TextureLoader,texture)
  return (
        <mesh ref={mashRef} rotation={[0,0,0]}>
          <sphereGeometry args={[radius,64,64]}/>
          <meshBasicMaterial map={colorMap} transparent={isTransparent} opacity={opacity}/>
        </mesh>
  )
}

export default Sphere