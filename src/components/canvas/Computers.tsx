import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'

type Props = {
    isMobile: boolean
}

const Computers = ({ isMobile }: Props) => {
    const computer = useGLTF('./keyboard/scene.gltf')

    return (
        <mesh>
            <hemisphereLight intensity={0.15} groundColor='black' />
            <pointLight intensity={0.24} />
            <spotLight
                position={[0, 90, 0]}
                angle={0.14}
                penumbra={1}
                intensity={0.42}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
                object={computer.scene}
                scale={isMobile ? 12 : 38}
                position={isMobile ? [0, 2, 0] : [0, -3, 0]}
            />
        </mesh>
    )
}

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)')
        setIsMobile(mediaQuery.matches)

        const handleMediaQueryChange = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches)
        }

        mediaQuery.addEventListener('change', handleMediaQueryChange)

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange)
        }
    }, [])

    return (
        <Canvas
            frameloop='demand'
            shadows
            camera={{ position: [-0.1, 30, 40], fov: 15 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />
                <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas
