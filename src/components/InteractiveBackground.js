import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const NetworkBackground = () => {
  const pointsRef = useRef();
  const linesRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  // Create network nodes and connections
  const { nodes, connections } = useMemo(() => {
    const nodeCount = 150; // More nodes for denser network
    const nodes = [];
    const connections = [];

    // Generate nodes spread across a wider area
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * viewport.width * 2,
          (Math.random() - 0.5) * viewport.height * 2,
          (Math.random() - 0.5) * 2 // Flatter Z distribution
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.005, // Slower movement
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002
        ),
        size: Math.random() * 0.03 + 0.01 // Much smaller nodes
      });
    }

    // Create more connections for denser network
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 4 && Math.random() > 0.4) { // More connections
          connections.push({ from: i, to: j, distance });
        }
      }
    }

    return { nodes, connections };
  }, [viewport.width, viewport.height]);

  // Create geometries and materials
  const { pointsGeometry, pointsMaterial, linesGeometry, linesMaterial } = useMemo(() => {
    // Points geometry
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodes.length * 3);
    const sizes = new Float32Array(nodes.length);
    
    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x;
      positions[i * 3 + 1] = node.position.y;
      positions[i * 3 + 2] = node.position.z;
      sizes[i] = node.size;
    });
    
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Points material with shader
    const pointsMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mouse;
        attribute float size;
        varying float vSize;
        varying vec3 vPosition;
        
        void main() {
          vSize = size;
          vPosition = position;
          
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          
          // Mouse interaction - much more subtle
          vec2 mouseWorld = (mouse - 0.5) * 15.0;
          float mouseDistance = distance(position.xy, mouseWorld);
          float mouseEffect = exp(-mouseDistance * 0.8) * 0.5;
          
          // Much smaller points
          gl_PointSize = (size * 15.0 + mouseEffect * 10.0) * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vSize;
        varying vec3 vPosition;
        
        void main() {
          vec2 center = gl_PointCoord - vec2(0.5);
          float dist = length(center);
          
          if (dist > 0.5) discard;
          
          // Create sharp, small points
          float alpha = 1.0 - smoothstep(0.0, 0.3, dist);
          alpha = pow(alpha, 3.0); // Much sharper falloff
          
          // Bright blue color but more subtle
          vec3 color = vec3(0.4, 0.8, 1.0);
          
          // Less variation
          float variation = sin(time * 1.0 + vPosition.x * 0.05) * 0.1 + 0.9;
          color *= variation;
          
          gl_FragColor = vec4(color, alpha * 0.7);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    // Lines geometry
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(connections.length * 6);
    const lineOpacities = new Float32Array(connections.length * 2);
    
    connections.forEach((connection, i) => {
      const fromNode = nodes[connection.from];
      const toNode = nodes[connection.to];
      
      linePositions[i * 6] = fromNode.position.x;
      linePositions[i * 6 + 1] = fromNode.position.y;
      linePositions[i * 6 + 2] = fromNode.position.z;
      linePositions[i * 6 + 3] = toNode.position.x;
      linePositions[i * 6 + 4] = toNode.position.y;
      linePositions[i * 6 + 5] = toNode.position.z;
      
      const opacity = Math.max(0, 1 - connection.distance / 4);
      lineOpacities[i * 2] = opacity;
      lineOpacities[i * 2 + 1] = opacity;
    });
    
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    linesGeometry.setAttribute('opacity', new THREE.BufferAttribute(lineOpacities, 1));

    // Lines material
    const linesMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mouse: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        uniform float time;
        uniform vec2 mouse;
        attribute float opacity;
        varying float vOpacity;
        varying vec3 vPosition;
        
        void main() {
          vOpacity = opacity;
          vPosition = position;
          
          // Mouse interaction
          vec2 mouseWorld = (mouse - 0.5) * 15.0;
          float mouseDistance = distance(position.xy, mouseWorld);
          float mouseEffect = exp(-mouseDistance * 0.5);
          
          vOpacity *= (0.2 + mouseEffect * 0.6);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vOpacity;
        varying vec3 vPosition;
        
        void main() {
          // Bright blue color for lines
          vec3 color = vec3(0.3, 0.7, 1.0);
          
          // Subtle pulse
          float pulse = sin(time * 1.5 + vPosition.x * 0.05 + vPosition.y * 0.05) * 0.2 + 0.8;
          
          gl_FragColor = vec4(color, vOpacity * pulse * 0.6);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending
    });

    return { pointsGeometry, pointsMaterial, linesGeometry, linesMaterial };
  }, [nodes, connections]);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current.x = event.clientX / window.innerWidth;
      mouseRef.current.y = 1 - (event.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Update node positions - very slow movement
    nodes.forEach((node, i) => {
      node.position.add(node.velocity);
      
      // Bounce off boundaries
      if (Math.abs(node.position.x) > viewport.width) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > viewport.height) node.velocity.y *= -1;
      if (Math.abs(node.position.z) > 1) node.velocity.z *= -1;
      
      // Update geometry
      if (pointsRef.current) {
        const positions = pointsRef.current.geometry.attributes.position.array;
        positions[i * 3] = node.position.x;
        positions[i * 3 + 1] = node.position.y;
        positions[i * 3 + 2] = node.position.z;
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
      }
    });

    // Update line positions
    if (linesRef.current) {
      const linePositions = linesRef.current.geometry.attributes.position.array;
      connections.forEach((connection, i) => {
        const fromNode = nodes[connection.from];
        const toNode = nodes[connection.to];
        
        linePositions[i * 6] = fromNode.position.x;
        linePositions[i * 6 + 1] = fromNode.position.y;
        linePositions[i * 6 + 2] = fromNode.position.z;
        linePositions[i * 6 + 3] = toNode.position.x;
        linePositions[i * 6 + 4] = toNode.position.y;
        linePositions[i * 6 + 5] = toNode.position.z;
      });
      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }

    // Update shader uniforms
    if (pointsRef.current) {
      pointsRef.current.material.uniforms.time.value = time;
      pointsRef.current.material.uniforms.mouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );
    }
    
    if (linesRef.current) {
      linesRef.current.material.uniforms.time.value = time;
      linesRef.current.material.uniforms.mouse.value.set(
        mouseRef.current.x,
        mouseRef.current.y
      );
    }
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointsGeometry} material={pointsMaterial} />
      <lineSegments ref={linesRef} geometry={linesGeometry} material={linesMaterial} />
    </>
  );
};

const InteractiveBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      background: 'linear-gradient(135deg, #0a1428 0%, #1a2040 50%, #0f1419 100%)'
    }}>
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 1000
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <NetworkBackground />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;