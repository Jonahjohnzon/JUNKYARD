import React, { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Model } from '../Model/Model'
import { PerspectiveCamera } from '@react-three/drei'

const Meshs = () => {
    return (
        <>
        <PerspectiveCamera makeDefault position={[20,30,5]} />
        <mesh>
            <hemisphereLight intensity={1.5} groundColor="black"/>
            <pointLight intensity={1}/>
        </mesh>
        <Model scale = {20} position = {[1, -10, -23]} rotation = {[0, 6.5, 0]}/>       
        </>
    )
}
const Firstmain = () => {
  return (
    <section className='absolute w-full bottom-0 right-0 h-full hidden md:flex '>
        <Canvas
        shadows
        gl={{preserveDrawingBuffer: true}}>
        <Suspense fallback={null}/>
        <OrbitControls enableZoom = {false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            minAzimuthAngle={Math.PI/2}
            maxAzimuthAngle={Math.PI/2}
        />
        <Meshs/>
        </Canvas>
    </section>
  )
}

export default Firstmain