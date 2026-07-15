import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleCloud({ count = 4000 }) {
  const points = useRef();

  // Generate random points in a sphere
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 8 + Math.random() * 12; // Radius between 8 and 20
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      // Slow constant rotation
      points.current.rotation.x -= delta / 10;
      points.current.rotation.y -= delta / 15;
      
      // Subtle mouse interaction
      points.current.rotation.x += (state.pointer.y * 0.2 - points.current.rotation.x) * 0.02;
      points.current.rotation.y += (state.pointer.x * 0.2 - points.current.rotation.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={points} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ff2a2a" // The brand red
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

const ParticleNetwork = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#0a0a0a] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <ParticleCloud count={5000} />
      </Canvas>
      {/* Overlay gradient to blend nicely with the sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a] pointer-events-none opacity-80" />
    </div>
  );
};

export default ParticleNetwork;
