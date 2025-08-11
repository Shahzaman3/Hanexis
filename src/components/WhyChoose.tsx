import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle, Clock, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.why-title',
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

      // Diagram animation
      gsap.fromTo('.center-circle',
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.outer-circle',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Connecting lines animation
      gsap.fromTo('.connecting-line',
        { strokeDasharray: '0,100', opacity: 0 },
        {
          strokeDasharray: '100,0',
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.3,
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 50%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: CheckCircle, title: 'Saves time & reduces errors' },
    { icon: Clock, title: "Let's buyers self- serve 24/7" },
    { icon: Target, title: 'Scales with your business growth' }
  ];

  return (
    <section ref={sectionRef} className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="why-title text-4xl lg:text-5xl font-bold mb-4">
            Why Choose{' '}
            <span className="gradient-primary bg-clip-text text-transparent">Hanexis ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We built Hanexis to move B2B selling as smooth as B2C - but with the tools wholesalers need.
          </p>
        </div>

        <div ref={diagramRef} className="relative max-w-4xl mx-auto">
          {/* Center circle */}
          <div className="center-circle absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center glow-soft">
              <div className="text-center">
                <div className="w-8 h-8 bg-white rounded mx-auto mb-2"></div>
                <span className="text-white font-bold text-sm">Core</span>
              </div>
            </div>
          </div>

          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="hsl(217, 91%, 60%)" stopOpacity="0.3"/>
              </linearGradient>
            </defs>

            {/* Connecting lines */}
            <path
              className="connecting-line"
              d="M 150 200 L 300 200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
            <path
              className="connecting-line"
              d="M 450 200 L 300 200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
            <path
              className="connecting-line"
              d="M 300 120 L 300 200"
              stroke="url(#lineGradient)"
              strokeWidth="2"
            />
          </svg>

          {/* Feature circles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-80">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const positions = ['justify-start', 'justify-center', 'justify-end'];
              const alignments = ['items-start', 'items-start', 'items-start'];
              
              return (
                <div key={index} className={`flex ${positions[index]} ${alignments[index]} h-full`}>
                  <div className="outer-circle text-center">
                    <div className="w-24 h-24 gradient-card rounded-full flex items-center justify-center mb-4 shadow-card mx-auto">
                      <IconComponent className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;