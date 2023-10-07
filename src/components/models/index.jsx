/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader"
import {useFrame} from "@react-three/fiber"

function Sphere(props) {
  const {texture,radius,isTransparent=false,opacity=1,meshRef,position,isAtmosphere=false}=props;
  useFrame(({clock})=>{
    const elapsedTime=clock.elapsedTime/6;
    if(isAtmosphere){
      meshRef.current.rotation.x=elapsedTime*3
    }else{
      meshRef.current.rotation.y=elapsedTime;
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