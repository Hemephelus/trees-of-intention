import { useEffect, useRef, useState } from 'react'
import { useAnimations, useFBX, useGLTF, meshBounds} from '@react-three/drei'
import { useKeyboardControls } from '@react-three/drei'
import { useRapier, RigidBody, CapsuleCollider} from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Player = () => {
    const group = useRef()

    const body = useRef()
    const [subscribeKeys, getKeys] = useKeyboardControls()
    const { rapier, world} = useRapier()
    // const rapierWorld = world.raw()


    const [ smoothCameraPosition ] = useState(() => new THREE.Vector3(10, 10, 10))
    const [ smoothCameraTarget ] = useState(() => new THREE.Vector3())


  

    // const {animations: walking} = useFBX('animations/Walking.fbx')
    // const {animations: right} = useFBX('animations/RightTurn.fbx')
    // const {animations: left} = useFBX('animations/LeftTurn.fbx')
    // walking[0].name = 'Walking'
    // right[0].name = 'Right'
    // left[0].name = 'Left'
    // const {actions} = useAnimations(walking, group)
    // const {actions: actionsRight} = useAnimations(right, group)

    useEffect(() => {
        // actions['Walking'].reset().play()
    })

    useFrame((state, delta) => {
        const {forward, backward, leftward, rightward} = getKeys()

        const impulse ={ x: 0, y: 0, z: 0}
        const torque = { x: 0, y:0, z:0}

        let impulseStrength = 0.5 * delta
        const torqueStrength = 0.01 * delta

        if(forward)
        {
            impulse.z -= impulseStrength
            torque.x -= torqueStrength
        }

        if(rightward)
        {
            impulse.x += impulseStrength
            // torque.z -= torqueStrength
        }

        if(backward)
        {
            impulse.z += impulseStrength
            torque.x += torqueStrength
        }
        
        if(leftward)
        {
            impulse.x -= impulseStrength
            // torque.z += torqueStrength
        }



        body.current.applyImpulse(impulse)
        body.current.applyTorqueImpulse(torque)

         /* 
            Camera
             */
            const bodyPosition = body.current.translation()

            const cameraPosition = new THREE.Vector3()
            cameraPosition.copy(bodyPosition)
            cameraPosition.z += 2.25
            cameraPosition.y += 0.85

            const cameraTarget = new THREE.Vector3()
            cameraTarget.copy(bodyPosition)
            cameraTarget.y += 0.25
            // cameraTarget.z -= 0.2

            smoothCameraPosition.lerp(cameraPosition, 5 * delta)
            smoothCameraTarget.lerp(cameraTarget, 5 * delta)


            state.camera.position.copy(smoothCameraPosition)
            state.camera.lookAt(smoothCameraTarget)

            // console.log(bodyPosition)

            if(bodyPosition.y < 0 && bodyPosition.z < -2 && bodyPosition.x > 0)
            {
            //    console.log('slowdown')
            }

            if(bodyPosition.y < 1 && bodyPosition.z > 3 && bodyPosition.x < 4)
            {
            //    console.log('gratitude')
            }

            if(bodyPosition.y < 1 && bodyPosition.z > 3 && bodyPosition.x > 5)
            {
            //    console.log('responsibility')
            }

    
            
            {

    }})

    return (
        <>
     <RigidBody ref={body} colliders='cuboid' restitution={0} friction={1} canSleep={false} 
            linearDamping={ 2.5 }
            angularDamping={ 0.5 } >
             <mesh castShadow>
                <icosahedronGeometry args={[ 0.15, 3]}/>
                <meshStandardMaterial flatShading color ='grey'/>
            </mesh>
                {/* <group ref={group} dispose={null} position={[0,0,0]} scale={0.5}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_bear.geometry}
                    material={materials["BrownDark.036"]}
                    rotation={[Math.PI / 2, 0, 0]}
                >
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_bearArmLeft.geometry}
                    material={materials["BrownDark.036"]}
                    position={[0.204, 0, -0.634]}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.character_bearArmRight.geometry}
                    material={materials["BrownDark.036"]}
                    position={[-0.204, 0, -0.634]}
                    />
                    <group position={[0, 0, -0.704]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube1337.geometry}
                        material={materials["Black.025"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube1337_1.geometry}
                        material={materials["BrownDark.036"]}
                    />
                    </group>
                </mesh>
                </group> */}
                {/* <CapsuleCollider args={[0.5, 0.5]}  /> */}
        </RigidBody>
      </>

    );
}

export default Player