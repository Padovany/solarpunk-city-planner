import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function CanvasScene() {
  return (
    <div className="w-screen h-screen">
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
