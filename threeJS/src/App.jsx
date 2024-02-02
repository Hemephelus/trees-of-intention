import React from 'react'
import Garden from './Garden'
import { Canvas } from '@react-three/fiber'



const App = () => {

  return (
    <> 
      <Canvas>
        <Garden/>    
      </Canvas>
    </>
  )
}

export default App