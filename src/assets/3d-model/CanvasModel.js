import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./CanvasModel.css";

function CanvasModel(props) {
  const transitionTime = 1000;

  const [isTransitionComplete, setTransitionComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionComplete(true);
    }, transitionTime);

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Determine the background color based on whether the transition is complete
  const backgroundColor = isTransitionComplete ? "#FFFFFF" : "#FFFFFF";

  return (
    <section id="container">
      <div id="container-triangle-left">
        <div className="triangle-background" id="black-background"></div>
        <div className="triangle-background" id="orange-background"></div>
      </div>
      <div id="canvas-container">
        {isTransitionComplete ? (
          <div id="canvas-container">
            <Canvas
              camera={{
                zoom: props.zoom,
                position: [props.x, props.y, props.z],
                fov: 60,
              }}
            >
              <ambientLight intensity={0.5} />
              <pointLight
                position={[0, 1.5, 2]}
                intensity={20}
                color={"white"}
              />
              <pointLight position={[2, 0, 0]} intensity={2} color={"white"} />
              <pointLight
                position={[0, 0, 2]}
                intensity={5}
                color={"#F3AB5E "}
              />
              <pointLight
                position={[0, 0, -1]}
                intensity={1}
                color={"#1c3833"}
              />

              <Suspense fallback={null}>
                <group position={[0, props.verticalAdjustment, 0]}>
                  {props.modelo}
                </group>
              </Suspense>
              <OrbitControls
                enablePan={true}
                panSpeed={0.00005}
                autoRotate={true}
              />
            </Canvas>
          </div>
        ) : (
          <div id="loading-screen">
            <div class="spinner"></div>
          </div>
        )}
      </div>
      <div id="container-triangle-right">
        <div className="triangle-background" id="black-background"></div>
        <div className="triangle-background" id="orange-background"></div>
      </div>
    </section>
  );
}

export default CanvasModel;
