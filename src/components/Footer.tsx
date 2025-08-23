import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero", type: "anchor" },
    { name: "Features", href: "#features", type: "anchor" },
    { name: "Pricing", href: "#pricing", type: "anchor" },
    { name: "FAQ", href: "#faq", type: "anchor" },
    { name: "Blog", href: "/blog", type: "route" },
  ];

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
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1
            className="
    hero-title 
    relative
    font-bold 
    leading-tight 
    tracking-tight
    text-2xl sm:text-3xl md:text-[44px] lg:text-[64px] xl:text-[74px]
  "
          >
            {/* Left floating image */}
            <div className="hidden md:block absolute top-[-65px] left-[-40px] rotate-[110deg] z-10">
              <img
                src="/assets/img2.png"
                className="w-16 sm:w-20 md:w-28 lg:w-32 h-auto"
                alt="Floating Left"
              />
            </div>

            <span className="text-foreground">Start </span>
            <span className="gradient-primary bg-clip-text text-transparent glow-text">
              subscribing smarter{" "}
            </span>
            <span className="text-foreground">on Shopify </span>
            <span className="text-foreground block mt-6">Today</span>

            {/* Right floating image */}
            <div className="hidden md:block absolute bottom-[-60px] right-[-40px] rotate-[320deg] z-10">
              <img
                src="/assets/img2.png"
                className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto"
                alt="Floating Right"
              />
            </div>
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
              <div className="flex py-2 flex-col">
                {navItems.map((item) =>
                  item.type === "route" ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="hover:text-yellow-500 transition-colors font-medium text-black"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      className="hover:text-yellow-500 transition-colors font-medium text-black"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )
                )}
              </div>
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
