import React, { useRef } from "react";
import { useGLTFWithKTX2 } from "../../utils/useGLTFWithKTX2";
import { convertMaterialsToBasic } from "../../utils/convertToBasic";
import * as THREE from "three";
import { useVideoTexture } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTFWithKTX2(
    "/models/Dark Room/Dark_First.glb"
  );
  const newMaterials = convertMaterialsToBasic(materials);

  const macScreenRef = useRef();
  const computerScreenRef = useRef();

  const videoTexture = useVideoTexture("/videos/devwork.mp4");

  const computerScreenMaterial = new THREE.MeshBasicMaterial({
    map: videoTexture,
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={macScreenRef}
        geometry={nodes.Mac_Screen.geometry}
        material={computerScreenMaterial}
        position={[-0.861, 0.815 - 0.02, 0.684]}
        rotation={[0, 0.523, 0]}
      />
      <mesh
        ref={computerScreenRef}
        geometry={nodes.Computer_Screen.geometry}
        material={computerScreenMaterial}
        position={[-0.302, 0.955 - 0.02, 0.647]}
        rotation={[0, -0.053, 0]}
      />
      <mesh
        geometry={nodes.First_Baked.geometry}
        material={newMaterials.first_real_realfdsa_Baked}
        position={[-0.231, -0.14 - 0.02, 0.652]}
        rotation={[Math.PI, 0, Math.PI]}
      />
    </group>
  );
}
