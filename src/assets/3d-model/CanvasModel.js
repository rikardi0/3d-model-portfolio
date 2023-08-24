import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PruebaModelo from "../3d-model/Camera/PruebaModelo";
import "./CanvasModel.css";

function CanvasModel() {
  return (
    <section id="container">
      <div id="container-triangle-left">
        <div className="triangle-background" id="orange-background"></div>
        <div className="triangle-background" id="black-background"></div>
      </div>
      <div id="canvas-container">
        <Canvas camera={{ zoom: 1.25, position: [5, 10, 25] }}>
          <ambientLight intensity={5} />
          <pointLight position={[35, 35, 0]} intensity={4} />
          <pointLight position={[-35, 35, 0]} intensity={4} />
          <Suspense fallback={null}>
            <group position={[0, -15, 0]}>
              <PruebaModelo />
            </group>
          </Suspense>
          <OrbitControls autoRotate={true} />
        </Canvas>
      </div>
      <div id="container-triangle-right">
        <div className="triangle-background" id="black-background"></div>
        <div className="triangle-background" id="orange-background"></div>
      </div>
    </section>
  );
}

export default CanvasModel;
