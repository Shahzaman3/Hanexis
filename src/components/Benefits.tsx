import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation - letters rotate + fade in
      gsap.fromTo(
        ".benefits-heading span",
        { y: 100, opacity: 0, rotateX: -90 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          ease: "back.out(1.7)",
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".benefits-heading",
            start: "top 70%", // 👈 ab reverse hoga
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph animation (wipe up reveal)
      gsap.fromTo(
        ".benefits-para",
        { y: 60, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: ".benefits-para",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Features animation - pop-in stagger
      gsap.fromTo(
        ".benefit-box",
        { y: 80, opacity: 0, scale: 0.7 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "elastic.out(1, 0.7)",
          stagger: 0.25,
          scrollTrigger: {
            trigger: ".benefit-box",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto p-6 sm:p-10">
      {/* Heading & Paragraph */}
      <div className="text-center mb-12 px-4 sm:px-6 md:px-12">
        <h2 className="benefits-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          {"Why Businesses Love".split(" ").map((word, i) => (
            <span key={i} className="inline-block mr-2">
              {word}
            </span>
          ))}{" "}
          <span className="gradient-primary bg-clip-text text-transparent glow-text">
            Autoprice Pro
          </span>
        </h2>

        <p className="benefits-para text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed flex items-center justify-center gap-2">
          From Manual Work to Automated Growth
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 mt-2 w-3 text-blue-600"
            fill="none"
            viewBox="0 0 24 48"
            stroke="currentColor"
            strokeWidth={5}
          >
            <line x1="12" y1="0" x2="12" y2="30" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 24l6 6 6-6"
            />
          </svg>
        </p>
      </div>

      {/* Features Boxes */}
      <div className="bg-gradient-to-b from-white to-blue-400 rounded-bl-[80px] rounded-br-[80px] p-8 sm:p-16 flex flex-col md:flex-row justify-between text-center shadow-lg gap-16">
        {[
          {
            num: "1",
            title: "Smart Dynamic Pricing",
            desc: "Set automated prices based on materials, diamonds, competitors, or regions—always stay ahead.",
          },
          {
            num: "2",
            title: "Quick & Accurate Quotations",
            desc: "Generate GST/VAT-compliant quotes instantly with zero manual effort.",
          },
          {
            num: "3",
            title: "Intelligent Stock Control",
            desc: "Seamless tracking and region-wise allocation to prevent overstocking or shortages.",
          },
          {
            num: "4",
            title: "Hassle-Free Ordering",
            desc: "One-click reorders, bulk uploads, and faster checkouts for ultimate convenience.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="benefit-box flex flex-col items-center max-w-xs mx-auto"
          >
            <div
              className=" w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-lg mb-6 
  transition-all duration-300 hover:scale-125 hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
            >
              {item.num}
            </div>

            <h4 className="font-bold text-lg mb-3 uppercase">{item.title}</h4>
            <p className="text-sm max-w-xs leading-7">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
