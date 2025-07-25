"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import {
  Code2, Smartphone, Cloud, PenTool, ShieldCheck, BarChart, Users, Rocket, ArrowRight, CheckCircle, Star
} from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls, Line, Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const services = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    desc: "Modern, scalable websites and web apps tailored to your business needs."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android."
  },
  {
    icon: <Cloud className="w-8 h-8 text-purple-400" />,
    title: "Cloud Solutions",
    desc: "Cloud migration, hosting, and scalable infrastructure setup."
  },
  {
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs for web and mobile platforms."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions."
  },
  {
    icon: <BarChart className="w-8 h-8 text-cyan-400" />,
    title: "Analytics & SEO",
    desc: "Data-driven insights and SEO strategies to grow your business."
  },
];

const howWeWork = [
  {
    icon: <Users className="w-7 h-7 text-blue-400" />,
    title: "Discovery & Strategy",
    desc: "We start by understanding your goals, audience, and challenges to craft a tailored strategy."
  },
  {
    icon: <PenTool className="w-7 h-7 text-pink-400" />,
    title: "Design & Prototype",
    desc: "Our designers create wireframes and prototypes for a seamless user experience."
  },
  {
    icon: <Code2 className="w-7 h-7 text-green-400" />,
    title: "Development",
    desc: "Our engineers build robust, scalable solutions using the latest technologies."
  },
  {
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    title: "Launch & Support",
    desc: "We launch your project and provide ongoing support to ensure long-term success."
  },
];

const reasons = [
  {
    icon: <CheckCircle className="w-7 h-7 text-green-400" />,
    title: "Proven Expertise",
    desc: "A team of experienced professionals with a track record of successful projects."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-400" />,
    title: "Client-Centric Approach",
    desc: "We prioritize your needs and deliver solutions that exceed expectations."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Security & Reliability",
    desc: "Your data and business are protected with industry-leading security practices."
  },
  {
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    title: "Agile & Fast Delivery",
    desc: "We use agile methodologies to deliver results quickly and efficiently."
  },
];

function ServicesFull3DHero() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        {/* Main Icosahedron */}
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <Icosahedron args={[1.1, 0]}>
            <primitive object={new THREE.MeshStandardMaterial({ color: "#38bdf8", metalness: 0.7, roughness: 0.2 })} />
          </Icosahedron>
        </Float>
        {/* Extra floating shapes for visual interest */}
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
          <TorusKnot args={[0.4, 0.13, 64, 16]} position={[-1.7, 0.7, -0.5]}>
            <meshStandardMaterial color="#a21caf" metalness={0.8} roughness={0.2} />
          </TorusKnot>
        </Float>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.1}>
          <Icosahedron args={[0.22, 0]} position={[1.5, -0.8, 0.3]}>
            <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
          </Icosahedron>
        </Float>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

function AnimatedProcessFlow() {
  // All hooks here (useState, useRef, useFrame, etc.)
  // Node positions for the process steps
  const nodes = [
    { label: "Set Requirements", pos: [-2, 2, 0], color: "#e11d48" },
    { label: "Design", pos: [0, 2, 0], color: "#e11d48" },
    { label: "Development", pos: [2, 2, 0], color: "#e11d48" },
    { label: "Testing", pos: [3, 0.5, 0], color: "#e11d48" },
    { label: "Feedback", pos: [2, -1, 0], color: "#e11d48" },
    { label: "Delivery", pos: [-2, -1, 0], color: "#e11d48" },
    { label: "Review", pos: [0, -2, 0], color: "#e11d48" },
    { label: "Deployment", pos: [2.5, -2, 0], color: "#e11d48" },
  ];
  // Line segments between nodes
  const lines: [ [number, number, number], [number, number, number] ][] = [
    [nodes[0].pos as [number, number, number], nodes[1].pos as [number, number, number]],
    [nodes[1].pos as [number, number, number], nodes[2].pos as [number, number, number]],
    [nodes[2].pos as [number, number, number], nodes[3].pos as [number, number, number]],
    [nodes[3].pos as [number, number, number], nodes[4].pos as [number, number, number]],
    [nodes[4].pos as [number, number, number], nodes[5].pos as [number, number, number]],
    [nodes[5].pos as [number, number, number], nodes[6].pos as [number, number, number]],
    [nodes[6].pos as [number, number, number], nodes[7].pos as [number, number, number]],
  ];

  // Animation state
  const [activeIdx, setActiveIdx] = useState(0);
  const progressRef = useRef(0);
  const animSpeed = 0.015; // Animation speed
  const pauseFrames = 40; // Frames to pause at each node
  const frameCount = useRef(0);

  useFrame(() => {
    if (frameCount.current < pauseFrames) {
      frameCount.current++;
      return;
    }
    progressRef.current += animSpeed;
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      setActiveIdx((prev) => (prev + 1) % (nodes.length - 1));
      frameCount.current = 0;
    }
  });

  // Interpolate active point position
  const start = nodes[activeIdx].pos;
  const end = nodes[activeIdx + 1].pos;
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const activePos: [number, number, number] = [
    lerp(start[0], end[0], progressRef.current),
    lerp(start[1], end[1], progressRef.current),
    lerp(start[2], end[2], progressRef.current),
  ];

  // For animated line drawing
  const animatedLines = lines.slice(0, activeIdx + 1);
  const partialLine = [start, activePos];

  return (
    <>
      {/* 3D content (lights, meshes, etc.) */}
    </>
  );
}

function Process3DFlow() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }} style={{ height: 400 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      {/* Draw completed lines */}
      {/* Draw animated partial line */}
      {/* Draw nodes */}
      {/* Animated active point */}
    </Canvas>
  );
}

function AnimatedProcessFlowSVG() {
  const nodes = [
    { label: "Set Requirements", x: 80, y: 60 },
    { label: "Design", x: 300, y: 100 },
    { label: "Development", x: 520, y: 100 },
    { label: "Testing", x: 700, y: 160 },
    { label: "FeedBack", x: 520, y: 260 },
    { label: "Delivery", x: 180, y: 260 },
    { label: "Review", x: 350, y: 370 },
    { label: "Deployment", x: 600, y: 370 },
  ];
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]
  ];
  const [activeIdx, setActiveIdx] = useState(0);
  const [dashOffset, setDashOffset] = useState(400);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((idx) => (idx + 1) % nodes.length);
      setDashOffset(400);
    }, 1400);
    return () => clearInterval(interval);
  }, [nodes.length]);
  // Animate the line drawing
  useEffect(() => {
    if (activeIdx < edges.length) {
      let raf: number;
      let offset = 400;
      function animate() {
        offset -= 16;
        if (offset < 0) offset = 0;
        setDashOffset(offset);
        if (offset > 0) raf = requestAnimationFrame(animate);
      }
      animate();
      return () => {
        if (raf) cancelAnimationFrame(raf);
      };
    }
  }, [activeIdx]);
  function getPath(i1: number, i2: number) {
    const n1 = nodes[i1], n2 = nodes[i2];
    const dx = n2.x - n1.x, dy = n2.y - n1.y;
    const mx = n1.x + dx / 2, my = n1.y + dy / 2;
    return `M${n1.x},${n1.y} Q${mx},${my - 60} ${n2.x},${n2.y}`;
  }
  return (
    <svg viewBox="0 0 760 440" className="w-full h-full max-w-full max-h-full">
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e11d48" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#e11d48" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e11d48" />
          <stop offset="100%" stopColor="#f43f5e" />
        </linearGradient>
      </defs>
      {/* Subtle background gradient */}
      <rect x="0" y="0" width="760" height="440" fill="url(#node-glow)" opacity="0.08" />
      {/* Edges */}
      {edges.map(([from, to], i) => (
        <path
          key={i}
          d={getPath(from, to)}
          stroke="url(#line-gradient)"
          strokeWidth={3}
          fill="none"
          opacity={i < activeIdx ? 0.5 : 0.18}
          style={{ filter: i < activeIdx ? "drop-shadow(0 0 6px #e11d48)" : undefined, transition: 'opacity 0.5s' }}
        />
      ))}
      {/* Animated active edge */}
      {activeIdx < edges.length && (
        <path
          d={getPath(edges[activeIdx][0], edges[activeIdx][1])}
          stroke="url(#line-gradient)"
          strokeWidth={4}
          fill="none"
          opacity={1}
          style={{
            filter: "drop-shadow(0 0 10px #e11d48)",
            strokeDasharray: 400,
            strokeDashoffset: dashOffset,
            transition: 'stroke-dashoffset 0.3s',
          }}
        />
      )}
      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          {/* Glow pulse for active node */}
          {i === activeIdx && (
            <circle
              cx={node.x}
              cy={node.y}
              r={32}
              fill="url(#node-glow)"
              opacity={0.5}
            >
              <animate attributeName="r" values="32;38;32" dur="1.2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle
            cx={node.x}
            cy={node.y}
            r={i === activeIdx ? 20 : 14}
            fill={i === activeIdx ? "#e11d48" : "#fff"}
            stroke="#e11d48"
            strokeWidth={i === activeIdx ? 5 : 3}
            style={{ filter: i === activeIdx ? "drop-shadow(0 0 16px #e11d48)" : undefined, transition: 'all 0.3s' }}
          />
          {/* Step number */}
          <text
            x={node.x}
            y={node.y + 6}
            textAnchor="middle"
            fontSize={i === activeIdx ? 18 : 15}
            fontWeight={700}
            fill={i === activeIdx ? "#fff" : "#e11d48"}
            style={{ pointerEvents: 'none', transition: 'all 0.3s' }}
          >
            {i + 1}
          </text>
          {/* Label */}
          <text
            x={node.x}
            y={node.y - 32}
            textAnchor="middle"
            fontSize={i === 0 || i === nodes.length - 1 ? 18 : 17}
            fontWeight={i === activeIdx ? 800 : 500}
            fill={i === activeIdx ? "#e11d48" : (i === 0 || i === nodes.length - 1 ? "#e11d48" : "#111827")}
            style={{
              fontFamily: 'Inter, sans-serif',
              letterSpacing: 0.2,
              filter: i === activeIdx ? "drop-shadow(0 0 8px #e11d48)" : undefined,
              transition: 'all 0.3s',
            }}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-0 md:px-0 overflow-hidden">
        <ServicesFull3DHero />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full min-h-[90vh] text-center">
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 mx-auto">
            Our Services
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
            Digital Solutions for <br />Modern Businesses
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow-lg">
            We help you grow, innovate, and succeed with technology that works for you.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white mx-auto">
            Get Started <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4 text-neutral-300">Our Process</h3>
            <h2 className="text-4xl font-extrabold mb-6 text-white leading-tight">
              Flexible iterative approach<br />
              to continuous project improvement.
            </h2>
            <span className="inline-block mb-4">
              <span className="animate-pulse bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white px-4 py-1 rounded-full font-semibold shadow-lg text-sm tracking-wide">
                Agile methodology
              </span>
            </span>
            <p className="text-neutral-400 max-w-md">
              We use a flexible, iterative approach to ensure your project is always improving and adapting to your needs. Our process is transparent, collaborative, and focused on delivering value at every stage.
            </p>
          </div>
          {/* Right: Animated SVG Process Flow */}
          <div className="w-full h-[400px] bg-white rounded-2xl flex items-center justify-center shadow-2xl border border-neutral-200/60 relative overflow-hidden" style={{boxShadow: '0 8px 32px 0 rgba(225,29,72,0.10), 0 1.5px 8px 0 rgba(0,0,0,0.04)'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-white/80 to-blue-50/60 pointer-events-none z-0" />
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <AnimatedProcessFlowSVG />
            </div>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              What We Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              From web development to cloud solutions, we provide a full spectrum of digital services to empower your business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 hover:border-blue-500/30 transition-colors shadow-xl group">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 mt-6 pt-2">{service.icon}</div>
                    <CardTitle className="text-2xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-300 text-center">
                      {service.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              How We Work
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Process
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              We follow a proven process to deliver high-quality results, every time.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howWeWork.map((step, idx) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 mt-6 pt-2">{step.icon}</div>
                    <CardTitle className="text-xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-300 text-center">
                      {step.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Bhaviya Advantage
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Discover what sets us apart from the competition.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((reason, idx) => (
              <motion.div key={reason.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group">
                  <CardHeader className="flex flex-col items-center">
                    <div className="mb-4 mt-6 pt-2">{reason.icon}</div>
                    <CardTitle className="text-xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{reason.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-300 text-center">
                      {reason.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Elevate Your Business?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let's build something amazing together. Contact us for a free consultation and see how we can help you grow.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 