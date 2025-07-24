"use client";
import { FaCode, FaMobileAlt, FaCloud, FaPaintBrush, FaLock, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-3xl text-blue-500" />,
    title: "Web Development",
    desc: "Modern, scalable websites and web apps tailored to your business needs.",
  },
  {
    icon: <FaMobileAlt className="text-3xl text-green-500" />,
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android.",
  },
  {
    icon: <FaCloud className="text-3xl text-purple-500" />,
    title: "Cloud Solutions",
    desc: "Cloud migration, hosting, and scalable infrastructure setup.",
  },
  {
    icon: <FaPaintBrush className="text-3xl text-pink-500" />,
    title: "UI/UX Design",
    desc: "Beautiful, user-centric designs for web and mobile platforms.",
  },
  {
    icon: <FaLock className="text-3xl text-yellow-500" />,
    title: "Cybersecurity",
    desc: "Protect your business with robust security solutions.",
  },
  {
    icon: <FaChartLine className="text-3xl text-red-500" />,
    title: "Analytics & SEO",
    desc: "Data-driven insights and SEO strategies to grow your business.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-[70vh] bg-neutral-950 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-4 text-center">Our Services</h1>
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto">
          We offer a wide range of digital solutions to help your business thrive in the modern world.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-center shadow hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-xl font-bold mb-2">{service.title}</h2>
              <p className="text-neutral-400 text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 