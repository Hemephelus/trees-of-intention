import * as THREE from 'three'
import { useGLTF, Text3D, useMatcapTexture, Html } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import GiveGratitude from '../pages/give_gratitude/GiveGratitude'
import useStore from '../stores/useStore'




// import tree1 from './models/tree1.gltf'
// import tree2 from './models/tree2.gltf'
// import tree3 from './models/tree3.gltf'

// const matColor = useMatcapTexture('/photos/293D21_ABC692_73B255_667C5C.png')

export const Slowdown = () => {
    const { nodes, materials } = useGLTF('/models/tree1.gltf')
    const chair = useGLTF('/models/chair.gltf')

    


    return (
      <>
      <RigidBody type='fixed' restitution={0} friction={1}>
        <group dispose={null}>
          <group position={[1, -1, -3]}>
            <Text3D font={'/font/Satoshi_Bold Italic.json'} size={0.5}>
              Slowdown
              <meshNormalMaterial/>
            </Text3D>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Group_152.geometry}
              material={materials["wood.011"]}
              position={[-0.645, 0, 0.589]}
              scale={0.766}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Group_154.geometry}
              material={materials["leaves.001"]}
              position={[0, 1.725, 0]}
            />
          </group>
        </group>
        <group dispose={null} position={[1, -1, -3.5]} >
        <mesh
          rotation={[0, - Math.PI * 0.2 ,0]}
          castShadow
          receiveShadow
          geometry={chair.nodes.chair.geometry}
          material={chair.materials["BrownDark.052"]}
        />
        <mesh
           position={[-1.5, 0, 0]}
           rotation={[0,  Math.PI * 0.2 ,0]}
          castShadow
          receiveShadow
          geometry={chair.nodes.chair.geometry}
          material={chair.materials["BrownDark.052"]}
        />
        </group>
      </RigidBody>

      </>

        
      )
}

export const Gratitude = () => {
    const { nodes, materials } = useGLTF('/models/tree2.gltf')
    const chair = useGLTF('/models/chair.gltf')

    return(
      <>
      <RigidBody type='fixed' restitution={0} friction={1}>
        <group dispose={null}>
        <group position={[-5, -1, 3]} scale={0.97}>
           <Text3D font={'/font/Satoshi_Bold Italic.json'} size={0.5}>
              Gratitude
              <meshNormalMaterial/>

           </Text3D>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_28.geometry}
            material={materials["wood.013"]}
            position={[-0.665, 0, 0.607]}
            scale={0.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Group_30.geometry}
            material={materials["leaves.003"]}
            position={[0, 1.788, 0]}
            scale={0.573}
          />
          <group dispose={null} position={[-2, 0, 0]} rotation-y={Math.PI * 0.5}  >
            <mesh
              rotation={[0, - Math.PI * 0.2 ,0]}
              castShadow
              receiveShadow
              geometry={chair.nodes.chair.geometry}
              material={chair.materials["BrownDark.052"]}
            />
            <mesh
              position={[-1.5, 0, 0]}
              rotation={[0,  Math.PI * 0.2 ,0]}
              castShadow
              receiveShadow
              geometry={chair.nodes.chair.geometry}
              material={chair.materials["BrownDark.052"]}
            />
          </group>
        </group>
  
      </group>
      </RigidBody>
      <Html occlude
          style={{
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,

          }}
      >
        {/* <GiveGratitude/> */}
      </Html>
      </>

  
  

    )
}

export const Responsibility = () => {
    const { nodes, materials } = useGLTF('/models/tree3.gltf')
    const chair = useGLTF('/models/chair.gltf')

    return (
      <RigidBody type='fixed' restitution={0} friction={1}>
        <group dispose={null}>
          <group position={[5, -1, 3]}>
           <Text3D font={'/font/Satoshi_Bold Italic.json'} size={0.5}>
              Responsibility
              <meshNormalMaterial/>

           </Text3D>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Group_18.geometry}
              material={materials["wood.012"]}
              position={[-0.645, 0, 0.589]}
              scale={[0.766, 0.582, 0.766]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Group_20.geometry}
              material={materials["leaves.002"]}
              position={[0, 1.278, 0]}
            />

              <group dispose={null} position={[1, 0, -1]} rotation-y={-Math.PI * 0.1}  >
                  <mesh
                    rotation={[0, - Math.PI * 0.2 ,0]}
                    castShadow
                    receiveShadow
                    geometry={chair.nodes.chair.geometry}
                    material={chair.materials["BrownDark.052"]}
                  />
                  <mesh
                    position={[-0.5, 0, 3]}
                    rotation={[0, - Math.PI * 0.7 ,0]}
                    castShadow
                    receiveShadow
                    geometry={chair.nodes.chair.geometry}
                    material={chair.materials["BrownDark.052"]}
                  />
              </group>
          </group>
        </group>
      </RigidBody>
      );
}




const Intentions = () => {
 

  return (
    <>
        <Slowdown/>
        <Gratitude/>
        <Responsibility/>   
    </>
  )
}

export default Intentions