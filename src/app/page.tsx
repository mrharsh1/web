"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, TorusKnot, Environment, Html } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useSpring, animated as a, useSprings } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';
import { StaggerTestimonials } from "@/components/ui/testmonals";
import { EvervaultCard } from "@/components/ui/card";
import { ThreeDMarquee } from "@/components/lightswind/3d-marquee";
import { Carousel, CarouselContent, CarouselItem } from "@/components/lightswind/carousel";
import { FeaturesSection } from "@/components/ui/Features";
import GlowingCards, { GlowingCard } from "@/components/lightswind/glowing-cards";
import { CometCard } from "@/components/ui/comet-card";
// 3D ICONS FOR SERVICES
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Link from "next/link";

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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    name: "Marketingpro",
    desc: "A comprehensive marketing automation suite to streamline campaigns, track analytics, and boost ROI.",
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center",
    name: "Aimindflow",
    desc: "AI-powered workflow automation for smarter, faster business processes and decision-making.",
  },
  {
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Samvaani",
    desc: "Create original, high-quality music instantly with AI. Samvaani turns your ideas into professional soundtracks in just a few clicks.",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "CRM",
    desc: "An intuitive customer relationship management platform designed to help businesses track leads, manage clients, and automate workflows. Simplify your sales process and build stronger customer relationships effortlessly.",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "Company CRM",
    desc: "Comprehensive customer relationship management system for businesses to manage leads, sales, and customer interactions.",
  },
];

function WavyPlane() {
  const mesh = useRef<THREE.Mesh>(null);
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

function FloatingParticlesBG() {
  // More colorful, dynamic floating particles
  const ref = useRef<HTMLCanvasElement>(null);
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
      if (!ctx) return;
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
    let animationId: number;
    function start() {
      animationId = requestAnimationFrame(draw);
    }
    start();
    return () => cancelAnimationFrame(animationId);
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

// Update the images to be visually rich, 1:1 aspect ratio, and abstract/3D style

const images = [
  "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
  "https://assets.aceternity.com/animated-modal.png",
  "https://assets.aceternity.com/animated-testimonials.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
  "https://assets.aceternity.com/github-globe.png",
  "https://assets.aceternity.com/glare-card.png",
  "https://assets.aceternity.com/layout-grid.png",
  "https://assets.aceternity.com/flip-text.png",
  "https://assets.aceternity.com/hero-highlight.png",
  "https://assets.aceternity.com/carousel.webp",
  "https://assets.aceternity.com/placeholders-and-vanish-input.png",
  "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
  "https://assets.aceternity.com/signup-form.png",
  "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
  "https://assets.aceternity.com/spotlight-new.webp",
  "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
  "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
  "https://assets.aceternity.com/tabs.png",
  "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
  "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
  "https://assets.aceternity.com/glowing-effect.webp",
  "https://assets.aceternity.com/hover-border-gradient.png",
  "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
  "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
  "https://assets.aceternity.com/macbook-scroll.png",
  "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
  "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
  "https://assets.aceternity.com/multi-step-loader.png",
  "https://assets.aceternity.com/vortex.png",
  "https://assets.aceternity.com/wobble-card.png",
  "https://assets.aceternity.com/world-map.webp",
];
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
            fill={i === activeIdx ? "#e11d48" : (i === 0 || i === nodes.length - 1 ? "#e11d48" : "#FFF")}
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

export default function Home() {


  const serviceData = [
    {
      text: "Web Development",
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      desc: "Modern, scalable websites and web apps tailored to your business needs."
    },
    {
      text: "Mobile Apps",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
      desc: "Cross-platform mobile applications for iOS and Android."
    },
    {
      text: "Cloud Solutions",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      desc: "Cloud migration, hosting, and scalable infrastructure setup."
    },
    {
      text: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      desc: "Beautiful, user-centric designs for web and mobile platforms."
    },
    {
      text: "Cybersecurity",
      img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80",
      desc: "Protect your business with robust security solutions."
    },
    {
      text: "Analytics & SEO",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      desc: "Data-driven insights and SEO strategies to grow your business."
    },
  ];
  const serviceImages = [
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // Web Development
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", // Mobile Apps
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // Cloud Solutions
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // UI/UX Design
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80", // Cybersecurity
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // Analytics & SEO
  ];
  const productImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  ];
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
          <a href="/contact" className="inline-block px-8 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-lg shadow transition border border-neutral-700 mb-8">
            Book A Free Call <span className="ml-2">↗</span>
          </a>
          {/* <div className="flex gap-6 justify-center text-2xl text-neutral-500 mt-2">
            <span className="hover:text-white transition cursor-pointer">✕</span>
            <span className="hover:text-white transition cursor-pointer">⦿</span>
            <span className="hover:text-white transition cursor-pointer">◎</span>
            <span className="hover:text-white transition cursor-pointer">⚙️</span>
          </div> */}
        </div>
      </section>
      {/* 3D Marquee Section */}
      {/* <section className="py-8 px-2 md:px-0">
        <div className="max-w-7xl mx-auto w-full">

          <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
            <ThreeDMarquee images={images} />
          </div>

        </div>
      </section> */}

      <section className="py-24 bg-neutral-950" id="process-section">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading and description */}
          <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-extrabold mb-4 ">Our Process</h2>
            {/* <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Flexible iterative approach<br />to continuous project improvement.
            </h2> */}

            <p className="text-xl md:text-2xl font-normal text-white mt-2">
              Our <span className="text-red-700">Agile methodology</span> ensures every project is handled with precision and adaptability. By working in iterative cycles, we focus on continuous improvement, seamless collaboration, and timely delivery. This approach helps us minimize risks, address changes quickly, and deliver solutions that exceed expectations while keeping the process transparent at every stage.
            </p>
          </div>
          {/* Right: Animated SVG Process Flow */}
          <div className="w-full flex justify-center items-center bg-black/80 rounded-xl shadow-lg p-4 min-h-[440px]">
            <AnimatedProcessFlowSVG />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-extrabold mb-4 text-center">Our Services</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            We offer a wide range of digital solutions to help your business thrive in the modern world.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {serviceData.slice(0, 3).map((service, idx) => (
              <CometCard key={service.text} className="w-full">
                <div className="relative w-full h-80 bg-gradient-to-br from-neutral-900/80 to-neutral-800/80 border border-neutral-700 rounded-2xl p-6 backdrop-blur-sm overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={serviceImages[idx]} 
                      alt={service.text}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {service.text}
                      </h3>
                      <p className="text-neutral-300 text-base leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                    
                    {/* Service Icon */}
                    <div className="flex justify-center mt-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <div className="text-2xl">
                          {idx === 0 && "🌐"}
                          {idx === 1 && "📱"}
                          {idx === 2 && "☁️"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CometCard>
            ))}
          </div>
          <div className="text-center">
            <Link href="/services">
              <MovingBorderButton 
                size="lg"
                className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              >
                View All Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MovingBorderButton>
            </Link>
          </div>
        </div>
      </section>
      <FeaturesSection />
      {/* Products Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-white">Our Products</h2>
          <p className="text-lg text-neutral-300">Explore our suite of innovative products designed to boost your business productivity.</p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.slice(0, 3).map((product, idx) => (
              <div key={product.name} className="relative group">
                {/* Moving Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>
                
                <div className="relative bg-neutral-900/90 border border-neutral-700 rounded-2xl p-6 h-full backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl">
                  {/* Product Image */}
                  <div className="relative mb-6 overflow-hidden rounded-xl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h3>
                      {/* Product Icon */}
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30">
                        <div className="text-lg">
                          {idx === 0 && "📊"}
                          {idx === 1 && "🤖"}
                          {idx === 2 && "🎵"}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/products">
              <MovingBorderButton 
                size="lg"
                className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              >
                View All Products
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MovingBorderButton>
            </Link>
          </div>
        </div>
      </section>
      <StaggerTestimonials />
      <FloatingParticlesBG />
    </main>
  );
}
