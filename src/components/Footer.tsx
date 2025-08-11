import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingBag, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade in animation
      gsap.fromTo(footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating icons animation
      gsap.fromTo('.footer-float',
        { y: 0 },
        {
          y: -15,
          duration: 2.5,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true,
          stagger: 0.3
        }
      );

    }, footerRef);

    return () => ctx.revert();
  }, []);

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  const contactInfo = [
    'support@hanexis.com',
    '24/7 support via chat',
    '+1 (555) 123-4567'
  ];

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-32 gradient-primary relative overflow-hidden">
        <div className="absolute top-10 left-10 footer-float">
          <ShoppingBag className="w-16 h-16 text-white/20 animate-float" />
        </div>
        <div className="absolute bottom-10 right-10 footer-float">
          <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse-soft" />
        </div>
        <div className="absolute top-1/2 left-1/4 footer-float">
          <div className="w-4 h-4 bg-white/30 rounded-full" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl lg:text-8xl font-bold text-white mb-10 leading-tight tracking-tight">
            Ready to{' '}
            <span className="bg-white text-primary px-8 py-4 rounded-3xl inline-block transform -rotate-2 shadow-2xl glow-strong">
              transform
            </span>{' '}
            your<br />
            e-commerce empire?
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Join over 10,000 successful merchants who trust Henexis to automate their pricing, optimize their operations, and <span className="font-bold">scale their businesses to unprecedented heights.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-card-hover transition-smooth transform hover:-translate-y-1 shadow-2xl">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary transition-smooth">
              Schedule Demo
            </button>
          </div>
          
          <div className="flex items-center justify-center space-x-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <span className="text-2xl font-bold">Hanexis</span>
              </div>
              <p className="text-background/70 max-w-md leading-relaxed">
                We build solutions to make your Shopify work,
                so entrepreneurs can focus on what they do best.
                Perfect for businesses that need to scale their operations efficiently.
              </p>
              <div className="flex items-center mt-4 text-background/60 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-500" />
                <span>2025 Hanexis. All rights reserved.</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-background/70 hover:text-background transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="text-background/70">
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2025 Hanexis. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-background/60 hover:text-background transition-smooth text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-smooth text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;