import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dron(props) {
  const { nodes, materials } = useGLTF("/dron.gltf");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["|platos|Root|carbon_fiber_inlay_unidirectional_2d"].geometry
        }
        material={materials.carbon_fiber_inlay_unidirectional_2d}
        userData={{ name: "|platos|Root|carbon_fiber_inlay_unidirectional_2d" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|pink"].geometry}
        material={materials.pink}
        userData={{ name: "|platos|Root|pink" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|color"].geometry}
        material={materials.color}
        userData={{ name: "|platos|Root|color" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|whitesolid"].geometry}
        material={materials.whitesolid}
        userData={{ name: "|platos|Root|whitesolid" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|color-8"].geometry}
        material={materials["color-8"]}
        userData={{ name: "|platos|Root|color-8" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|orange"].geometry}
        material={materials.orange}
        userData={{ name: "|platos|Root|orange" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|cast_titanium"].geometry}
        material={materials.cast_titanium}
        userData={{ name: "|platos|Root|cast_titanium" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|brushed_titanium"].geometry}
        material={materials.brushed_titanium}
        userData={{ name: "|platos|Root|brushed_titanium" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["|platos|Root|carbon_fiber_inlay_unidirectional_2d-2"].geometry
        }
        material={materials["carbon_fiber_inlay_unidirectional_2d-2"]}
        userData={{
          name: "|platos|Root|carbon_fiber_inlay_unidirectional_2d-2",
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|wrought_iron"].geometry}
        material={materials.wrought_iron}
        userData={{ name: "|platos|Root|wrought_iron" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|matte_rubber"].geometry}
        material={materials.matte_rubber}
        userData={{ name: "|platos|Root|matte_rubber" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|black_spray_paint"].geometry}
        material={materials.black_spray_paint}
        userData={{ name: "|platos|Root|black_spray_paint" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|candy_apple_red"].geometry}
        material={materials.candy_apple_red}
        userData={{ name: "|platos|Root|candy_apple_red" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|red"].geometry}
        material={materials.red}
        userData={{ name: "|platos|Root|red" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["|platos|Root|carbon_fiber_inlay_unidirectional_2d-3"].geometry
        }
        material={materials["carbon_fiber_inlay_unidirectional_2d-3"]}
        userData={{
          name: "|platos|Root|carbon_fiber_inlay_unidirectional_2d-3",
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes["|platos|Root|carbon_fiber_inlay_unidirectional_2d-4"].geometry
        }
        material={materials["carbon_fiber_inlay_unidirectional_2d-4"]}
        userData={{
          name: "|platos|Root|carbon_fiber_inlay_unidirectional_2d-4",
        }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|default_plastic"].geometry}
        material={materials.default_plastic}
        userData={{ name: "|platos|Root|default_plastic" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|aluminum_powdercoat"].geometry}
        material={materials.aluminum_powdercoat}
        userData={{ name: "|platos|Root|aluminum_powdercoat" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|yellow"].geometry}
        material={materials.yellow}
        userData={{ name: "|platos|Root|yellow" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|burnished_aluminum"].geometry}
        material={materials.burnished_aluminum}
        userData={{ name: "|platos|Root|burnished_aluminum" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|PW-MT11150"].geometry}
        material={materials["PW-MT11150"]}
        userData={{ name: "|platos|Root|PW-MT11150" }}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["|platos|Root|blue_thick_glass"].geometry}
        material={materials.blue_thick_glass}
        userData={{ name: "|platos|Root|blue_thick_glass" }}
      />
    </group>
  );
}

useGLTF.preload("/dron.gltf");

export default Dron;
