import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your images
import img5 from '/assets/img5.png';
import img6 from '/assets/img6.png';
import img7 from '/assets/img7.png';
import img8 from '/assets/img8.png';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.features-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Feature cards animation
      gsap.fromTo(
        '.feature-card',
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
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      img: img5,
      title: 'Seller Dashboard',
      description: 'Client management, stock control, quotation generation.',
    },
    {
      img: img6,
      title: 'Buyer Dashboard',
      description: 'Personalized prices, easy ordering, invoice tracking',
    },
    {
      img: img7,
      title: 'Analytics',
      description: 'Top-selling customers, client spend, sales trends.',
    },
    {
      img: img8,
      title: 'Extras',
      description: 'Credit Options, shipping rules, role-based dashboards.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-10 gradient-hero relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="features-title text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            <span className="gradient-primary bg-clip-text text-transparent glow-text">
              Features
            </span>{' '}
            You'll Use Everyday
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Everything you need to automate, optimize, and scale your e-commerce
            business with{' '}
            <span className="font-semibold text-foreground">
              absolute confidence and precision.
            </span>
          </p>
        </div>

        <div className="features-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card rounded-3xl p-10 text-center shadow-premium hover:shadow-card-hover transition-all duration-300 group cursor-pointer border-2 border-blue-400 relative overflow-hidden backdrop-blur-2xl bg-gradient-to-b from-white to-blue-400"
            >
              {/* Image */}
              <div className="relative mb-8">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-28 h-28 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Heading */}
              <h3 className="text-2xl font-bold mb-6 text-foreground group-hover:text-blue-600 transition-smooth">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

