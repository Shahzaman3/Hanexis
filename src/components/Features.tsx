import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, Users, TrendingUp, ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.features-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Feature cards animation
      gsap.fromTo('.feature-card',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Icon hover animations
      const icons = document.querySelectorAll('.feature-icon');
      icons.forEach((icon) => {
        icon.addEventListener('mouseenter', () => {
          gsap.to(icon, { 
            scale: 1.2, 
            rotation: 10, 
            duration: 0.3, 
            ease: 'back.out(1.7)' 
          });
        });
        
        icon.addEventListener('mouseleave', () => {
          gsap.to(icon, { 
            scale: 1, 
            rotation: 0, 
            duration: 0.3, 
            ease: 'power2.out' 
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: BarChart3,
      title: 'Seller Dashboard',
      description: 'Client management, stock control, quotation generation.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: 'Buyer Dashboard',
      description: 'Personalized prices, easy ordering, invoive tracking',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Analytics',
      description: 'Top-selling customers, client spend, sales trends.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: ExternalLink,
      title: 'Extras',
      description: 'Credit Options, shipping rules, role-based dashboards.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section ref={sectionRef} className="py-10 gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="features-title text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="gradient-primary bg-clip-text text-transparent glow-text">Features</span>
            {' '} You'll Use Everyday
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Everything you need to automate, optimize, and scale your e-commerce business with <span className="font-semibold text-foreground">absolute confidence and precision.</span>
          </p>
        </div>

        <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={index}
                className="feature-card gradient-card rounded-3xl p-10 text-left shadow-premium hover:shadow-card-hover transition-elastic group cursor-pointer border border-white/20 relative overflow-hidden backdrop-blur-2xl"
              >
                {/* Premium Background Effects */}
                <div className={`absolute -top-20 -right-20 w-32 h-32 bg-gradient-to-br ${feature.color} rounded-full opacity-10 group-hover:opacity-30 transition-smooth blur-2xl`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                
                <div className="relative mb-8">
                  <div className={`feature-icon w-18 h-18 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mb-6 group-hover:glow-strong transition-elastic group-hover:scale-110 shadow-elegant`}>
                    <IconComponent className="w-9 h-9 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-smooth">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {feature.description}
                </p>

                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;