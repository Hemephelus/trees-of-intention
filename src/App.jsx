import React from 'react'
import Garden from './threeJS/Garden'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'




const App = () => {

  return (
    <> 
    <KeyboardControls
         map={ [
          { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
          { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
          { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
          { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
          { name: 'jump', keys: [ 'Space' ] },
      ]}
    >
      <Canvas>
        <Garden/>    
      </Canvas>
    </KeyboardControls>
    </>
  )
}

export default App