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
  const [scrollContainer, setScrollContainer] = useState<HTMLDivElement | null>(null);

  // Reset visible posts when search or filters change
  const resetPagination = () => {
    setVisiblePosts(9);
  };

  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    resetPagination();
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    resetPagination();
  };

  // Handle featured filter toggle
  const handleFeaturedToggle = () => {
    setShowFeatured(!showFeatured);
    resetPagination();
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
    resetPagination();
  };

  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      // Search functionality
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = searchTerm === "" || 
                           blog.title.toLowerCase().includes(searchLower) ||
                           blog.description.toLowerCase().includes(searchLower) ||
                           blog.author.name.toLowerCase().includes(searchLower) ||
                           blog.category.toLowerCase().includes(searchLower) ||
                           blog.content.toLowerCase().includes(searchLower);
      
      // Category filter
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      
      // Featured filter
      const matchesFeatured = !showFeatured || blog.featured;
      
      return matchesSearch && matchesCategory && matchesFeatured;
    });
  }, [searchTerm, selectedCategory, showFeatured]);

  const featuredBlogs = blogs.filter(blog => blog.featured);
  const trendingBlogs = blogs.filter(blog => blog.trending);

  const getCategoryBlogs = (category: string) => {
    if (category === "All") {
      // Use filtered blogs and exclude featured posts from "All" category
      return filteredBlogs.filter(blog => !blog.featured);
    }
    return filteredBlogs.filter(blog => blog.category === category && !blog.featured);
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
      
      {/* Search Bar Section - Right below Hero */}
      <section className="py-8 px-4 bg-gradient-to-b from-neutral-900/50 to-neutral-950 border-b border-neutral-800">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Moving Border Effect for Search Container */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 animate-tilt"></div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-2xl blur opacity-25 animate-tilt-reverse"></div>
            
            <div className="relative bg-neutral-900/80 border border-neutral-700 rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search Input */}
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search articles, authors, or topics..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="pl-12 pr-12 py-3 bg-neutral-800/50 border-neutral-600 text-white placeholder-neutral-400 focus:border-blue-500 focus:ring-blue-500/20 w-full rounded-xl text-lg"
                  />
                  {searchTerm && (
                    <button
                      onClick={clearSearch}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-white transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
                
                {/* Filter Buttons */}
                <div className="flex gap-3 w-full lg:w-auto">
                  <Button
                    variant={showFeatured ? "default" : "outline"}
                    size="sm"
                    onClick={handleFeaturedToggle}
                    className={`cursor-pointer transition-all duration-300 ${
                      showFeatured 
                        ? "bg-yellow-600 hover:bg-yellow-700 text-white border-yellow-600 shadow-lg" 
                        : "bg-neutral-800/50 border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white"
                    }`}
                  >
                    <Star className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Featured Only</span>
                    <span className="sm:hidden">Featured</span>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer bg-neutral-800/50 border-neutral-600 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all duration-300"
                  >
                    <Filter className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Filters</span>
                    <span className="sm:hidden">Filter</span>
                  </Button>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-700">
                <div className="flex items-center gap-4 text-sm text-neutral-400">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {blogs.length} Articles
                  </span>
                  <span className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {trendingBlogs.length} Trending
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {featuredBlogs.length} Featured
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  {searchTerm && (
                    <span className="text-blue-400 flex items-center gap-1">
                      <Search className="w-4 h-4" />
                      "{searchTerm}"
                    </span>
                  )}
                  <span className="text-neutral-400">
                    {filteredBlogs.length} results
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {featuredBlogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className="relative group">
                {/* Moving Border Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>
                
                <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl hover:shadow-2xl hover:border-yellow-500/30 transition-all duration-300 backdrop-blur-sm overflow-hidden">
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
                        className="w-full cursor-pointer bg-gradient-to-br from-yellow-600/40 via-neutral-950 to-orange-600/30 hover:from-yellow-500/50 hover:to-orange-500/40 text-white border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-300 group/btn"
                      >
                        <span>Read Featured Article</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            ))}
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
          
          <Tabs defaultValue="All" className="w-full" onValueChange={handleCategoryChange}>
            <div className="relative">
              {/* Scrollable container with better spacing */}
              <div 
                ref={setScrollContainer}
                className="overflow-x-auto scrollbar-hide scroll-smooth px-2 sm:px-4 py-10" 
                style={{ scrollBehavior: 'smooth' }}
              >
                <TabsList className="grid w-max min-w-full grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9 bg-neutral-950 gap-2 p-2">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:text-neutral-300 hover:text-white transition-all whitespace-nowrap text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 min-w-max rounded-lg cursor-pointer"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </div>
            
            {categories.map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                {displayedBlogs.length === 0 ? (
                  <div className="text-center py-20">
                    <BookOpen className="w-16 h-16 text-neutral-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-neutral-400 mb-2">
                      {searchTerm ? `No results for "${searchTerm}"` : "No articles found"}
                    </h3>
                    <p className="text-neutral-500">
                      {searchTerm 
                        ? "Try adjusting your search terms or filters" 
                        : "Try selecting a different category"
                      }
                    </p>
                    {searchTerm && (
                      <Button 
                        onClick={clearSearch}
                        className="mt-4 cursor-pointer bg-neutral-800 hover:bg-neutral-700 text-white border-neutral-600"
                      >
                        Clear Search
                      </Button>
                    )}
                  </div>
                ) : (
                  <>
                    <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {displayedBlogs.map((blog) => (
                        <div key={blog.id} className="relative group">
                          {/* Moving Border Effect */}
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>
                          
                          <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm overflow-hidden h-full">
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
                            
                            <CardContent className="pt-0 flex-1">
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
                                  className="w-full cursor-pointer bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 transition-all duration-300 group/btn"
                                >
                                  <span>Read Article</span>
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </div>
                      ))}
                    </div>
                    
                    {/* Load More Button */}
                    {hasMorePosts && (
                      <div className="text-center mt-16">
                        <Button 
                          size="lg"
                          onClick={handleLoadMore}
                          className="cursor-pointer bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300"
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
      
      {/* CSS Animations for Moving Borders */}
      <style jsx global>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        
        @keyframes tilt-reverse {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-0.5deg);
          }
          75% {
            transform: rotate(0.5deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-tilt-reverse {
          animation: tilt-reverse 8s infinite linear;
        }
      `}</style>
    </div>
  );
} 