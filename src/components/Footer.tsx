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
      <section className="py-32 gradient-hero relative overflow-hidden">
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
          
          <h1 className="hero-title h-auto hidden md:block text-center md:text-[44px] lg:text-[64px] xl:text-[74px] font-bold leading-tight tracking-tight">
            <div className="hidden md:block absolute top-[-65px] left-[-40px] rotate-[110deg] z-30">
              <img
                src="/assets/img2.png"
                className="w-20 sm:w-20 lg:w-32 md:w-28 h-auto"
                alt="Floating Left"
              />
            </div>
              <span className="text-foreground">Start </span>
            <span className="gradient-primary bg-clip-text text-transparent glow-text">
              selling smarter{" "}
            </span>
            <span className="text-foreground">on Shopify Today</span>

            <span className="text-foreground flex items-center space-x-4">
              <div className="hidden md:block absolute bottom-[-60px] right-[-40px] rotate-[320deg] z-30">
              <img
                src="/assets/img2.png"
                className="w-20 sm:w-20 lg:w-32 md:w-24 h-auto"
                alt="Floating Right"
              />
            </div>
            </span>
          </h1>
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