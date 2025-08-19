import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import blogFeatured1 from "@/asset/blog-featured-1.jpg";
import blogFeatured2 from "@/asset/blog-featured-2.jpg";
import blogFeatured3 from "@/asset/blog-featured-3.jpg"

const blogPosts = [
  {
    id: 1,
    title: "The Future of B2B E-commerce: Trends Shaping 2024",
    excerpt: "Discover the latest trends and technologies revolutionizing B2B commerce, from AI-powered pricing to automated inventory management.",
    author: "Sarah Johnson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Industry Trends",
    image: blogFeatured1,
    featured: true
  },
  {
    id: 2,
    title: "Optimizing Shopify for B2B: Advanced Strategies",
    excerpt: "Learn how to transform your Shopify store into a powerful B2B platform with custom pricing, bulk orders, and client management.",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Shopify",
    image: blogFeatured2,
    featured: false
  },
  {
    id: 3,
    title: "Dynamic Pricing Strategies That Drive Revenue",
    excerpt: "Explore proven dynamic pricing models that help B2B businesses maximize profit margins while staying competitive.",
    author: "Emma Davis",
    date: "Dec 10, 2024",
    readTime: "5 min read",
    category: "Pricing",
    image: blogFeatured3,
    featured: false
  },
  {
    id: 4,
    title: "Automating B2B Quotations: A Complete Guide",
    excerpt: "Step-by-step guide to implementing automated quotation systems that save time and reduce errors in your sales process.",
    author: "David Wilson",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    category: "Automation",
    image: blogFeatured1,
    featured: false
  },
  {
    id: 5,
    title: "Building Customer Loyalty in B2B Commerce",
    excerpt: "Proven strategies to increase customer retention and build long-lasting relationships in the B2B marketplace.",
    author: "Lisa Thompson",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Customer Success",
    image: blogFeatured2,
    featured: false
  },
  {
    id: 6,
    title: "Integration Best Practices for E-commerce Platforms",
    excerpt: "Essential tips for seamlessly integrating third-party tools and services with your e-commerce platform.",
    author: "Alex Rodriguez",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    category: "Integration",
    image: blogFeatured3,
    featured: false
  }
];

const BlogGrid = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with expert insights, practical guides, and industry analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
              readTime={post.readTime}
              category={post.category}
              image={post.image}
              featured={post.featured}
              index={index}
            />
          ))}
        </div>

        {/* Load more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-xl shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px hsl(45 100% 65% / 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogGrid;