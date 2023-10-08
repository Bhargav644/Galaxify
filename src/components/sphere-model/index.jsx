/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import {useFrame} from "@react-three/fiber"
import { useRef } from "react";

function Sphere(props) {
  const {texture,radius,isTransparent=false,opacity=1,meshRef,position,isAtmosphere=false,animate=false}=props;
  const currentTheta = useRef(0);

  useFrame(({clock,delta})=>{
    const elapsedTime=clock.elapsedTime/6;
    if(isAtmosphere){
      meshRef.current.rotation.x=elapsedTime*5
    }else{
      meshRef.current.rotation.y=elapsedTime;
      while(animate && currentTheta.current <= 3.14) {
      // Calculate new rotation angle based on time (or any other variable)
      currentTheta.current += delta * 0.5; // Adjust animation speed as needed

      // Apply rotation within the specified theta length
        meshRef.current.rotation.y = Math.min(currentTheta.current, 3.14);
      }
    }
  })
  const colorMap=useLoader(TextureLoader,texture)
  return (
        <mesh ref={meshRef} position={position} >
          <sphereGeometry ref={meshRef} args={[radius,64,64]}/>
          <meshBasicMaterial map={colorMap} transparent={isTransparent} opacity={opacity}/>
        </mesh>
  )
}

export default Sphere