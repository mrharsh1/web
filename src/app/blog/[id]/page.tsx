"use client"
import { Card, CardContent, CardHeader } from "@/components/lightswind/card";
import { Button } from "@/components/lightswind/button";
import { Badge } from "@/components/lightswind/badge";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Star, TrendingUp, BookOpen, Share2, Heart, MessageCircle, Bookmark } from "lucide-react";
import { notFound } from "next/navigation";

// Blog data - in a real app, this would come from a database
const blogs = [
  {
    id: 1,
    title: "How to Build a Modern Blog in Next.js",
    image: "https://plus.unsplash.com/premium_photo-1685086785077-ff65bf749544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Learn how to create a fast, modern blog using Next.js, Tailwind CSS, and best practices for SEO and performance.",
    content: `
      <h2>Introduction</h2>
      <p>Building a modern blog with Next.js is an excellent choice for developers who want to create fast, SEO-friendly websites. In this comprehensive guide, we'll walk through the entire process from setup to deployment.</p>
      
      <h2>Why Next.js for Blogging?</h2>
      <p>Next.js offers several advantages for blog development:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR):</strong> Better SEO and faster initial page loads</li>
        <li><strong>Static Site Generation (SSG):</strong> Pre-rendered pages for optimal performance</li>
        <li><strong>Built-in Routing:</strong> File-based routing system</li>
        <li><strong>Image Optimization:</strong> Automatic image optimization with next/image</li>
        <li><strong>TypeScript Support:</strong> First-class TypeScript support</li>
      </ul>
      
      <h2>Setting Up Your Project</h2>
      <p>Let's start by creating a new Next.js project:</p>
      <pre><code>npx create-next-app@latest my-blog --typescript --tailwind --eslint</code></pre>
      
      <h2>Project Structure</h2>
      <p>Organize your blog with a clear structure:</p>
      <pre><code>my-blog/
├── src/
│   ├── app/
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── lib/
│   └── content/
└── public/</code></pre>
      
      <h2>Creating the Blog Layout</h2>
      <p>Design a clean, modern layout for your blog posts. Consider using a card-based design with proper typography and spacing.</p>
      
      <h2>SEO Optimization</h2>
      <p>Implement proper SEO practices:</p>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Add meta tags for each page</li>
        <li>Implement structured data</li>
        <li>Optimize images with alt text</li>
        <li>Create a sitemap</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Ensure your blog loads quickly:</p>
      <ul>
        <li>Use Next.js Image component</li>
        <li>Implement lazy loading</li>
        <li>Optimize fonts with next/font</li>
        <li>Use dynamic imports for heavy components</li>
      </ul>
      
      <h2>Deployment</h2>
      <p>Deploy your blog to Vercel for the best experience:</p>
      <pre><code>npm run build
vercel --prod</code></pre>
      
      <h2>Conclusion</h2>
      <p>Building a blog with Next.js provides you with a modern, fast, and SEO-friendly platform. The combination of SSR, SSG, and excellent developer experience makes it an ideal choice for content creators.</p>
    `,
    author: {
      name: "Gema Santiago",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      bio: "Senior Full Stack Developer with 8+ years of experience in React, Next.js, and modern web technologies."
    },
    date: "2024-06-01",
    category: "Development",
    readTime: "8 min read",
    featured: true,
    trending: true,
    views: 12450,
    likes: 342,
    comments: 28
  },
  {
    id: 2,
    title: "10 UI Design Tips for 2024",
    image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Upgrade your UI skills with these 10 actionable design tips for modern web apps.",
    content: `
      <h2>Introduction</h2>
      <p>UI design is constantly evolving, and staying ahead of the curve is crucial for creating engaging user experiences. Here are 10 essential tips that will dominate 2024.</p>
      
      <h2>1. Micro-interactions Matter</h2>
      <p>Small animations and transitions can significantly improve user engagement. Focus on subtle hover effects, loading states, and feedback animations.</p>
      
      <h2>2. Accessibility-First Design</h2>
      <p>Design for everyone. Ensure proper contrast ratios, keyboard navigation, and screen reader compatibility from the start.</p>
      
      <h2>3. Dark Mode by Default</h2>
      <p>Users expect dark mode options. Implement it thoughtfully with proper color schemes and smooth transitions.</p>
      
      <h2>4. Mobile-First Approach</h2>
      <p>With mobile usage continuing to grow, prioritize mobile experiences in your design process.</p>
      
      <h2>5. Minimalist Interfaces</h2>
      <p>Less is more. Remove unnecessary elements and focus on essential functionality and content.</p>
      
      <h2>6. Custom Illustrations</h2>
      <p>Stand out with unique, branded illustrations that reflect your company's personality and values.</p>
      
      <h2>7. Advanced Typography</h2>
      <p>Experiment with font combinations, variable fonts, and creative text layouts to create visual hierarchy.</p>
      
      <h2>8. 3D Elements</h2>
      <p>Incorporate subtle 3D elements, shadows, and depth to create more engaging interfaces.</p>
      
      <h2>9. Voice and AI Integration</h2>
      <p>Prepare for voice interfaces and AI-powered interactions in your design systems.</p>
      
      <h2>10. Sustainability in Design</h2>
      <p>Consider the environmental impact of your designs, from efficient code to optimized assets.</p>
      
      <h2>Conclusion</h2>
      <p>These trends will shape the future of UI design. Stay curious, experiment, and always prioritize user experience.</p>
    `,
    author: {
      name: "Dalibor Mišković",
      avatar: "https://randomuser.me/api/portraits/men/92.jpg",
      bio: "UI/UX Designer passionate about creating beautiful, functional, and accessible digital experiences."
    },
    date: "2024-05-28",
    category: "Design",
    readTime: "6 min read",
    featured: false,
    trending: true,
    views: 8920,
    likes: 256,
    comments: 19
  },
  {
    id: 3,
    title: "Dark Mode: Best Practices",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Implement dark mode in your apps the right way, with accessibility and style in mind.",
    content: `
      <h2>Why Dark Mode Matters</h2>
      <p>Dark mode isn't just a trend—it's a user preference that can improve readability, reduce eye strain, and save battery life on OLED displays.</p>
      
      <h2>Design Principles</h2>
      <p>When implementing dark mode, consider these key principles:</p>
      <ul>
        <li>Maintain proper contrast ratios</li>
        <li>Use semantic color naming</li>
        <li>Test with real users</li>
        <li>Provide smooth transitions</li>
      </ul>
      
      <h2>Color Palette Selection</h2>
      <p>Choose colors that work well in both light and dark modes. Avoid pure black and white—use softer grays instead.</p>
      
      <h2>Implementation Strategies</h2>
      <p>There are several ways to implement dark mode:</p>
      <ul>
        <li>CSS custom properties</li>
        <li>CSS-in-JS solutions</li>
        <li>Tailwind CSS dark mode</li>
        <li>CSS media queries</li>
      </ul>
      
      <h2>Accessibility Considerations</h2>
      <p>Ensure your dark mode implementation meets WCAG guidelines for contrast and readability.</p>
      
      <h2>User Preference Detection</h2>
      <p>Respect user preferences by detecting system-level dark mode settings and providing manual toggle options.</p>
      
      <h2>Testing and Validation</h2>
      <p>Test your dark mode implementation across different devices, browsers, and user scenarios.</p>
      
      <h2>Conclusion</h2>
      <p>Dark mode is here to stay. Implement it thoughtfully to enhance user experience and accessibility.</p>
    `,
    author: {
      name: "Jane Price",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
      bio: "Frontend Developer specializing in accessibility and inclusive design practices."
    },
    date: "2024-05-20",
    category: "UI/UX",
    readTime: "5 min read",
    featured: true,
    trending: false,
    views: 7560,
    likes: 198,
    comments: 15
  },
  {
    id: 4,
    title: "Performance Optimization in React",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Speed up your React apps with these proven performance optimization techniques.",
    content: `
      <h2>Why Performance Matters</h2>
      <p>Performance is crucial for user experience. Slow applications lead to poor user engagement and higher bounce rates.</p>
      
      <h2>Code Splitting</h2>
      <p>Split your code into smaller chunks to reduce initial bundle size and improve loading times.</p>
      
      <h2>Lazy Loading</h2>
      <p>Load components and routes only when needed to improve initial page load performance.</p>
      
      <h2>Memoization</h2>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.</p>
      
      <h2>Bundle Optimization</h2>
      <p>Optimize your bundle size by removing unused dependencies and code.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process. Monitor your app's performance and continuously improve.</p>
    `,
    author: {
      name: "Ed Boyd",
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
      bio: "Senior React Developer with expertise in performance optimization and modern web technologies."
    },
    date: "2024-05-15",
    category: "Development",
    readTime: "10 min read",
    featured: false,
    trending: true,
    views: 11230,
    likes: 445,
    comments: 32
  },
  {
    id: 5,
    title: "The Future of CSS: Trends to Watch",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww",
    description: "Explore the latest CSS features and trends that are shaping the future of web design.",
    content: `
      <h2>CSS Evolution</h2>
      <p>CSS is evolving rapidly with new features that are changing how we build websites.</p>
      
      <h2>Container Queries</h2>
      <p>Container queries allow you to style elements based on their container's size, not just the viewport.</p>
      
      <h2>CSS Grid Level 2</h2>
      <p>Advanced grid features that provide more control over layout and positioning.</p>
      
      <h2>Advanced Selectors</h2>
      <p>New selector capabilities that make styling more powerful and flexible.</p>
      
      <h2>Conclusion</h2>
      <p>Stay updated with CSS trends to build better, more maintainable websites.</p>
    `,
    author: {
      name: "ملینا رضاییان",
      avatar: "https://randomuser.me/api/portraits/women/35.jpg",
      bio: "CSS expert and frontend developer passionate about modern web standards."
    },
    date: "2024-05-10",
    category: "CSS",
    readTime: "7 min read",
    featured: false,
    trending: false,
    views: 5430,
    likes: 123,
    comments: 8
  },
  {
    id: 6,
    title: "TypeScript for Beginners",
    image: "https://plus.unsplash.com/premium_photo-1678565546661-bf43274dd428?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A gentle introduction to TypeScript for JavaScript developers.",
    content: `
      <h2>What is TypeScript?</h2>
      <p>TypeScript is a superset of JavaScript that adds static typing to the language.</p>
      
      <h2>Getting Started</h2>
      <p>Learn the basics of TypeScript syntax and how it differs from JavaScript.</p>
      
      <h2>Types and Interfaces</h2>
      <p>Understand how to define types and interfaces for better code organization.</p>
      
      <h2>Advanced Features</h2>
      <p>Explore generics, decorators, and other advanced TypeScript features.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript can significantly improve your development experience and code quality.</p>
    `,
    author: {
      name: "Capucine Lucas",
      avatar: "https://randomuser.me/api/portraits/women/88.jpg",
      bio: "TypeScript advocate and full-stack developer with 6+ years of experience."
    },
    date: "2024-05-05",
    category: "Development",
    readTime: "12 min read",
    featured: true,
    trending: false,
    views: 6780,
    likes: 234,
    comments: 18
  },
  {
    id: 7,
    title: "Building Accessible Web Apps",
    image: "https://cdn.pixabay.com/photo/2019/12/21/06/52/programmer-4709802_1280.jpg",
    description: "Accessibility is essential. Learn how to make your web apps usable for everyone.",
    content: `
      <h2>Why Accessibility Matters</h2>
      <p>Web accessibility ensures that your applications can be used by people with disabilities.</p>
      
      <h2>WCAG Guidelines</h2>
      <p>Follow the Web Content Accessibility Guidelines for better user experience.</p>
      
      <h2>ARIA Labels</h2>
      <p>Use proper ARIA labels to make your content accessible to screen readers.</p>
      
      <h2>Keyboard Navigation</h2>
      <p>Ensure your applications can be navigated using only a keyboard.</p>
      
      <h2>Conclusion</h2>
      <p>Accessibility should be a priority, not an afterthought.</p>
    `,
    author: {
      name: "Grace Wang",
      avatar: "https://randomuser.me/api/portraits/women/26.jpg",
      bio: "Accessibility specialist and frontend developer committed to inclusive design."
    },
    date: "2024-05-01",
    category: "Accessibility",
    readTime: "9 min read",
    featured: false,
    trending: true,
    views: 4450,
    likes: 156,
    comments: 12
  },
  {
    id: 8,
    title: "Next.js App Router: A Complete Guide",
    image: "https://cdn.pixabay.com/photo/2024/04/09/03/04/ai-generated-8684869_1280.jpg",
    description: "Master the new App Router in Next.js for scalable, maintainable apps.",
    content: `
      <h2>App Router Overview</h2>
      <p>The App Router revolutionizes how we build Next.js applications with file-based routing.</p>
      
      <h2>Basic Routing</h2>
      <p>Learn how to create routes using the new file system structure.</p>
      
      <h2>Advanced Patterns</h2>
      <p>Explore parallel routes, intercepting routes, and other advanced patterns.</p>
      
      <h2>Data Fetching</h2>
      <p>Understand how to fetch data in the App Router with server components.</p>
      
      <h2>Conclusion</h2>
      <p>The App Router provides powerful features for building modern web applications.</p>
    `,
    author: {
      name: "Reyansh Uchil",
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      bio: "Next.js expert and full-stack developer with deep knowledge of modern web frameworks."
    },
    date: "2024-04-28",
    category: "Next.js",
    readTime: "15 min read",
    featured: true,
    trending: true,
    views: 15670,
    likes: 567,
    comments: 45
  },
  {
    id: 9,
    title: "State Management in 2024",
    image: "https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg",
    description: "Redux, Zustand, Jotai, or Context? Find out which state management tool is right for you.",
    content: `
      <h2>State Management Options</h2>
      <p>Compare different state management solutions for React applications.</p>
      
      <h2>Redux Toolkit</h2>
      <p>Modern Redux with simplified setup and better developer experience.</p>
      
      <h2>Zustand</h2>
      <p>Lightweight state management with minimal boilerplate.</p>
      
      <h2>Jotai</h2>
      <p>Atomic state management for React applications.</p>
      
      <h2>Context API</h2>
      <p>Built-in React state management for simple applications.</p>
      
      <h2>Conclusion</h2>
      <p>Choose the right state management solution based on your project needs.</p>
    `,
    author: {
      name: "Ava Patel",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      bio: "React developer specializing in state management and application architecture."
    },
    date: "2024-04-20",
    category: "React",
    readTime: "11 min read",
    featured: false,
    trending: false,
    views: 8230,
    likes: 289,
    comments: 22
  },
  {
    id: 10,
    title: "Deploying Next.js Apps Effortlessly",
    image: "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
    description: "From Vercel to Netlify, learn the easiest ways to deploy your Next.js projects.",
    content: `
      <h2>Deployment Platforms</h2>
      <p>Explore different platforms for deploying Next.js applications.</p>
      
      <h2>Vercel Deployment</h2>
      <p>Deploy to Vercel for the best Next.js experience with automatic optimizations.</p>
      
      <h2>Netlify Deployment</h2>
      <p>Alternative deployment option with good Next.js support.</p>
      
      <h2>Environment Variables</h2>
      <p>Configure environment variables for different deployment environments.</p>
      
      <h2>Build Optimization</h2>
      <p>Optimize your build process for faster deployments.</p>
      
      <h2>Conclusion</h2>
      <p>Choose the right deployment platform based on your needs and budget.</p>
    `,
    author: {
      name: "Liam Smith",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      bio: "DevOps engineer and Next.js developer with expertise in deployment and CI/CD."
    },
    date: "2024-04-15",
    category: "Deployment",
    readTime: "6 min read",
    featured: false,
    trending: false,
    views: 5670,
    likes: 178,
    comments: 14
  },
  {
    id: 11,
    title: "Advanced React Hooks Patterns",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop&q=60",
    description: "Master advanced React hooks patterns for better code organization and reusability.",
    content: `
      <h2>Custom Hooks</h2>
      <p>Learn how to create custom hooks for better code organization and reusability.</p>
      
      <h2>Hook Composition</h2>
      <p>Combine multiple hooks to create powerful abstractions.</p>
      
      <h2>Best Practices</h2>
      <p>Follow best practices for creating and using custom hooks.</p>
      
      <h2>Conclusion</h2>
      <p>Custom hooks can significantly improve your React code quality and maintainability.</p>
    `,
    author: {
      name: "Marcus Chen",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "React expert and software architect with deep knowledge of hooks and patterns."
    },
    date: "2024-04-10",
    category: "React",
    readTime: "14 min read",
    featured: false,
    trending: false,
    views: 4320,
    likes: 145,
    comments: 11
  },
  {
    id: 12,
    title: "CSS Grid vs Flexbox: When to Use What",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60",
    description: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layouts.",
    content: `
      <h2>Layout Systems</h2>
      <p>Understand the differences between CSS Grid and Flexbox layout systems.</p>
      
      <h2>When to Use Grid</h2>
      <p>Use CSS Grid for two-dimensional layouts and complex page structures.</p>
      
      <h2>When to Use Flexbox</h2>
      <p>Use Flexbox for one-dimensional layouts and component-level styling.</p>
      
      <h2>Combining Both</h2>
      <p>Learn how to combine Grid and Flexbox for optimal layouts.</p>
      
      <h2>Conclusion</h2>
      <p>Choose the right layout system based on your specific needs.</p>
    `,
    author: {
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      bio: "CSS specialist and frontend developer with expertise in modern layout techniques."
    },
    date: "2024-04-05",
    category: "CSS",
    readTime: "9 min read",
    featured: false,
    trending: false,
    views: 3890,
    likes: 98,
    comments: 7
  },
  {
    id: 13,
    title: "Testing React Applications",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=60",
    description: "Comprehensive testing strategies for React applications using Jest and React Testing Library.",
    content: `
      <h2>Testing Fundamentals</h2>
      <p>Learn the fundamentals of testing React applications effectively.</p>
      
      <h2>Jest Setup</h2>
      <p>Set up Jest for testing your React components and utilities.</p>
      
      <h2>React Testing Library</h2>
      <p>Use React Testing Library for user-centric testing approaches.</p>
      
      <h2>Testing Strategies</h2>
      <p>Implement comprehensive testing strategies for your React applications.</p>
      
      <h2>Conclusion</h2>
      <p>Good testing practices lead to more reliable and maintainable applications.</p>
    `,
    author: {
      name: "David Kim",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      bio: "QA engineer and React developer with expertise in testing and quality assurance."
    },
    date: "2024-04-01",
    category: "Development",
    readTime: "13 min read",
    featured: false,
    trending: false,
    views: 3450,
    likes: 87,
    comments: 6
  },
  {
    id: 14,
    title: "Design Systems: Building for Scale",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&auto=format&fit=crop&q=60",
    description: "Create scalable design systems that maintain consistency across large applications.",
    content: `
      <h2>Design System Basics</h2>
      <p>Understand the fundamentals of building scalable design systems.</p>
      
      <h2>Component Library</h2>
      <p>Create a comprehensive component library for your design system.</p>
      
      <h2>Documentation</h2>
      <p>Document your design system for better team collaboration.</p>
      
      <h2>Maintenance</h2>
      <p>Learn how to maintain and evolve your design system over time.</p>
      
      <h2>Conclusion</h2>
      <p>A well-designed system improves consistency and development efficiency.</p>
    `,
    author: {
      name: "Emma Wilson",
      avatar: "https://randomuser.me/api/portraits/women/23.jpg",
      bio: "Design system architect and UI/UX designer with experience in large-scale applications."
    },
    date: "2024-03-28",
    category: "Design",
    readTime: "11 min read",
    featured: false,
    trending: false,
    views: 2980,
    likes: 76,
    comments: 5
  },
  {
    id: 15,
    title: "Web Security Best Practices",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=900&auto=format&fit=crop&q=60",
    description: "Essential security practices every web developer should implement.",
    content: `
      <h2>Security Fundamentals</h2>
      <p>Learn the essential security practices for web development.</p>
      
      <h2>Input Validation</h2>
      <p>Implement proper input validation to prevent security vulnerabilities.</p>
      
      <h2>Authentication</h2>
      <p>Secure authentication practices for web applications.</p>
      
      <h2>Data Protection</h2>
      <p>Protect sensitive data with encryption and secure storage practices.</p>
      
      <h2>Conclusion</h2>
      <p>Security should be a priority in every web development project.</p>
    `,
    author: {
      name: "Alex Rodriguez",
      avatar: "https://randomuser.me/api/portraits/men/89.jpg",
      bio: "Security expert and full-stack developer with focus on secure web applications."
    },
    date: "2024-03-25",
    category: "Development",
    readTime: "10 min read",
    featured: false,
    trending: false,
    views: 2670,
    likes: 65,
    comments: 4
  }
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const blog = blogs.find(b => b.id === parseInt(params.id));
  
  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-neutral-950 text-white min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link href="/blog">
          <Button variant="ghost" className="text-neutral-400 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 mb-12">
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
          <Image 
            src={blog.image} 
            alt={blog.title} 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-6 left-6 flex gap-2">
            <Badge className="bg-blue-600/80 text-white border-0">
              {blog.category}
            </Badge>
            {blog.featured && (
              <Badge className="bg-yellow-600/80 text-white border-0">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            )}
            {blog.trending && (
              <Badge className="bg-red-600/80 text-white border-0">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-6 text-neutral-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(blog.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>{blog.views.toLocaleString()} views</span>
            </div>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-6 bg-neutral-900/50 rounded-xl border border-neutral-700">
            <Image 
              src={blog.author.avatar} 
              alt={blog.author.name} 
              width={64} 
              height={64} 
              className="rounded-full border-2 border-neutral-600" 
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white">{blog.author.name}</h3>
              <p className="text-sm text-neutral-400">{blog.author.bio}</p>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="border-neutral-600 text-neutral-400 hover:text-white">
                <Heart className="w-4 h-4 mr-2" />
                {blog.likes}
              </Button>
              <Button size="sm" variant="outline" className="border-neutral-600 text-neutral-400 hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                {blog.comments}
              </Button>
              <Button size="sm" variant="outline" className="border-neutral-600 text-neutral-400 hover:text-white">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-neutral-600 text-neutral-400 hover:text-white">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <Card className="bg-neutral-900/50 border border-neutral-700">
          <CardContent className="p-8">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              style={{
                '--tw-prose-body': '#d1d5db',
                '--tw-prose-headings': '#ffffff',
                '--tw-prose-links': '#3b82f6',
                '--tw-prose-bold': '#ffffff',
                '--tw-prose-counters': '#6b7280',
                '--tw-prose-bullets': '#6b7280',
                '--tw-prose-hr': '#374151',
                '--tw-prose-quotes': '#f3f4f6',
                '--tw-prose-quote-borders': '#374151',
                '--tw-prose-captions': '#9ca3af',
                '--tw-prose-code': '#ffffff',
                '--tw-prose-pre-code': '#d1d5db',
                '--tw-prose-pre-bg': '#1f2937',
                '--tw-prose-th-borders': '#4b5563',
                '--tw-prose-td-borders': '#374151',
              } as React.CSSProperties}
            />
          </CardContent>
        </Card>

        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {blogs
              .filter(b => b.id !== blog.id && b.category === blog.category)
              .slice(0, 2)
              .map((relatedBlog) => (
                <Card key={relatedBlog.id} className="group bg-neutral-900/50 border border-neutral-700 hover:border-blue-500/50 transition-all duration-300">
                  <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                    <Image 
                      src={relatedBlog.image} 
                      alt={relatedBlog.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(relatedBlog.date).toLocaleDateString()}</span>
                      <span className="mx-2">•</span>
                      <Clock className="w-4 h-4" />
                      <span>{relatedBlog.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-neutral-300 line-clamp-2">
                      {relatedBlog.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Link href={`/blog/${relatedBlog.id}`}>
                      <Button className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 transition-all duration-300">
                        Read Article
                        <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 