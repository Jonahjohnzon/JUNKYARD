/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.4 model.glb --transform --types --aggressive
Author: Rika Mardjaja (https://sketchfab.com/Rika.Mardjaja)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gameboy-challenge-1c7378f4de9b4ff99e58d01ca132ad89
Title: Gameboy Challenge
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    pCube3_gembBOI__0: THREE.Mesh
    pCube3_BUTT_ON_0: THREE.Mesh
  }
  materials: {
    gembBOI: THREE.MeshBasicMaterial
    BUTT_ON: THREE.MeshBasicMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/src/assets/3Dasset/gameboy/modelgame.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.pCube3_gembBOI__0.geometry} material={materials.gembBOI} scale={0.006} />
      <mesh geometry={nodes.pCube3_BUTT_ON_0.geometry} material={materials.BUTT_ON} scale={0.006} />
    </group>
  )
}

useGLTF.preload('/assets/3Dasset/gameboy/modelgame.glb')
