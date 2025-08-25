/**
 * @description Environment
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {ContactShadows, Environment, Lightformer} from '@react-three/drei'
import {useFrame} from '@react-three/fiber'
import {useControls} from 'leva'

const ENV_ROTATION_AMPLITUDE = 0.05
const ENV_ROTATION_FREQUENCY = 0.0001

export const Env = () => {
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

  useFrame((state) => {
    state.scene.environmentRotation.y +=
      Math.sin(state.clock.getElapsedTime() * ENV_ROTATION_FREQUENCY) *
      ENV_ROTATION_AMPLITUDE
  })

  return (
    <>
      <Environment
        preset="apartment"
        environmentIntensity={0.8}
        resolution={1024}
        background={false}
      >
        <Lightformer
          color="hsl(300, 36%, 77%)"
          form="ring"
          position={[-0.5, 0.5, 0]}
          scale={3}
        />

        <Lightformer
          color="hsl(186, 55%, 74%)"
          form="ring"
          position={[0.5, -0.5, 0]}
          scale={3}
        />
      </Environment>

      <ContactShadows
        position={[0, -1, 0]}
        color={color}
        opacity={opacity}
        blur={blur}
        frames={1}
      />
    </>
  )
}
