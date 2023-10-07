/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property*/

import Sphere from '../models'
import { useRef,useEffect} from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Planet(props) {
    const {atmosphereTexture,planetTexture,planetRadius,enableZoom=false}=props;
    const atmosphereMeshRef=useRef();
    const planetMeshRef=useRef();
    const canvasRef=useRef();
    useEffect(()=>{
        canvasRef.current.style.transform="translateY(26%)"
    },[])
    

  return (
    <Canvas ref={canvasRef}>
        <Sphere position={[0,0,0]} isAtmosphere={true} meshRef={atmosphereMeshRef} texture={atmosphereTexture} radius={planetRadius+0.02} isTransparent={true} opacity={0.19}/>
        {/* <ambientLight intensity={1} /> */}
        {/* <pointLight position={[10, 10, 10]} /> */}
        {/* <directionalLight position={[-400,500,200]} intensity={1} castShadow={true} color={123123}/> */}
        {/* <directionalLight position={[-400,5,200]} intensity={1}/> */}
        <Sphere position={[0,0,0]} meshRef={planetMeshRef} texture={planetTexture} radius={planetRadius}/>
        <OrbitControls enableZoom={enableZoom}/>
    </Canvas>
  )
}

export default Planet