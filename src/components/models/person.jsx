"use client";
import React, { useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function PersonModel(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/person-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta, xrFrame) => {
    group.current.position.y = -1.9 + Math.sin(state.clock.elapsedTime) * 0.15;
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={[0.04, 0.04, 0.04]}
      position={[0, -2, 0]}
      rotation={[0.3, 0, 0]}
    >
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials["07_-_Default"]}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials["09_-_Default"]}
          skeleton={nodes.Object_8.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/person-transformed.glb");
