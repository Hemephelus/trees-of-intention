import React from 'react'
import Garden from './Garden'
import Audio from './Audio'
import { Canvas } from '@react-three/fiber'

const App = () => {

  return (
    <> 
      <Canvas>
        <Garden/>
      </Canvas>
      <Audio/>
    </>
  )
}

export default App