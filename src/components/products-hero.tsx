import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import { ArrowRight } from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";

interface ProductsHeroProps {
  badge?: string;
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

const ProductsHero: React.FC<ProductsHeroProps> = ({
  badge = "Our Products",
  heading = (
    <>
      Tools to Power Your Business
    </>
  ),
  subheading = (
    <>Discover our suite of innovative products designed to help you grow, collaborate, and succeed.</>
  ),
  buttonText = "Request a Demo",
  onButtonClick,
  buttonIcon = <ArrowRight className="ml-2 w-4 h-4" />,
  children,
  className = "",
}) => (
  <section className={`relative overflow-hidden py-24 ${className}`}>
    <Boxes />
    {/* If you have a 3D hero, wrap it like this: */}
    {/* <div className="absolute inset-0 z-0 pointer-events-none"><Products3DHero /></div> */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30  pointer-events-none z-10" />
    <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        {badge && (
          <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
            {badge}
          </Badge>
        )}
        {heading && (
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            {heading}
          </h1>
        )}
        {subheading && (
          <p className="text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            {subheading}
          </p>
        )}
        {buttonText && (
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={onButtonClick}>
            {buttonText} {buttonIcon}
          </Button>
        )}
        {children}
      </motion.div>
    </div>
  </section>
);

export default ProductsHero; 