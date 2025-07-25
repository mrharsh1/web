"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/lightswind/card";
import { Button } from "@/components/lightswind/button";
import { Badge } from "@/components/lightswind/badge";
import { Input } from "@/components/lightswind/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/lightswind/tabs";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls } from "@react-three/drei";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";
import { ArrowRight, Calendar, User, Clock, Search, Filter, Star, TrendingUp, BookOpen, Zap } from "lucide-react";
import { useState, useMemo } from "react";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Blog in Next.js",
    image: "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Learn how to create a fast, modern blog using Next.js, Tailwind CSS, and best practices for SEO and performance.",
    content: "This comprehensive guide will walk you through building a modern blog with Next.js. We'll cover everything from initial setup to deployment, including SEO optimization, performance tuning, and best practices for content management.",
    author: {
      name: "Gema Santiago",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    date: "2024-06-01",
    category: "Development",
    readTime: "8 min read",
    featured: true,
    trending: true,
    views: 12450
  },
  {
    id: 2,
    title: "10 UI Design Tips for 2024",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Upgrade your UI skills with these 10 actionable design tips for modern web apps.",
    content: "UI design is constantly evolving. In this article, we'll explore the top 10 design trends and tips that will dominate 2024. From micro-interactions to accessibility-first design, learn how to create interfaces that users love.",
    author: {
      name: "Dalibor Mišković",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
    },
    date: "2024-05-28",
    category: "Design",
    readTime: "6 min read",
    featured: false,
    trending: true,
    views: 8920
  },
  {
    id: 3,
    title: "Dark Mode: Best Practices",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Implement dark mode in your apps the right way, with accessibility and style in mind.",
    content: "Dark mode isn't just about aesthetics—it's about user experience and accessibility. Learn the best practices for implementing dark mode that works for everyone, including proper contrast ratios and smooth transitions.",
    author: {
      name: "Jane Price",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    date: "2024-05-20",
    category: "UI/UX",
    readTime: "5 min read",
    featured: true,
    trending: false,
    views: 7560
  },
  {
    id: 4,
    title: "Performance Optimization in React",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Speed up your React apps with these proven performance optimization techniques.",
    content: "Performance is crucial for user experience. This guide covers advanced React optimization techniques including code splitting, lazy loading, memoization, and bundle optimization strategies.",
    author: {
      name: "Ed Boyd",
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    date: "2024-05-15",
    category: "Development",
    readTime: "10 min read",
    featured: false,
    trending: true,
    views: 11230
  },
  {
    id: 5,
    title: "The Future of CSS: Trends to Watch",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    description: "Explore the latest CSS features and trends that are shaping the future of web design.",
    content: "CSS is evolving rapidly with new features like Container Queries, CSS Grid Level 2, and advanced selectors. Discover how these new capabilities will change the way we build websites.",
    author: {
      name: "ملینا رضاییان",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
    },
    date: "2024-05-10",
    category: "CSS",
    readTime: "7 min read",
    featured: false,
    trending: false,
    views: 5430
  },
  {
    id: 6,
    title: "TypeScript for Beginners",
    image: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A gentle introduction to TypeScript for JavaScript developers.",
    content: "TypeScript adds powerful type safety to JavaScript. This beginner-friendly guide will help you understand the basics, from simple types to advanced features like generics and decorators.",
    author: {
      name: "Capucine Lucas",
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
    },
    date: "2024-05-05",
    category: "Development",
    readTime: "12 min read",
    featured: true,
    trending: false,
    views: 6780
  },
  {
    id: 7,
    title: "Building Accessible Web Apps",
    image: "https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_1280.jpg",
    description: "Accessibility is essential. Learn how to make your web apps usable for everyone.",
    content: "Web accessibility is not just a legal requirement—it's the right thing to do. Learn how to build applications that work for users with disabilities, including proper ARIA labels and keyboard navigation.",
    author: {
      name: "Grace Wang",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    date: "2024-05-01",
    category: "Accessibility",
    readTime: "9 min read",
    featured: false,
    trending: true,
    views: 4450
  },
  {
    id: 8,
    title: "Next.js App Router: A Complete Guide",
    image: "https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg",
    description: "Master the new App Router in Next.js for scalable, maintainable apps.",
    content: "The App Router revolutionizes how we build Next.js applications. This comprehensive guide covers everything from basic routing to advanced patterns like parallel routes and intercepting routes.",
    author: {
      name: "Reyansh Uchil",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    date: "2024-04-28",
    category: "Next.js",
    readTime: "15 min read",
    featured: true,
    trending: true,
    views: 15670
  },
  {
    id: 9,
    title: "State Management in 2024",
    image: "https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg",
    description: "Redux, Zustand, Jotai, or Context? Find out which state management tool is right for you.",
    content: "State management is crucial for React applications. Compare the most popular solutions and learn when to use each one. From simple Context API to complex Redux setups, find your perfect match.",
    author: {
      name: "Ava Patel",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    date: "2024-04-20",
    category: "React",
    readTime: "11 min read",
    featured: false,
    trending: false,
    views: 8230
  },
  {
    id: 10,
    title: "Deploying Next.js Apps Effortlessly",
    image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    description: "From Vercel to Netlify, learn the easiest ways to deploy your Next.js projects.",
    content: "Deployment doesn't have to be complicated. Learn the best practices for deploying Next.js applications to various platforms, including environment variables, build optimization, and monitoring.",
    author: {
      name: "Liam Smith",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    date: "2024-04-15",
    category: "Deployment",
    readTime: "6 min read",
    featured: false,
    trending: false,
    views: 5670
  },
  {
    id: 11,
    title: "Advanced React Hooks Patterns",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop&q=60",
    description: "Master advanced React hooks patterns for better code organization and reusability.",
    content: "Learn advanced patterns for custom hooks, including composition, abstraction, and best practices for building reusable React logic.",
    author: {
      name: "Marcus Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    date: "2024-04-10",
    category: "React",
    readTime: "14 min read",
    featured: false,
    trending: false,
    views: 4320
  },
  {
    id: 12,
    title: "CSS Grid vs Flexbox: When to Use What",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60",
    description: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
    content: "Understand the differences between CSS Grid and Flexbox, and learn when to use each layout system for optimal results.",
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    date: "2024-04-05",
    category: "CSS",
    readTime: "9 min read",
    featured: false,
    trending: false,
    views: 3890
  },
  {
    id: 13,
    title: "Testing React Applications",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=60",
    description: "Comprehensive testing strategies for React applications using Jest and React Testing Library.",
    content: "Learn how to write effective tests for React components, including unit tests, integration tests, and end-to-end testing strategies.",
    author: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    },
    date: "2024-04-01",
    category: "Development",
    readTime: "13 min read",
    featured: false,
    trending: false,
    views: 3450
  },
  {
    id: 14,
    title: "Design Systems: Building for Scale",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=60",
    description: "Create scalable design systems that maintain consistency across large applications.",
    content: "Learn how to build and maintain design systems that scale with your application and team growth.",
    author: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    date: "2024-03-28",
    category: "Design",
    readTime: "11 min read",
    featured: false,
    trending: false,
    views: 2980
  },
  {
    id: 15,
    title: "Web Security Best Practices",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=60",
    description: "Essential security practices every web developer should implement.",
    content: "Protect your web applications with these essential security practices, from input validation to secure authentication.",
    author: {
      name: "Alex Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
    },
    date: "2024-03-25",
    category: "Development",
    readTime: "10 min read",
    featured: false,
    trending: false,
    views: 2670
  }
];

const categories = ["All", "Development", "Design", "UI/UX", "CSS", "Accessibility", "Next.js", "React", "Deployment"];

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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFeatured, setShowFeatured] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(9);

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           blog.author.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      const matchesFeatured = !showFeatured || blog.featured;
      
      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [searchTerm, selectedCategory, showFeatured]);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const trendingBlogs = blogs.filter(blog => blog.trending);

  const getCategoryBlogs = (category: string) => {
    if (category === "All") {
      // Filter out featured posts from "All" category since they're shown separately
      return blogs.filter(blog => !blog.featured);
    }
    return blogs.filter(blog => blog.category === category && !blog.featured);
  };

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 9);
  };

  const currentCategoryBlogs = getCategoryBlogs(selectedCategory);
  const displayedBlogs = currentCategoryBlogs.slice(0, visiblePosts);
  const hasMorePosts = displayedBlogs.length < currentCategoryBlogs.length;

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Our Blog"
        heading="Our Blog"
        subheading="Insights, tutorials, and stories from our team. Stay updated with the latest in tech, design, and development."
        buttonText={undefined}
      />
      
      {/* Featured Posts Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-neutral-900/50 to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-3xl font-bold text-white">Featured Posts</h2>
            </div>
            <p className="text-lg text-neutral-300">Handpicked articles you shouldn't miss</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredBlogs.slice(0, 2).map((blog) => (
              <Card key={blog.id} className="group bg-neutral-900/50 border border-neutral-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10 overflow-hidden">
                <div className="relative w-full h-80 overflow-hidden">
                  <Image 
                    src={blog.image} 
                    alt={blog.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-yellow-600/80 text-white border-0">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                    <Badge className="bg-blue-600/80 text-white border-0">
                      {blog.category}
                    </Badge>
                  </div>
                  {blog.trending && (
                    <Badge className="absolute top-4 right-4 bg-red-600/80 text-white border-0">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span className="mx-2">•</span>
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                    <span className="mx-2">•</span>
                    <BookOpen className="w-4 h-4" />
                    <span>{blog.views.toLocaleString()} views</span>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  
                  <CardDescription className="text-neutral-300 line-clamp-3 text-lg">
                    {blog.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image 
                        src={blog.author.avatar} 
                        alt={blog.author.name} 
                        width={48} 
                        height={48} 
                        className="rounded-full border-2 border-neutral-600" 
                      />
                      <div>
                        <p className="text-sm font-medium text-white">{blog.author.name}</p>
                        <p className="text-xs text-neutral-400">Featured Author</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-4">
                  <Link href={`/blog/${blog.id}`} className="w-full">
                    <Button 
                      className="w-full bg-gradient-to-br from-yellow-600/40 via-neutral-950 to-orange-600/30 hover:from-yellow-500/50 hover:to-orange-500/40 text-white border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group/btn"
                    >
                      <span>Read Featured Article</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Search and Filter Section */}
      <section className="py-12 px-4 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-neutral-900/50 border-neutral-700 text-white placeholder-neutral-400 focus:border-blue-500"
              />
            </div>
            
            <Button
              variant={showFeatured ? "default" : "outline"}
              size="sm"
              onClick={() => setShowFeatured(!showFeatured)}
              className={showFeatured 
                ? "bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600" 
                : "bg-neutral-900/50 border-neutral-700 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }
            >
              <Star className="w-4 h-4 mr-2" />
              Featured Only
            </Button>
          </div>
        </div>
      </section>
      
      {/* Category Tabs Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Zap className="w-6 h-6 text-blue-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">Browse by Category</h2>
            </div>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Explore our articles organized by topics and categories
            </p>
          </div>
          
          <Tabs defaultValue="All" className="w-full" onValueChange={(value) => {
            setSelectedCategory(value);
            setVisiblePosts(9); // Reset to 9 posts when category changes
          }}>
            <TabsList className="grid w-full grid-cols-5 lg:grid-cols-9 bg-neutral-900/50 border border-neutral-700">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-neutral-300 hover:text-white transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                {displayedBlogs.length === 0 ? (
                  <div className="text-center py-20">
                    <BookOpen className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-neutral-400 mb-2">No articles found</h3>
                    <p className="text-neutral-500">Try selecting a different category</p>
                  </div>
                ) : (
                  <>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {displayedBlogs.map((blog) => (
                        <Card key={blog.id} className="group bg-neutral-900/50 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
                          <div className="relative w-full h-64 overflow-hidden">
                            <Image 
                              src={blog.image} 
                              alt={blog.title} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <Badge className="bg-blue-600/80 text-white border-0">
                                {blog.category}
                              </Badge>
                              {blog.trending && (
                                <Badge className="bg-red-600/80 text-white border-0">
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  Trending
                                </Badge>
                              )}
                            </div>
                          </div>
                          
                          <CardHeader className="pb-4">
                            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                              <Calendar className="w-4 h-4" />
                              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                              })}</span>
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4" />
                              <span>{blog.readTime}</span>
                            </div>
                            
                            <CardTitle className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                              {blog.title}
                            </CardTitle>
                            
                            <CardDescription className="text-neutral-300 line-clamp-3">
                              {blog.description}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardContent className="pt-0">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <Image 
                                  src={blog.author.avatar} 
                                  alt={blog.author.name} 
                                  width={40} 
                                  height={40} 
                                  className="rounded-full border-2 border-neutral-600" 
                                />
                                <div>
                                  <p className="text-sm font-medium text-white">{blog.author.name}</p>
                                  <p className="text-xs text-neutral-400">Author</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-xs text-neutral-400">{blog.views.toLocaleString()} views</p>
                              </div>
                            </div>
                          </CardContent>
                          
                          <CardFooter className="pt-4">
                            <Link href={`/blog/${blog.id}`} className="w-full">
                              <Button 
                                className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 transition-all duration-300 group/btn"
                              >
                                <span>Read Article</span>
                                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      ))}
                    </div>
                    
                    {/* Load More Button */}
                    {hasMorePosts && (
                      <div className="text-center mt-16">
                        <Button 
                          size="lg"
                          onClick={handleLoadMore}
                          className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
                        >
                          Load More Articles ({currentCategoryBlogs.length - displayedBlogs.length} remaining)
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
} 