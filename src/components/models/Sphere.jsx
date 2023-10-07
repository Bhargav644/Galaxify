import { useFrame} from "@react-three/fiber";
import { useRef } from "react";

function Sphere() {
  const ref=useRef();

  useFrame(()=>(ref.current.rotation.x+=0.01))

  return (
    <mesh>
    </mesh>
   
  )
}

export default Sphere