import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        ".hero-buttons",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 }
      );

      gsap.fromTo(
        ".chart-container",
        { scale: 0.8, opacity: 0, rotateY: -15 },
        {
          scale: 1,
          opacity: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          delay: 1,
          z: 0,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center gradient-mesh-1 overflow-hidden pt-20 md:pt-20" // <-- yahan mt-15 ki jagah pt-16 add kiya
    >
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent" />

      <div className="container mx-auto px-2 relative z-10">
        <div className="flex flex-col items-center text-center gap-10">
          {/* Mobile version with image next to "On Shopify" */}
          <h1 className="hero-title block md:hidden text-[1.74rem] sm:text-[2.74rem] font-bold leading-tight tracking-tight">
            <span>
              The
              <span className="gradient-primary bg-clip-text text-transparent glow-text">
                {" "}
                Smarter Way
              </span>{" "}
              To Sell B2B
            </span>
            <br />
            <span className="flex items-center justify-center gap-2">
              <span>On Shopify</span>
              <div className="w-10  relative">
                <img
                  src="/assets/img3.png"
                  alt="Shopify Icon"
                  className="w-full h-full object-contain"
                />
              </div>
            </span>
          </h1>

          <h1 className="hero-title h-auto hidden md:block text-center md:text-[44px] lg:text-[64px] xl:text-[74px] font-bold leading-tight tracking-tight">
            <span className="gradient-primary bg-clip-text text-transparent glow-text">
              AutoPrice Pro{" "}
            </span>
            <span className="text-foreground">Smarter Way to</span>
            <br />
            <span className="text-foreground flex items-center ml-16 space-x-4">
              <span>Manage Prices on Shopify</span>
              <img
                src="/assets/img2.png"
                alt="Shopify Icon"
                className="w-20 lg:w-28 animate-float object-contain"
              />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle text-[0.8rem] lg:text-[1.5rem] mx-1 -mt-6 md:-mt-10 sm:text-[1rem] text-muted-foreground max-w-2xl leading-relaxed font-light">
            <span className=" text-foreground">
              Custom Pricing, instant quotations, regional stock control -<br />{" "}
              all inside your Shopify Store
            </span>
          </p>

          {/* Button */}
          <Button className="hero-buttons bg-[#FDDE51]  text-black hover:shadow-card-hover transition-elastic group px-10 -mt-4 text-lg font-bold rounded-2xl glow-soft">
            Request For Demo
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>

          <div className="w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl relative sm:mb-16">
            {/* Left img2 → hide on mobile */}
            <div className="hidden md:block absolute top-[-65px] left-[-40px] rotate-[110deg] z-30">
              <img
                src="/assets/img2.png"
                className="w-20 sm:w-20 lg:w-32 md:w-28 h-auto"
                alt="Floating Left"
              />
            </div>

            {/* Right img2 → hide on mobile */}
            <div className="hidden md:block absolute bottom-[-60px] right-[-40px] rotate-[320deg] z-30">
              <img
                src="/assets/img2.png"
                className="w-20 sm:w-20 lg:w-32 md:w-24 h-auto"
                alt="Floating Right"
              />
            </div>

            {/* Main img1 */}
            <img
              src="/assets/img1.png"
              alt="Dashboard preview"
              className="w-full chart-container h-auto px-3 rounded-xl shadow-lg z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
