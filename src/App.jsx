import React, {useEffect, useState} from 'react'
import Garden from './threeJS/Garden'
import Audio from './Audio'
import { Canvas } from '@react-three/fiber'
import { KeyboardControls } from '@react-three/drei'
import GiveGratitude from './pages/give_gratitude/GiveGratitude'
import useStore from './stores/useStore'


const App = () => {

  const gratitude = useStore(state => state.gratitude)
  const slowdown = useStore(state => state.slowdown)
  const responsibility = useStore(state => state.responsibility)


  const [intentions, setIntentions] = useState('')

  console.log(intentions)

  useEffect(() => {
    if(gratitude){
      setIntentions('give-gratitude')
    }
    if(slowdown){
      setIntentions('slow-down')
    }
    if(responsibility){
      setIntentions('take-responsibility')
    }

  }, [gratitude, slowdown, responsibility])

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
         {intentions !== '' && <GiveGratitude intention={intentions} /> }
      {/* </div> */}
    </div>
  
      <Audio/>
    </>
  )
}

export default App