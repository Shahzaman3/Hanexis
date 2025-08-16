import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingBag, Heart } from "lucide-react";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade in animation
      gsap.fromTo(
        footerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating icons animation
      gsap.fromTo(
        ".footer-float",
        { y: 0 },
        {
          y: -15,
          duration: 2.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          stagger: 0.3,
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Final CTA Section */}
      <section className="py-20 sm:py-28 lg:py-32 gradient-hero relative overflow-hidden">
        {/* Floating Icons */}
        <div className="absolute top-10 left-10 footer-float">
          <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white/20 animate-float" />
        </div>
        <div className="absolute bottom-10 right-10 footer-float">
          <div className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-white/20 rounded-full animate-pulse-soft" />
        </div>
        <div className="absolute top-1/2 left-1/4 footer-float">
          <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-white/30 rounded-full" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1
            className="
        hero-title 
        font-bold 
        leading-tight 
        tracking-tight
        text-2xl sm:text-3xl md:text-[44px] lg:text-[64px] xl:text-[74px]
      "
          >
            {/* Left floating image */}
            <div className="hidden md:block absolute top-[-65px] left-[-40px] rotate-[110deg] z-30">
              <img
                src="/assets/img2.png"
                className="w-16 sm:w-20 md:w-28 lg:w-32 h-auto"
                alt="Floating Left"
              />
            </div>

            <span className="text-foreground">Start </span>
            <span className="gradient-primary bg-clip-text text-transparent glow-text">
              selling smarter{" "}
            </span>
            <span className="text-foreground">on Shopify Today</span>

            {/* Right floating image */}
            <span className="text-foreground flex items-center space-x-4">
              <div className="hidden md:block absolute bottom-[-60px] right-[-40px] rotate-[320deg] z-30">
                <img
                  src="/assets/img2.png"
                  className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto"
                  alt="Floating Right"
                />
              </div>
            </span>
          </h1>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-white via-blue-300 to-white border-t border-blue-300">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <img src="/assets/logo.svg" alt="" />
              <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-xs">
                The AI-powered business brain that transforms your Tally data
                into actionable insights. Smart, simple, and designed for Indian
                businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-700 text-sm uppercase ">
                <li>
                  <a href="#" className="hover:underline">
                    home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    faq
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold mb-4">Contact US</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-black" />
                  +91 98420 57742
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-black" />
                  support@hanexis.com
                </li>
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="text-black mt-1" />
                  11/32 A3, Cenotaph Road,
                  <br />
                  Teynampet, Chennai – 600018
                  <br />
                  Chennai – 600018
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="mt-6 pt-4 border-t border-gray-300 text-center text-sm text-gray-600">
            © 2025 Hanexis. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
