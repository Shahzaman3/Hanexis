import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import { ArrowRight, ShoppingBag, TrendingUp } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<SVGSVGElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero text animations
      gsap.fromTo('.hero-title', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      );
      
      gsap.fromTo('.hero-subtitle', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      );

      gsap.fromTo('.hero-buttons', 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      // Chart animation
      gsap.fromTo('.chart-container', 
        { scale: 0.8, opacity: 0, rotateY: -15 },
        { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: 'power3.out', delay: 1 }
      );

      // Floating icons animation
      gsap.fromTo('.floating-icon', 
        { y: 0 },
        { y: -15, duration: 2, ease: 'power2.inOut', repeat: -1, yoyo: true, stagger: 0.3 }
      );

      // Chart path drawing animation
      const paths = document.querySelectorAll('.chart-path');
      paths.forEach((path, index) => {
        const pathLength = (path as SVGPathElement).getTotalLength();
        gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.out',
          delay: 1.5 + index * 0.3
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center gradient-mesh-1 overflow-hidden mt-20">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 floating-icon">
        <div className="w-20 h-20 glass-morphism rounded-3xl flex items-center justify-center animate-float shadow-elegant">
          <ShoppingBag className="w-10 h-10 text-primary animate-pulse-soft" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 floating-icon">
        <div className="w-16 h-16 gradient-primary rounded-full glow-soft animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="absolute top-1/2 right-32 floating-icon">
        <div className="w-8 h-8 bg-purple-500/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-3 shadow-elegant">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">AI-Powered Pricing Solution</span>
              </div>
              
              <h1 className="hero-title text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tight">
                <span className="text-foreground">The </span><br />
                <span className="gradient-primary bg-clip-text text-transparent glow-text">Smarter Way</span><br />
                <span className="text-foreground"> to Sell B2B on Shopify</span>
              </h1>
              
              <p className="hero-subtitle text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light">
                <span className="font-semibold text-foreground">Custom Pricing, instant quotations, regional stock control - all inside your Shopify Store</span>
              </p>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-6">
              <Button className="gradient-primary hover:shadow-card-hover transition-elastic group px-12 py-6 text-xl font-bold rounded-2xl glow-soft">
                Request For Demo
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-10 pt-8">
              <div className="flex -space-x-4">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full gradient-primary border-4 border-white shadow-elegant flex items-center justify-center animate-pulse-soft" style={{animationDelay: `${i * 0.2}s`}}>
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full glass-morphism border-4 border-white shadow-elegant flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">+</span>
                </div>
              </div>
              <div className="text-lg">
                <div className="font-bold text-foreground text-xl">Join 10,000+ sellers</div>
                <div className="text-muted-foreground">already growing with Henexis</div>
              </div>
            </div>
          </div>

          <div className="relative lg:pl-10">
            {/* Premium Background Decorations */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-soft"></div>
            <div className="absolute -bottom-32 -left-32 w-48 h-48 bg-gradient-to-tr from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
            
            <div className="chart-container relative">
              {/* Main Premium Dashboard */}
              <div className="gradient-card rounded-3xl p-10 shadow-premium border border-white/20 backdrop-filter backdrop-blur-2xl relative overflow-hidden">
                {/* Premium Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center shadow-elegant glow-soft">
                      <span className="text-white font-bold text-xl">H</span>
                    </div>
                    <div>
                      <span className="text-2xl font-bold">AutoPrice Pro</span>
                      <div className="text-sm text-muted-foreground">Premium Analytics</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">2.4K</div>
                    <div className="text-sm text-muted-foreground">Products</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-green-500/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">$47.2K</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/10 to-orange-500/5 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">18%</div>
                    <div className="text-sm text-muted-foreground">Growth</div>
                  </div>
                </div>

                <svg ref={chartRef} viewBox="0 0 400 150" className="w-full h-36 mb-6">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.0"/>
                    </linearGradient>
                  </defs>
                  
                  <path
                    className="chart-path"
                    d="M 20 120 Q 80 100, 150 80 T 320 40 T 380 30"
                    stroke="hsl(217, 91%, 60%)"
                    strokeWidth="3"
                    fill="none"
                  />
                  
                  <path
                    className="chart-path"
                    d="M 20 120 Q 80 100, 150 80 T 320 40 T 380 30 L 380 130 L 20 130 Z"
                    fill="url(#chartGradient)"
                  />

                  <circle cx="80" cy="100" r="3" fill="hsl(217, 91%, 60%)" className="animate-pulse-soft" />
                  <circle cx="150" cy="80" r="3" fill="hsl(217, 91%, 60%)" className="animate-pulse-soft" />
                  <circle cx="250" cy="50" r="3" fill="hsl(217, 91%, 60%)" className="animate-pulse-soft" />
                  <circle cx="320" cy="40" r="3" fill="hsl(217, 91%, 60%)" className="animate-pulse-soft" />
                </svg>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Active Listings</span>
                    <span className="font-semibold text-green-600">+12% this week</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-muted/30 rounded-xl p-3">
                      <div className="font-semibold">Dynamic Pricing</div>
                      <div className="text-muted-foreground">1,847 products</div>
                      <div className="text-green-600 text-xs mt-1">+5.2% optimization</div>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-3">
                      <div className="font-semibold">Inventory Sync</div>
                      <div className="text-muted-foreground">Real-time updates</div>
                      <div className="text-primary text-xs mt-1">99.9% uptime</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-green-500 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg floating-icon">
                +24% Sales
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white border border-border/50 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg floating-icon">
                Auto-Optimized
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;