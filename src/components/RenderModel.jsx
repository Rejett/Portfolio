"use client";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import React, { Suspense } from "react";

export default function RenderModel({ children, className, preset }) {
  return (
    <Canvas className={clsx("w-screen h-screen -z-10 relative", className)}>
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset={preset} />
    </Canvas>
  );
}