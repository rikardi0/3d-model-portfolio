import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/modeloPrueba.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rootNode2.geometry}
        material={nodes.rootNode2.material}
      />
    </group>
  );
}

useGLTF.preload("/modeloPrueba.gltf");
export default Model;
