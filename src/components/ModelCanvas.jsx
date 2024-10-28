import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense} from "react";
import Loader from "./Loader";

function Model() {
    const model = useGLTF('./egg/scene.gltf')
    return (
        <mesh>
            <hemisphereLight intensity={10}
                groundColor="black" />
            <pointLight intensity={10} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.1}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
                object={model.scene}
                scale= {100}
                position={[0, -1.25, -1.5]}
                rotation={[-0.01, -0.1, -0.1]}
            />
        </mesh>
    )
}

export default function ModelCanvas() {
    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [-10, -0, 20], fov: 30 }}
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