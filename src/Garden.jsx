import React from 'react'
import './app.css'
import {extend, useFrame, useThree} from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CustomObject from './CustomObject'

const Garden = () => {
    extend({OrbitControls})

    const {camera,gl} = useThree()
    
    const cubeRef = useRef()
    const sphereRef =useRef()
    const group = useRef()
    
    useFrame((state,delta) =>{
    // const angle = state.clock.elapsedTime
    // state.camera.position.x = Math.sin(angle) * 5
    // state.camera.position.z = Math.cos(angle) * 5
    // state.camera.lookAt(0,0,0)
    
    cubeRef.current.rotation.y += delta
    // sphereRef.current.rotation.y += delta
    // group.current.rotation.y += delta/2
    
    
    })
    
      return (
        <> 
    
           <directionalLight position={[1,2,3]} intensity={1.2}/>
           <ambientLight intensity={0.5}/>
           <orbitControls args={ [camera, gl.domElement] }/>
    
           <group ref={group}>
             <mesh ref={cubeRef} position={[2,0,0]} scale={1.5} rotation-y={Math.PI *0.25}>
                  <boxGeometry />
                  <meshStandardMaterial color='mediumpurple'/>
              </mesh>  
    
              <mesh ref={sphereRef} position={[-2,0,0]}  rotation-y={Math.PI *0.25}>
                  <sphereGeometry />
                  <meshStandardMaterial color='orange' />
               </mesh>          
           </group>
              
           <mesh position={[0,-1,0]} scale={10} rotation-x={- Math.PI *0.5}>
              <planeGeometry/>
              <meshStandardMaterial color='grey' />
           </mesh>   
    
           <CustomObject/>
        </>
      )
    }
    

export default Garden