import { motion } from "framer-motion";
import BlogHero from "@/components/BlogHero";
import BlogGrid from "@/components/BlogGrid";

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <BlogHero />
      <BlogGrid />
    </motion.div>
  );
};

export default Blog;