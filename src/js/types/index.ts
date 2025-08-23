/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {type GLTF} from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    Circle001: THREE.Mesh
    Circle001_1: THREE.Mesh
    Circle001_2: THREE.Mesh
    Circle001_3: THREE.Mesh
    Circle001_4: THREE.Mesh
    Circle001_5: THREE.Mesh
    Circle001_6: THREE.Mesh
    Circle006: THREE.Mesh
    Circle006_1: THREE.Mesh
    FrontCameraRing001: THREE.Mesh
    Circle: THREE.Mesh
    Circle_1: THREE.Mesh
    Circle_2: THREE.Mesh
    KeyboardKeyHole: THREE.Mesh
    RubberFoot: THREE.Mesh
    Circle012: THREE.Mesh
    Circle012_1: THREE.Mesh
    Circle009: THREE.Mesh
    Circle009_1: THREE.Mesh
    Circle003: THREE.Mesh
    Circle003_1: THREE.Mesh
    Circle002: THREE.Mesh
    Circle002_1: THREE.Mesh
    Circle002_2: THREE.Mesh
    Circle002_3: THREE.Mesh
    Circle002_4: THREE.Mesh
    AppleLogo000: THREE.Mesh
  }
  materials: {
    ['Frame.001']: THREE.MeshStandardMaterial
    HeadPhoneHole: THREE.MeshStandardMaterial
    USB_C_INSIDE: THREE.MeshStandardMaterial
    TouchbarBorder: THREE.MeshStandardMaterial
    Keyboard: THREE.MeshStandardMaterial
    ['CameraRIngBlack.002']: THREE.MeshStandardMaterial
    ['Keyboard.001']: THREE.MeshStandardMaterial
    Key: THREE.MeshStandardMaterial
    Touchbar: THREE.MeshStandardMaterial
    DarkRubber: THREE.MeshStandardMaterial
    HingeBlack: THREE.MeshStandardMaterial
    HingeMetal: THREE.MeshStandardMaterial
    SpeakerHole: THREE.MeshStandardMaterial
    ['Frame.001']: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    ScreenGlass: THREE.MeshStandardMaterial
    Rubber: THREE.MeshStandardMaterial
    DisplayGlass: THREE.MeshStandardMaterial
    ['AppleLogo.004']: THREE.MeshStandardMaterial
  }
}
