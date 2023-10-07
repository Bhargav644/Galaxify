/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import Sphere from '../models'
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


function Planet(props) {
    const {atmosphereTexture,planetTexture,planetRadius,enableZoom=false}=props;
    const atmosphereMeshRef=useRef();
    const planetMeshRef=useRef();
  return (
    <Canvas>
          <Sphere ref={atmosphereMeshRef} texture={atmosphereTexture} radius={planetRadius+0.07} isTransparent={true} opacity={0.1}/>
          <OrbitControls enableZoom={enableZoom}/>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <directionalLight position={[-400,500,200]} intensity={1} castShadow={true} color={123123}/>
          <directionalLight position={[-400,5,200]} intensity={1}/>
          <Sphere ref={planetMeshRef} texture={planetTexture} radius={planetRadius}/>
    </Canvas>
  )
}

export default Planet