import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Zap, TrendingUp, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.benefit-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.benefit-number',
        { scale: 0 },
        {
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    {
      number: '01',
      icon: Settings,
      title: 'Custom Pricing',
      description: 'Different prices fro retailers, wholesalers, or regions'
    },
    {
      number: '02', 
      icon: Zap,
      title: 'Instant Quoatations',
      description: 'Auto GST or VAT-compliant quotes in seconds'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Stock Management',
      description: 'Region-wise stock allocation and tracking'
    },
    {
      number: '04',
      icon: Package,
      title: 'Effortless Ordering',
      description: 'One-click reorders & bulk uploads'
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 gradient-mesh-2 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      <div className="absolute -top-32 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 right-1/4 w-48 h-48 bg-gradient-to-l from-green-500/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Why Businesses Love{' '}
            <span className="gradient-primary bg-clip-text text-transparent glow-text">Hanexis !</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            From manual work to Automated Growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="benefit-card relative gradient-card rounded-3xl p-10 text-left shadow-premium hover:shadow-card-hover transition-elastic group cursor-pointer border border-white/20 backdrop-blur-2xl overflow-hidden"
              >
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl"></div>
                
                <div className="absolute top-8 right-8 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-smooth">
                  {benefit.number}
                </div>
                
                <div className="relative mb-8">
                  <div className="benefit-number w-16 h-16 gradient-primary rounded-3xl flex items-center justify-center mb-6 group-hover:glow-strong transition-smooth shadow-elegant group-hover:scale-110">
                    <IconComponent className="w-8 h-8 text-white transition-transform" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-primary transition-smooth">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  {benefit.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-smooth">
                  <span>Explore feature</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;