/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Environment, Float, PresentationControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Leva} from 'leva'
import {Laptop} from './app/Laptop.tsx'

export const App = () => {
  return (
    <>
      <Canvas camera={{fov: 45, position: [1, 1, 5]}}>
        <Environment preset="apartment" environmentIntensity={0.8} />
        <PresentationControls
          global={true}
          snap={true}
          polar={[-Math.PI / 16, Math.PI / 16]}
          azimuth={[-Math.PI / 16, Math.PI / 16]}
        >
          <Float>
            <Laptop position-y={-1} />
          </Float>
        </PresentationControls>
      </Canvas>
      <Leva collapsed={true} />
    </>
  )
}
