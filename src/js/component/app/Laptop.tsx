/**
 * @description Laptop
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {Html, PresentationControls, useGLTF} from '@react-three/drei'
import {useControls} from 'leva'

export const Laptop = () => {
  const model = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  )

  const {distanceFactor, position, rotation} = useControls('iframe', {
    distanceFactor: {
      value: 0.9,
      min: 0,
      max: 5,
      step: 0.01,
    },
    position: {
      value: {
        x: -1.3,
        y: 0.5,
        z: -10,
      },
      step: 0.01,
    },
    rotation: {
      value: -0.2,
      min: -2 * Math.PI,
      max: 2 * Math.PI,
      step: 0.01,
    },
  })

  return (
    <PresentationControls
      global={true}
      polar={[-Math.PI / 2, Math.PI / 2]}
      azimuth={[-Math.PI / 4, Math.PI / 4]}
    >
      <primitive object={model.scene} position-y={-1}>
        <Html
          transform={true}
          distanceFactor={distanceFactor}
          position={[position.x, position.y, position.z]}
          rotation-x={rotation}
          center={true}
        >
          <iframe
            src="https://radufromfinland.com/decodeTheDrawings/"
            width={3024}
            height={1964}
          />
        </Html>
      </primitive>
    </PresentationControls>
  )
}
