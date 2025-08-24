/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Leva, useControls} from 'leva'
import {Laptop} from './app/Laptop.tsx'

export const App = () => {
  const {color, opacity, blur} = useControls('shadow', {
    color: '#000000',
    opacity: {
      value: 0.5,
      min: 0,
      max: 1,
    },
    blur: {
      value: 5,
      min: 0,
      max: 20,
    },
  })

  return (
    <>
      <Canvas camera={{fov: 45, position: [1, 1, 5]}}>
        <Environment preset="apartment" environmentIntensity={0.8} />

        <ContactShadows
          position={[0, -1, 0]}
          color={color}
          opacity={opacity}
          blur={blur}
          frames={1}
        />

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
