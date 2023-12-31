/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Camera } from "three";

export function CameraModel(props) {
  const { nodes, materials } = useGLTF("/camera.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|burnished_steel"].geometry}
        material={materials.burnished_steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|textured_rubber"].geometry}
        material={materials.textured_rubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|brushed_bronze"].geometry}
        material={materials.brushed_bronze}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|brushed_steel"].geometry}
        material={materials.brushed_steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|cast_titanium"].geometry}
        material={materials.cast_titanium}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|polished_bronze"].geometry}
        material={materials.Soft_Leather_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|brushed_steel-2"].geometry}
        material={materials["brushed_steel-2"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|color"].geometry}
        material={materials.color}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["|Camara_VISUALIZE|Root|light_grey_high_gloss_plastic"].geometry
        }
        material={materials.light_grey_high_gloss_plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|chromium_plate"].geometry}
        material={materials.chromium_plate}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|textured_rubber-3"].geometry}
        material={materials.Polished_Leather}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|textured_rubber-4"].geometry}
        material={materials.Polished_Leather}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|polished_steel"].geometry}
        material={materials.polished_steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|matte_iron"].geometry}
        material={materials.matte_iron}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|polished_copper"].geometry}
        material={materials.polished_copper}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|machined_steel"].geometry}
        material={materials.machined_steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|matte_steel"].geometry}
        material={materials.matte_steel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|Camara_VISUALIZE|Root|clear_glass"].geometry}
        material={materials.clear_glass}
      />
    </group>
  );
}

useGLTF.preload("/camera.gltf");
export default CameraModel;
