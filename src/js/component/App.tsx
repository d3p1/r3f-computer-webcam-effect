/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Environment} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Leva} from 'leva'
import {Laptop} from './app/Laptop.tsx'

export const App = () => {
  return (
    <>
      <Canvas camera={{fov: 45, position: [1, 1, 5]}}>
        <Environment preset="warehouse" />
        <Laptop />
      </Canvas>
      <Leva collapsed={true} />
    </>
  )
}
