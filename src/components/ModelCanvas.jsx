import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";
import Loader from "./Loader";

function Model() {
    const model = useGLTF('./ice_dragon/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={0.15}
                groundColor="black" />
            <pointLight intensity={1} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
                object={model.scene}
                scale= {100}
                position={[0, -3.25, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

export default function ModelCanvas() {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [0, 30, 30], fov: 30 }}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<Loader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    // maxPolarAngle={Math.PI / 2}
                    // minPolarAngle={Math.PI / 4}
                />
                <Model />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}