"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot, Environment, Html } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useSpring, animated as a, useSprings } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

// 3D ICONS FOR SERVICES
function Laptop3D({ hovered }) {
  const group = useRef();
  const [highlight, setHighlight] = useState(0);
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y = hovered ? Math.sin(Date.now() / 500) * 0.15 : 0;
    }
    if (hovered) {
      setHighlight((h) => (h + 0.03) % 1);
    } else if (!hovered && highlight !== 0) {
      setHighlight(0);
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      {/* Laptop base */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[1.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#222b3a" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Laptop screen */}
      <mesh position={[0, 0.35, -0.35]} rotation={[-0.5, 0, 0]}>
        <boxGeometry args={[1.1, 0.7, 0.05]} />
        <meshStandardMaterial color={hovered ? "#3b82f6" : "#232b3a"} metalness={0.6} roughness={0.2} emissive={hovered ? "#3b82f6" : "#000"} emissiveIntensity={hovered ? 0.25 : 0} />
      </mesh>
      {/* Simple browser window using Html overlay */}
      <Html
        position={[0, 0.45, -0.38]}
        transform
        occlude
        style={{ width: 90, height: 60, pointerEvents: 'none', background: 'transparent' }}
      >
        <div style={{
          width: 80,
          height: 48,
          borderRadius: 8,
          background: hovered ? 'rgba(255,255,255,0.08)' : 'rgba(20,24,40,0.92)',
          border: '1.5px solid #3b82f6',
          boxShadow: hovered ? '0 0 16px #3b82f6aa' : '0 2px 8px #000a',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Browser bar */}
          <div style={{ height: 10, background: '#232b3a', borderRadius: '8px 8px 0 0', display: 'flex', alignItems: 'center', padding: '0 6px', gap: 3 }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: '#f87171', display: 'inline-block' }} />
            <span style={{ width: 6, height: 6, borderRadius: 3, background: '#fbbf24', display: 'inline-block' }} />
            <span style={{ width: 6, height: 6, borderRadius: 3, background: '#34d399', display: 'inline-block' }} />
          </div>
          {/* Moving highlight */}
          {hovered && <div style={{
            position: 'absolute',
            top: 18,
            left: `${highlight * 60}px`,
            width: 20,
            height: 8,
            borderRadius: 4,
            background: 'linear-gradient(90deg,#3b82f6 40%,#fff 100%)',
            opacity: 0.7,
            filter: 'blur(2px)',
            transition: 'left 0.2s',
          }} />}
        </div>
      </Html>
    </group>
  );
}

function Phone3D({ hovered }) {
  const group = useRef();
  const [bounce, setBounce] = useState(0);
  useFrame(() => {
    if (group.current) {
      group.current.position.y = hovered ? 0.1 + Math.sin(Date.now() / 300) * 0.05 : 0;
    }
    if (hovered) {
      setBounce((b) => (b + 0.08) % (2 * Math.PI));
    } else if (!hovered && bounce !== 0) {
      setBounce(0);
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      <mesh>
        <boxGeometry args={[0.5, 1, 0.1]} />
        <meshStandardMaterial color="#22d3ee" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* App icon using Html overlay */}
      <Html
        position={[0, 0.35, 0.06]}
        transform
        occlude
        style={{ width: 38, height: 60, pointerEvents: 'none', background: 'transparent' }}
      >
        <div style={{
          width: 36,
          height: 56,
          borderRadius: 8,
          background: hovered ? 'rgba(59,130,246,0.12)' : '#fff',
          border: '1.5px solid #e0e7ef',
          boxShadow: hovered ? '0 0 16px #22d3eeaa' : '0 2px 8px #0002',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 24,
            height: 24,
            borderRadius: 8,
            background: 'linear-gradient(135deg,#3b82f6 60%,#22d3ee 100%)',
            boxShadow: '0 2px 8px #3b82f6aa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: hovered ? `scale(${1.1 + 0.1 * Math.abs(Math.sin(bounce))})` : 'scale(1)',
            transition: 'transform 0.2s',
          }}>
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="14" height="14" rx="4" fill="#fff"/><rect x="6" y="6" width="8" height="8" rx="2" fill="#3b82f6"/></svg>
          </div>
        </div>
      </Html>
    </group>
  );
}

function Cloud3D({ hovered }) {
  const group = useRef();
  // Generate random positions for data packets
  const packets = useMemo(() =>
    Array.from({ length: 6 }, (_, i) => ({
      base: [
        0.15 * Math.cos((i / 6) * 2 * Math.PI),
        0.15 * Math.sin((i / 6) * 2 * Math.PI),
        0.18 * Math.sin((i / 6) * 2 * Math.PI),
      ],
      dir: Math.random() > 0.5 ? 1 : -1,
      color: ["#3b82f6", "#a5b4fc", "#22d3ee", "#fbbf24", "#f472b6", "#34d399"][i % 6],
    })),
    []
  );
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = hovered ? 0.1 + Math.sin(clock.getElapsedTime() / 2) * 0.07 : 0;
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      {/* Main cloud */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color={hovered ? "#a5b4fc" : "#64748b"} emissive={hovered ? "#a5b4fc" : "#000"} emissiveIntensity={hovered ? 0.18 : 0} />
      </mesh>
      <mesh position={[-0.25, 0, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color={hovered ? "#a5b4fc" : "#64748b"} />
      </mesh>
      <mesh position={[0.25, 0, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial color={hovered ? "#a5b4fc" : "#64748b"} />
      </mesh>
      {/* Data packets */}
      {hovered && packets.map((pkt, i) => (
        <mesh
          key={i}
          position={[
            pkt.base[0] + Math.sin(Date.now() / 400 + i) * 0.5 * pkt.dir,
            pkt.base[1] + Math.cos(Date.now() / 400 + i) * 0.2 * pkt.dir,
            pkt.base[2] + Math.cos(Date.now() / 400 + i) * 0.5 * pkt.dir,
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={pkt.color} emissive={pkt.color} emissiveIntensity={0.5} />
        </mesh>
      ))}
    </group>
  );
}
function Brush3D({ hovered }) {
  const group = useRef();
  useFrame(() => {
    if (group.current) {
      group.current.rotation.z = hovered ? Math.sin(Date.now() / 400) * 0.2 : 0;
    }
  });
  return (
    <group ref={group} scale={1.1}>
      <mesh>
        <boxGeometry args={[0.5, 0.12, 0.12]} />
        <meshStandardMaterial color="#f472b6" />
      </mesh>
      <mesh position={[0.3, 0, 0]}>
        <boxGeometry args={[0.15, 0.12, 0.12]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
    </group>
  );
}
function Lock3D({ hovered }) {
  const group = useRef();
  const shield = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = hovered ? Math.sin(clock.getElapsedTime() / 2) * 0.15 : 0;
      group.current.position.y = hovered ? 0.1 + Math.sin(clock.getElapsedTime() / 2) * 0.07 : 0;
    }
    if (shield.current) {
      shield.current.material.opacity = hovered ? 0.5 + 0.2 * Math.abs(Math.sin(clock.getElapsedTime() * 2)) : 0.3;
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      {/* Shield (pulsing) */}
      <mesh ref={shield} position={[0, 0.1, -0.13]} rotation={[0.7, 0, 0]}>
        <cylinderGeometry args={[0.22, 0.32, 0.08, 32, 1, true]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      {/* Lock body */}
      <mesh>
        <boxGeometry args={[0.5, 0.6, 0.15]} />
        <meshStandardMaterial color="#fde68a" />
      </mesh>
      {/* Lock shackle */}
      <mesh position={[0, 0.4, 0]}>
        <torusGeometry args={[0.18, 0.04, 16, 100]} />
        <meshStandardMaterial color="#fde68a" />
      </mesh>
    </group>
  );
}
function Chart3D({ hovered }) {
  const group = useRef();
  // Animate bars and line on hover
  const bars = useRef([]);
  const line = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = hovered ? 0.1 + Math.sin(clock.getElapsedTime() / 2) * 0.07 : 0;
    }
    if (hovered && bars.current.length) {
      bars.current.forEach((bar, i) => {
        if (bar) {
          bar.scale.y = 0.7 + 0.7 * Math.abs(Math.sin(clock.getElapsedTime() * 1.2 + i));
        }
      });
    } else if (bars.current.length) {
      bars.current.forEach((bar) => { if (bar) bar.scale.y = 1; });
    }
    if (hovered && line.current) {
      const points = [];
      for (let i = 0; i < 6; i++) {
        points.push(new THREE.Vector3(-0.35 + i * 0.14, 0.18 + 0.18 * Math.sin(clock.getElapsedTime() * 1.2 + i), 0.08));
      }
      line.current.geometry.setFromPoints(points);
    } else if (line.current) {
      const points = [];
      for (let i = 0; i < 6; i++) {
        points.push(new THREE.Vector3(-0.35 + i * 0.14, 0.18, 0.08));
      }
      line.current.geometry.setFromPoints(points);
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      {/* Bars */}
      {[...Array(6)].map((_, i) => (
        <mesh
          key={i}
          ref={el => bars.current[i] = el}
          position={[-0.35 + i * 0.14, 0.18, 0]}
        >
          <boxGeometry args={[0.08, 0.35, 0.08]} />
          <meshStandardMaterial color={["#3b82f6", "#fbbf24", "#22d3ee", "#f472b6", "#a5b4fc", "#34d399"][i % 6]} />
        </mesh>
      ))}
      {/* Line graph */}
      <line ref={line}>
        <bufferGeometry />
        <lineBasicMaterial color="#fff" linewidth={2} />
      </line>
    </group>
  );
}
function FigmaBoy3D({ hovered }) {
  const group = useRef();
  const hand = useRef();
  const cursor = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.position.y = hovered ? 0.1 + Math.sin(clock.getElapsedTime() / 2) * 0.07 : 0;
    }
    if (hand.current) {
      hand.current.rotation.z = hovered ? Math.sin(clock.getElapsedTime() * 3) * 0.5 : 0;
    }
    if (cursor.current) {
      cursor.current.position.x = hovered ? 0.18 + Math.sin(clock.getElapsedTime() * 2) * 0.08 : 0.18;
      cursor.current.position.y = hovered ? 0.13 + Math.cos(clock.getElapsedTime() * 2) * 0.04 : 0.13;
    }
  });
  return (
    <group ref={group} scale={hovered ? 1.25 : 1}>
      {/* Desk */}
      <mesh position={[0, -0.22, 0]}>
        <boxGeometry args={[0.7, 0.08, 0.3]} />
        <meshStandardMaterial color="#e0e7ef" />
      </mesh>
      {/* Board (Figma-like) */}
      <mesh position={[0.18, 0.18, -0.18]}>
        <boxGeometry args={[0.32, 0.22, 0.03]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* Board colored rectangles */}
      <mesh position={[0.09, 0.22, -0.14]}>
        <boxGeometry args={[0.06, 0.04, 0.01]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.18, 0.22, -0.14]}>
        <boxGeometry args={[0.06, 0.04, 0.01]} />
        <meshStandardMaterial color="#fbbf24" />
      </mesh>
      <mesh position={[0.27, 0.22, -0.14]}>
        <boxGeometry args={[0.06, 0.04, 0.01]} />
        <meshStandardMaterial color="#f472b6" />
      </mesh>
      {/* Avatar (boy) */}
      <group position={[-0.18, 0, 0]}>
        {/* Head */}
        <mesh position={[0, 0.13, 0]}>
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshStandardMaterial color="#fde68a" />
        </mesh>
        {/* Body */}
        <mesh position={[0, 0.06, 0]}>
          <boxGeometry args={[0.09, 0.13, 0.09]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        {/* Left arm */}
        <mesh position={[-0.06, 0.09, 0]} rotation={[0, 0, 0.2]}>
          <boxGeometry args={[0.04, 0.12, 0.04]} />
          <meshStandardMaterial color="#fde68a" />
        </mesh>
        {/* Right arm (animated) */}
        <group ref={hand} position={[0.06, 0.09, 0]}>
          <mesh rotation={[0, 0, -0.2]}>
            <boxGeometry args={[0.04, 0.12, 0.04]} />
            <meshStandardMaterial color="#fde68a" />
          </mesh>
        </group>
      </group>
      {/* Cursor (animated) */}
      <mesh ref={cursor} position={[0.18, 0.13, -0.12]}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color="#3b82f6" emissive="#3b82f6" emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
}
const serviceIcons = [Laptop3D, Phone3D, Cloud3D, FigmaBoy3D, Lock3D, Chart3D];
const services = [
  {
    title: "Web Development",
    desc: "Modern, scalable websites and web apps tailored to your business needs.",
  },
  {
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    title: "Cloud Solutions",
    desc: "Cloud migration, hosting, and scalable infrastructure setup.",
  },
  {
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs for web and mobile platforms.",
  },
  {
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions.",
  },
  {
    title: "Analytics & SEO",
    desc: "Data-driven insights and SEO strategies to grow your business.",
  },
];

const products = [
  {
    image: "https://via.placeholder.com/120x120?text=Product+1",
    name: "Smart CRM",
    desc: "A powerful CRM platform to manage your customers and sales pipeline efficiently.",
  },
  {
    image: "https://via.placeholder.com/120x120?text=Product+2",
    name: "Analytics Suite",
    desc: "Advanced analytics dashboard for actionable business insights.",
  },
  {
    image: "https://via.placeholder.com/120x120?text=Product+3",
    name: "Team Chat",
    desc: "A secure, real-time messaging app for seamless team collaboration.",
  },
];

function WavyPlane() {
  const mesh = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      const geom = mesh.current.geometry;
      for (let i = 0; i < geom.attributes.position.count; i++) {
        const x = geom.attributes.position.getX(i);
        const y = geom.attributes.position.getY(i);
        geom.attributes.position.setZ(i, Math.sin(x * 2 + t) * 0.25 + Math.cos(y * 2 + t) * 0.25);
      }
      geom.attributes.position.needsUpdate = true;
      geom.computeVertexNormals();
    }
  });
  return (
    <mesh ref={mesh} position={[0, 0, 0]} rotation={[-Math.PI / 2.2, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <meshStandardMaterial color="#23272f" metalness={0.7} roughness={0.3} transparent opacity={0.95} />
    </mesh>
  );
}

function Hero3DLogo() {
  return (
    <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-2xl bg-neutral-900 shadow-lg relative z-10">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <TorusKnot args={[0.6, 0.22, 128, 32]}>
            <meshStandardMaterial color="#fff" metalness={0.7} roughness={0.15} />
          </TorusKnot>
        </Float>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <WavyPlane />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}

function HeroShine() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[80vw] h-32 pointer-events-none select-none"
      aria-hidden>
      <div className="w-full h-full bg-gradient-to-b from-white/30 via-blue-400/10 to-transparent blur-2xl opacity-60 animate-shine" />
      <style jsx global>{`
        @keyframes shine {
          0% { opacity: 0.7; filter: blur(32px); }
          50% { opacity: 1; filter: blur(48px); }
          100% { opacity: 0.7; filter: blur(32px); }
        }
        .animate-shine { animation: shine 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// 3D Testimonial Carousel
const testimonials = [
  {
    name: "Sophia Patel",
    title: "Sophia's Retail Breakthrough",
    role: "Marketing Lead at Trendify",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    stats: [
      { value: "40%", label: "gain in retention" },
      { value: "50%", label: "surge in profits" },
    ],
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Liam Chen",
    title: "Liam's SaaS Success",
    role: "CTO at SaaSify",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    description: "Liam leveraged our 3D UI to create a memorable onboarding experience, resulting in a 35% faster user adoption and a 25% increase in paid conversions.",
    stats: [
      { value: "35%", label: "faster adoption" },
      { value: "25%", label: "more conversions" },
    ],
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sara Müller",
    title: "Sara's UX Revolution",
    role: "UX Designer at Creatix",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Sara’s team saw a 60% boost in user satisfaction and a 20% drop in support tickets after a collaborative UI/UX redesign.",
    stats: [
      { value: "60%", label: "boost in satisfaction" },
      { value: "20%", label: "fewer tickets" },
    ],
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Kim",
    title: "David's Data-Driven Growth",
    role: "Marketing Lead at DataBoost",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    description: "David’s analytics dashboard wowed clients and led to a 45% increase in demo-to-signup conversion rate.",
    stats: [
      { value: "45%", label: "demo conversions" },
      { value: "5x", label: "client engagement" },
    ],
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Priya Patel",
    title: "Priya's Startup Leap",
    role: "Founder at Launchly",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    description: "Priya’s startup saw a 50% increase in signups and a 2x boost in user engagement after launching with our platform.",
    stats: [
      { value: "50%", label: "more signups" },
      { value: "2x", label: "user engagement" },
    ],
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
];

function TestimonialStackedCards() {
  const [index, setIndex] = useState(0);
  const cardCount = testimonials.length;
  return (
    <div className="relative w-full flex flex-col items-center py-24 bg-black min-h-[600px] mb-24">
      <h2 className="text-4xl font-extrabold mb-12 text-center text-white relative z-10">Customer Success Stories</h2>
      <div className="relative w-full max-w-3xl min-h-[400px] flex items-center justify-center mt-16">
        {/* Stacked cards, all same size, stacked behind active card, no stat boxes, all cards clearly visible */}
        {testimonials.map((t, i) => {
          const offset = (i - index + cardCount) % cardCount;
          const isActive = i === index;
          // All cards same size, stacked behind active
          let z = isActive ? 50 : 50 - offset;
          let scale = 1;
          let translateY = -offset * 32; // more offset for visibility
          let opacity = offset > 4 ? 0 : 0.85 - offset * 0.12;
          let pointerEvents = 'auto';
          let blur = !isActive && offset === 1 ? 'blur-[1px]' : (!isActive ? 'blur-[0.5px]' : '');
          return (
            <div
              key={i}
              className={`absolute left-1/2 top-0 -translate-x-1/2 flex flex-col items-center justify-center bg-black border border-neutral-700 rounded-2xl shadow-xl w-full max-w-2xl h-[340px] transition-all duration-500 cursor-pointer ${blur}`}
              style={{
                zIndex: z,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                opacity,
                boxShadow: '0 4px 24px 0 #0008',
                pointerEvents,
                transition: 'all 0.6s cubic-bezier(.23,1.12,.32,1)',
              }}
              onClick={() => setIndex(i)}
            >
              {/* Browser-like top bar */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-neutral-700 rounded-t-2xl bg-black w-full">
                <span className="flex items-center gap-2 text-neutral-400">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="10" cy="10" r="7" /><path d="M21 21l-4.35-4.35" /></svg>
                </span>
                <span className="flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-neutral-700 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-neutral-700 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-neutral-700 inline-block" />
                </span>
              </div>
              <div className="flex flex-col items-center justify-center flex-1 w-full px-8 py-6 gap-4">
                <img src={t.image} alt={t.name} className="w-28 h-28 rounded-xl object-cover shadow-lg border-2 border-neutral-800 mb-2" style={{objectPosition:'center'}} />
                <div className="text-2xl font-bold text-white text-center mb-1 leading-tight">{t.title}</div>
                <div className="text-neutral-300 text-base text-center mb-2 leading-relaxed">{t.description}</div>
                <div className="text-base font-semibold text-blue-400 text-center">{t.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FloatingParticlesBG() {
  // More colorful, dynamic floating particles
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let frame = 0;
    const colors = ["#3b82f6", "#fbbf24", "#22d3ee", "#f472b6", "#a5b4fc", "#34d399"];
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * 1600,
      y: Math.random() * 400,
      r: 1.5 + Math.random() * 2.5,
      dx: -0.2 + Math.random() * 0.4,
      dy: -0.1 + Math.random() * 0.2,
      a: 0.12 + Math.random() * 0.22,
      c: colors[Math.floor(Math.random() * colors.length)],
    }));
    function draw() {
      ctx.clearRect(0, 0, 1600, 400);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.c + Math.floor(p.a * 255).toString(16).padStart(2, '0');
        ctx.shadowColor = p.c;
        ctx.shadowBlur = 18;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = 1600;
        if (p.x > 1600) p.x = 0;
        if (p.y < 0) p.y = 400;
        if (p.y > 400) p.y = 0;
      }
      frame++;
      requestAnimationFrame(draw);
    }
    draw();
    return () => cancelAnimationFrame(draw);
  }, []);
  return (
    <>
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 animate-gradient-move bg-gradient-to-br from-blue-900/40 via-fuchsia-700/20 to-blue-900/40 blur-2xl opacity-70" />
      <canvas
        ref={ref}
        width={1600}
        height={400}
        className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full object-cover pointer-events-none select-none opacity-70 blur-sm z-0"
        aria-hidden
      />
      <style jsx global>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}

export default function Home() {
  return (
    <main className="bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 md:px-0 overflow-hidden">
        <Hero3DBackground />
        <HeroShine />
        <div className="relative z-10 flex flex-col items-center justify-center w-full pt-16 pb-16">
          <Hero3DLogo />
          <div className="mb-4 text-xs tracking-widest text-neutral-200 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-2"></span>
            NEW GEN AI AUTOMATION PARTNER
          </div>
          <h1 className="text-center font-extrabold text-4xl md:text-6xl leading-tight mb-2 text-neutral-200">
            <span className="block">Automate Smarter. Grow</span>
            <span className="block">Faster. <span className="italic font-serif text-neutral-300">With AI.</span></span>
          </h1>
          <div className="text-neutral-400 text-base md:text-lg mb-8 mt-2 text-center">
            AI Automation for Modern Businesses Made Simple
          </div>
          <a href="#" className="inline-block px-8 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-lg shadow transition border border-neutral-700 mb-8">
            Book A Free Call <span className="ml-2">↗</span>
          </a>
          <div className="flex gap-6 justify-center text-2xl text-neutral-500 mt-2">
            <span className="hover:text-white transition cursor-pointer">✕</span>
            <span className="hover:text-white transition cursor-pointer">⦿</span>
            <span className="hover:text-white transition cursor-pointer">◎</span>
            <span className="hover:text-white transition cursor-pointer">⚙️</span>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-center">Our Services</h2>
          <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of digital solutions to help your business thrive in the modern world.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              if (idx < 6) {
                const Icon3D = serviceIcons[idx];
                const [hovered, setHovered] = useState(false);
                return (
                  <div
                    key={idx}
                    className={
                      `group relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md` +
                      ' before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:opacity-80'
                    }
                    style={{ boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.15)' }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    <div className="mb-4 drop-shadow-lg transition-transform duration-300 z-20 w-24 h-24 flex items-center justify-center">
                      <Canvas camera={{ position: [0, 0, 2.5], fov: 50 }}>
                        <ambientLight intensity={0.7} />
                        <directionalLight position={[5, 5, 5]} intensity={1.2} />
                        <Icon3D hovered={hovered} />
                        <Environment preset="city" />
                      </Canvas>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white drop-shadow z-20">{service.title}</h3>
                    <p className="text-neutral-200 text-center font-medium drop-shadow-sm z-20">{service.desc}</p>
                    {/* 3D light reflection */}
                    <span className="absolute top-2 left-4 w-24 h-6 bg-white/20 rounded-full blur-lg opacity-40 z-10" />
                    <span className="absolute bottom-2 right-4 w-16 h-4 bg-white/10 rounded-full blur-md opacity-30 z-10" />
                  </div>
                );
              }
              // For other cards, keep previous icon or placeholder
              return (
                <div
                  key={idx}
                  className={
                    `group relative bg-neutral-900/80 border border-neutral-800 rounded-2xl p-8 flex flex-col items-center shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md` +
                    ' before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none before:z-10 before:bg-gradient-to-t before:from-white/10 before:to-transparent before:opacity-80'
                  }
                  style={{ boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.25), 0 2px 8px 0 rgba(0,0,0,0.15)' }}
                >
                  <div className="mb-4 drop-shadow-lg transition-transform duration-300 z-20 w-24 h-24 flex items-center justify-center">
                    <span className="text-4xl text-neutral-400">3D</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white drop-shadow z-20">{service.title}</h3>
                  <p className="text-neutral-200 text-center font-medium drop-shadow-sm z-20">{service.desc}</p>
                  {/* 3D light reflection */}
                  <span className="absolute top-2 left-4 w-24 h-6 bg-white/20 rounded-full blur-lg opacity-40 z-10" />
                  <span className="absolute bottom-2 right-4 w-16 h-4 bg-white/10 rounded-full blur-md opacity-30 z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Products Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4 text-center">Our Products</h2>
          <p className="text-neutral-300 text-center mb-12 max-w-xl mx-auto">
            Explore our suite of innovative products designed to boost your business productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-24 h-24 rounded-xl mb-4 object-cover bg-neutral-800" />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-neutral-400 text-center">{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialStackedCards />
    </main>
  );
}
