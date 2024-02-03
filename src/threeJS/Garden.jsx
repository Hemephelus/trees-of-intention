import React from 'react'
import '../app.css'
import {extend, useFrame, useThree} from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls, Sky, useGLTF, useTexture, Environment} from '@react-three/drei'
import CustomObject from './CustomObject'
import Intentions from './Intentions'
import Player from './Player'
import { Physics } from '@react-three/rapier'
import { RigidBody } from '@react-three/rapier'
import * as THREE from 'three'


const Garden = () => {
 
    const {camera,gl} = useThree()
  
    const cubeRef = useRef()
    const sphereRef =useRef()
    const group = useRef()

    const wall1 = useTexture('/photos/wall.JPG')
    const wall2 = useTexture('/photos/wall2.JPG')
    const wall3 = useTexture('/photos/wall3.JPG')
    const wall4 = useTexture('/photos/wall4.JPG')

    wall1.wrapS = wall1.wrapT = THREE.RepeatWrapping
    wall1.repeat.set(3,1)
    
    // useFrame((state,delta) =>{
    // // const angle = state.clock.elapsedTime
    // // state.camera.position.x = Math.sin(angle) * 5
    // // state.camera.position.z = Math.cos(angle) * 5
    // // state.camera.lookAt(0,0,0)
    
    // cubeRef.current.rotation.y += delta
    // // sphereRef.current.rotation.y += delta
    // // group.current.rotation.y += delta/2
    
    
    // })
    const house2 = useGLTF('/models/house2.gltf')
    
      return (
        <> 

    
    
           <directionalLight position={[1,2,3]} intensity={1.2}/>
           <ambientLight intensity={0.5}/>
           <Sky/>
         
    
           {/* <group ref={group}>
             <mesh ref={cubeRef} position={[2,0,0]} scale={1.5} rotation-y={Math.PI *0.25}>
                  <boxGeometry />
                  <meshStandardMaterial color='mediumpurple'/>
              </mesh>  
    
              <mesh ref={sphereRef} position={[-2,0,0]}  rotation-y={Math.PI *0.25}>
                  <sphereGeometry />
                  <meshStandardMaterial color='orange' />
               </mesh>          
           </group> */}

          <Physics>
            <RigidBody type='fixed' restitution={0} friction={1}>
                  //house1
                    {/* <group dispose={null} position={[-10,-1,-5]} scale={2}>
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={house2.nodes.Mesh_house_type08.geometry}
                      material={house2.materials.border}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={house2.nodes.Mesh_house_type08_1.geometry}
                      material={house2.materials.window}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={house2.nodes.Mesh_house_type08_2.geometry}
                      material={house2.materials.main}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={house2.nodes.Mesh_house_type08_3.geometry}
                      material={house2.materials.roof}
                    />
                    <mesh
                      castShadow
                      receiveShadow
                      geometry={house2.nodes.Mesh_house_type08_4.geometry}
                      material={house2.materials.door}
                    />
                  </group> */}

              <mesh position={[0,-1,0]} scale={30} rotation-x={- Math.PI *0.5}>
                  <planeGeometry/>
                  <meshStandardMaterial color='black' />
              </mesh>   

              <mesh position={[10,1,0]}  rotation-y={- Math.PI *0.5}>
                  <boxGeometry args={[20, 5]}/>
                  <meshStandardMaterial map={wall1} />
              </mesh>
              <mesh position={[-10,1,0]}  rotation-y={ Math.PI *0.5}>
                  <boxGeometry args={[20, 5]}/>
                  <meshStandardMaterial map={wall1} />
              </mesh>
            <group >
              <mesh position={[0,1,10]} rotation-y={Math.PI }>
                    <planeGeometry args={[20, 5]} />
                    <meshStandardMaterial map={wall1} />
                </mesh>

            </group>
            

              <mesh position={[0,1,-10]}  >
                  <boxGeometry args={[20, 5]}/>
                  <meshStandardMaterial map={wall1} />
              </mesh>
            </RigidBody>
    
           <CustomObject/>
           <Intentions/>  
           <Player/>
          </Physics>

        </>
      )
    }
    

export default Garden