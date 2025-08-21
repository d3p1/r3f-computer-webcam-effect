/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'

export const App = () => {
  return (
    <Canvas camera={{position: [1, 1, 1]}}>
      <OrbitControls makeDefault={true} />

      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}
