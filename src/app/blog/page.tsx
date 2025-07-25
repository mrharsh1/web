"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/lightswind/card";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls } from "@react-three/drei";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";

const blogs = [
  {
    title: "How to Build a Modern Blog in Next.js",
    image: "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Learn how to create a fast, modern blog using Next.js, Tailwind CSS, and best practices for SEO and performance.",
    author: {
      name: "Gema Santiago",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    date: "2024-06-01",
  },
  {
    title: "10 UI Design Tips for 2024",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Upgrade your UI skills with these 10 actionable design tips for modern web apps.",
    author: {
      name: "Dalibor Mišković",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    date: "2024-05-28",
  },
  {
    title: "Dark Mode: Best Practices",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Implement dark mode in your apps the right way, with accessibility and style in mind.",
    author: {
      name: "Jane Price",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    date: "2024-05-20",
  },
  {
    title: "Performance Optimization in React",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Speed up your React apps with these proven performance optimization techniques.",
    author: {
      name: "Ed Boyd",
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    date: "2024-05-15",
  },
  {
    title: "The Future of CSS: Trends to Watch",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    description: "Explore the latest CSS features and trends that are shaping the future of web design.",
    author: {
      name: "ملینا رضاییان",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    date: "2024-05-10",
  },
  {
    title: "TypeScript for Beginners",
    image: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A gentle introduction to TypeScript for JavaScript developers.",
    author: {
      name: "Capucine Lucas",
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    date: "2024-05-05",
  },
  {
    title: "Building Accessible Web Apps",
    image: "https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_1280.jpg",
    description: "Accessibility is essential. Learn how to make your web apps usable for everyone.",
    author: {
      name: "Grace Wang",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    date: "2024-05-01",
  },
  {
    title: "Next.js App Router: A Complete Guide",
    image: "https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg",
    description: "Master the new App Router in Next.js for scalable, maintainable apps.",
    author: {
      name: "Reyansh Uchil",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    date: "2024-04-28",
  },
  {
    title: "State Management in 2024",
    image: "https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg",
    description: "Redux, Zustand, Jotai, or Context? Find out which state management tool is right for you.",
    author: {
      name: "Ava Patel",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    date: "2024-04-20",
  },
  {
    title: "Deploying Next.js Apps Effortlessly",
    image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    description: "From Vercel to Netlify, learn the easiest ways to deploy your Next.js projects.",
    author: {
      name: "Liam Smith",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    date: "2024-04-15",
  },
];

function Blog3DHero() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <Icosahedron args={[1.1, 0]}>
            <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.2} />
          </Icosahedron>
        </Float>
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

export default function BlogsPage() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Our Blog"
        heading="Our Blog"
        subheading="Insights, tutorials, and stories from our team. Stay updated with the latest in tech, design, and development."
        buttonText={undefined}
      />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-white">Latest Blogs</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, idx) => (
            <Card key={idx} hoverable bordered className="flex flex-col h-full bg-transparent border-2 border-white shadow-2xl transition-all duration-200">
              <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <CardHeader spacing="compact" className="flex-1">
                <CardTitle as="h2" size="default" className="mb-2 text-white">
                  {blog.title}
                </CardTitle>
                <CardDescription className="mb-2 text-white/80">
                  {blog.description}
                </CardDescription>
              </CardHeader>
              <CardFooter align="between" className="mt-auto pt-0">
                <div className="flex items-center gap-2">
                  <Image src={blog.author.avatar} alt={blog.author.name} width={32} height={32} className="rounded-full" />
                  <span className="text-sm text-white font-medium">{blog.author.name}</span>
                </div>
                <div className="text-xs text-white/70">{new Date(blog.date).toLocaleDateString()}</div>
                <a href="#" className="ml-4 px-3 py-1.5 rounded-md bg-white/10 text-white text-xs font-semibold border border-white hover:bg-white/20 transition-colors">Read More</a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 