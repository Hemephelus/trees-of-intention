import React from 'react'
import Garden from './threeJS/Garden'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import GiveGratitude from './pages/give_gratitude/GiveGratitude'




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
      <Canvas    camera={{
                            fov: 50,
                            near: 1,
                            far: 100,
                            position: [ 0, 0, 1 ],
                        }}>
        <Garden/>    
      </Canvas>
    </KeyboardControls>
    <div className='absolute left-2 bottom-[100%] w-[50%] h-[5vh] top-2 rounded-[20px]'>
      {/* <div className='rounded-[30px]'> */}
         <GiveGratitude/>
      {/* </div> */}
    </div>
  
    </>
  )
}

export default App