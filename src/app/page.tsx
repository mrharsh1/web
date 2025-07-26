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
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/lightswind/carousel";
import { FeaturesSection } from "@/components/ui/Features";
import GlowingCards, { GlowingCard } from "@/components/lightswind/glowing-cards";
// 3D ICONS FOR SERVICES


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
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
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
      {/* 3D Marquee Section */}
      <section className="py-8 px-2 md:px-0">
        <div className="max-w-7xl mx-auto w-full">

          <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
            <ThreeDMarquee images={images} />
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
          <div className="relative w-full">
            <Carousel opts={{ align: "start", slidesToScroll: 1, loop: true }} className="w-full">
              <CarouselPrevious />
              <CarouselNext />
              <CarouselContent className="">
                {serviceData.map((service, idx) => (
                  <CarouselItem key={service.text} className="sm:basis-1/2 lg:basis-1/3 px-2 py-4">
                    <div className="relative flex flex-col items-center">
                      <div className="relative z-10 w-full border-2 border-gray-700 rounded-3xl bg-transparent shadow-2xl flex flex-col items-center py-8 px-4">
                        <EvervaultCard
                          className="!bg-transparent"
                          image={serviceImages[idx]}
                        />
                        <div className="text-left">
                          <div className="mt-4 text-white text-left text-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{ textShadow: '0 2px 8px #000,0 1px 2px #000' }}>
                            {service.text}
                          </div>
                          <div className="mt-4 text-white text-left text-base font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]" style={{ textShadow: '0 2px 8px #000,0 1px 2px #000' }}>
                            {service.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
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
        <GlowingCards gap="2.5rem" maxWidth="56rem" enableGlow={true}>
          {products.map((product, idx) => (
            <GlowingCard key={idx} className="flex flex-col items-center bg-neutral-900/80 border border-blue-700/30 shadow-xl hover:shadow-2xl transition-all duration-300 w-96 h-72">
              <img src={productImages[idx % productImages.length]} alt={product.name} className="w-28 h-28 rounded-xl mb-6 object-cover bg-neutral-800" />
              <h3 className="text-xl font-bold mb-2 text-white text-center">{product.name}</h3>
              <p className="text-neutral-300 text-center">{product.desc}</p>
            </GlowingCard>
          ))}
        </GlowingCards>
      </section>
      <StaggerTestimonials />
      <FloatingParticlesBG />
    </main>
  );
}
