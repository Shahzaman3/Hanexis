import { motion } from "framer-motion";
import blogHero from "@/asset/blog-hero.jpg";

const BlogHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blogHero})` }}
      >
        <div className="absolute inset-0 blog-gradient opacity-90" />
      </div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-primary/10 rounded-full blur-xl float-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Hanexis</span>{" "}
            <span className="text-foreground">Blog</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Insights, tutorials, and industry trends to help you succeed in B2B e-commerce
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              E-commerce
            </div>
            <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              B2B Solutions
            </div>
            <div className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Shopify
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;