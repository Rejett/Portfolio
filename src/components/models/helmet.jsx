"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Helmet(props) {
  const { nodes, materials } = useGLTF("/models/helmet-transformed.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      scale={[1.3, 1.3, 1.3]}
      rotation={[0.4, -1, 0]}
      position={[0, -0.8, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.hormbase_lp_Helmet_material_0.geometry}
        material={materials.Helmet_material}
        position={[0.768, 0.708, -0.129]}
        rotation={[-2.334, 1.332, 0.807]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.horm_lp_Horn_material_0.geometry}
        material={materials.Horn_material}
        position={[0.794, 0.713, -0.133]}
        rotation={[-1.512, -0.165, 0.174]}
      />
    </group>
  );
}

useGLTF.preload("/models/helmet-transformed.glb");
