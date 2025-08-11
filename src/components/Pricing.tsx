import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.pricing-title',
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

      // Toggle animation
      gsap.fromTo('.pricing-toggle',
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Pricing cards animation
      gsap.fromTo('.pricing-card',
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    
    // GSAP animation for price changes
    gsap.to('.price-amount', {
      scale: 0.8,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        gsap.to('.price-amount', {
          scale: 1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
      }
    });
  };

  const plans = [
    {
      name: 'Starter Plan',
      price: isYearly ? '0' : '0',
      period: isYearly ? 'year' : 'month',
      popular: false,
      badge: 'Includes:',
      features: [
        'Install & use Hanexis plugin',
        '1 Client Type (e.g. Retailer)', 
        'Upto 50 Products',
        'Quick Quotation Generator',
        'Basic Stock Management',
        'Email Support'
      ]
    },
    {
      name: 'Business Plan',
      price: isYearly ? '897' : '999',
      period: isYearly ? 'year' : 'month',
      popular: true,
      badge: 'Includes',
      features: [
        '5 Client Types',
        '500 Products',
        'Region-based Stock',
        'Smart Pricing Rules',
        'GST/VAT Quotes',
        'Order Tracking',
        'Priority Support',
      ]
    },
    {
      name: 'Enterprise Plan',
      price: isYearly ? '2,397' : '4999',
      period: isYearly ? 'year' : 'month',
      popular: false,
      badge: 'Includes',
      features: [
        'Unlimited Clients & Poducts',
        'Role-based Access & Dashboards',
        'Bulk Uploads(CSV, Excel)',
        'Custom Integrations & API Access',
        'Dedicated Account Manager',
        'Phone & Email Support',
      ]
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-32 gradient-mesh-1 relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-l from-primary/15 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 glass-morphism rounded-full px-6 py-3 mb-8 shadow-elegant">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-primary">Simple Pricing</span>
          </div>
          <h2 className="pricing-title text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Choose the Perfect Plan for{' '}
            <span className="gradient-primary bg-clip-text text-transparent glow-text">Your Business</span>
          </h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Start your journey with our free trial and scale as you grow. All plans include our core automation features with <span className="font-semibold text-foreground">no hidden fees.</span>
          </p>

          {/* Premium Toggle */}
          <div ref={toggleRef} className="pricing-toggle inline-flex items-center space-x-2 glass-morphism p-3 rounded-2xl shadow-elegant border border-white/20">
            <button
              onClick={handleToggle}
              className={`px-8 py-4 rounded-xl transition-elastic font-bold text-lg ${
                !isYearly 
                  ? 'gradient-primary text-white shadow-elegant glow-soft' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={handleToggle}
              className={`px-8 py-4 rounded-xl transition-elastic font-bold text-lg relative ${
                isYearly 
                  ? 'gradient-primary text-white shadow-elegant glow-soft' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Yearly
              {isYearly && <span className="ml-3 text-sm bg-green-500 text-white px-3 py-1 rounded-full animate-pulse-soft">Save 20%</span>}
            </button>
          </div>
        </div>

        <div className="pricing-grid grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative gradient-card rounded-3xl p-10 shadow-premium hover:shadow-card-hover transition-elastic border border-white/20 backdrop-blur-2xl overflow-hidden ${
                plan.popular ? 'ring-4 ring-primary/50 glow-strong scale-110' : ''
              }`}
            >
              {plan.popular && (
                <>
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="gradient-primary text-white px-8 py-3 rounded-full text-lg font-bold flex items-center shadow-premium glow-soft">
                      <Star className="w-5 h-5 mr-2 fill-current animate-pulse-soft" />
                      {plan.badge}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/5 rounded-3xl"></div>
                </>
              )}

              <div className="text-center mb-10 relative">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-lg text-muted-foreground">{plan.badge}</p>
                </div>
                <div className="mb-8">
                  <span className="text-6xl font-bold price-amount gradient-primary bg-clip-text text-transparent glow-text">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground ml-3 text-2xl">/ {plan.period}</span>
                </div>
                {isYearly && (
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-elegant">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Save 20%</span>
                  </div>
                )}
              </div>

              <ul className="space-y-6 mb-12 relative">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-lg">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center mr-4 shadow-elegant glow-soft">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 text-xl font-bold transition-elastic rounded-2xl shadow-elegant ${
                  plan.popular 
                    ? 'gradient-primary hover:shadow-card-hover text-white glow-soft' 
                    : 'glass-morphism border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                  {index === 0 && 'Start Free Trial'}
                  {index === 1 && 'Get Professional'}
                  {index === 2 && 'Contact Sales'}
                </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <p className="text-muted-foreground mb-6 text-lg">
              All plans include a <span className="text-primary font-semibold">14-day free trial</span>. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-3 rounded-xl font-semibold">
                Schedule Demo
              </Button>
              <Button className="gradient-primary hover:shadow-card-hover px-8 py-3 rounded-xl font-semibold">
                Start Free Trial
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;