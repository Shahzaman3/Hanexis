import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured?: boolean;
  index: number;
}

const BlogCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  readTime, 
  category, 
  image, 
  featured = false,
  index 
}: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ y: -8 }}
      className={`group ${featured ? 'md:col-span-2' : ''}`}
    >
      <Card className="h-full overflow-hidden border-0 shadow-none bg-card/50 backdrop-blur-sm card-hover">
        <div className="relative overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              featured ? 'h-64 md:h-80' : 'h-48'
            }`}
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <motion.span 
              className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              {category}
            </motion.span>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <CardContent className={`p-6 ${featured ? 'md:p-8' : ''}`}>
          <motion.h3 
            className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 ${
              featured ? 'text-2xl md:text-3xl' : 'text-xl'
            }`}
            layoutId={`title-${index}`}
          >
            {title}
          </motion.h3>
          
          <p className={`text-muted-foreground mb-4 line-clamp-3 ${
            featured ? 'text-lg' : ''
          }`}>
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                <User size={14} />
                <span>{author}</span>
              </motion.div>
              
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{readTime}</span>
              </div>
            </div>
            
            <motion.div
              className="flex items-center space-x-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 5 }}
            >
              <span className="font-medium">Read more</span>
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BlogCard;