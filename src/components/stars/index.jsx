import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { starsDiv } from './styles'

function StarsModel() {
  return (
    <div className={starsDiv}>
        <Canvas>
            <Stars count={20000} factor={7} depth={60} radius={60} saturation={0} fade/>
        </Canvas>
    </div>
  )
}

export default StarsModel