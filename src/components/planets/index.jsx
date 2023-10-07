/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import Sphere from '../models'
import { useRef,useEffect} from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function Planet(props) {
    const {atmosphereTexture,planetTexture,planetRadius,enableZoom=false}=props;
    const atmosphereMeshRef=useRef();
    const planetMeshRef=useRef();
    const canvasRef=useRef();
    const whiteColor = new THREE.Color(0xffffff);
    useEffect(()=>{
        canvasRef.current.style.transform="translateY(26%)"
    },[])
    

  return (
    <Canvas ref={canvasRef}>
        <Sphere position={[0,0,0]} isAtmosphere={true} meshRef={atmosphereMeshRef} texture={atmosphereTexture} radius={planetRadius+0.02} isTransparent={true} opacity={0.19}/>
        <ambientLight intensity={1} color={whiteColor} />
        <pointLight position={[0, 600, 900]} color={whiteColor} />
        <directionalLight position={[4,5,2]} intensity={1} castShadow={true} color={whiteColor}/>
        <Sphere position={[0,0,0]} meshRef={planetMeshRef} texture={planetTexture} radius={planetRadius}/>
        <OrbitControls enableZoom={enableZoom}/>
    </Canvas>
  )
}

export default Planet