import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

type Props = {};

const WhyChoose: React.FC<Props> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);

  const leftCardRef = useRef<HTMLDivElement | null>(null);
  const midCardRef = useRef<HTMLDivElement | null>(null);
  const rightCardRef = useRef<HTMLDivElement | null>(null);

  const pathRefs = useRef<Array<SVGPathElement | null>>([]);

  useEffect(() => {
    const updatePaths = () => {
      const cont = containerRef.current;
      const svg = svgRef.current;
      if (!cont || !svg || !centerRef.current) return;

      const rect = cont.getBoundingClientRect();
      // keep svg coordinates in px so path math is straightforward
      svg.setAttribute("viewBox", `0 0 ${rect.width} ${rect.height}`);

      const c = centerRef.current.getBoundingClientRect();
      const sx = c.left - rect.left + c.width / 2;
      const sy = c.top - rect.top + c.height / 2;

      const cards = [
        leftCardRef.current,
        midCardRef.current,
        rightCardRef.current,
      ];

      cards.forEach((cardEl, i) => {
        if (!cardEl) return;
        const cr = cardEl.getBoundingClientRect();
        const ex = cr.left - rect.left + cr.width / 2;
        // connect to slightly below the top edge of the card so chip doesn't overlap
        const ey = cr.top - rect.top + 12;

        // midY controls how far the connector drops from the center before moving horizontally
        const midY = sy + Math.max(80, (ey - sy) * 0.45);

        // square-ish path: vertical down from center to midY, horizontal to ex, then vertical to ey
        const d = `M ${sx} ${sy} L ${sx} ${midY} L ${ex} ${midY} L ${ex} ${ey}`;

        const p = pathRefs.current[i];
        if (p) p.setAttribute("d", d);
      });
    };

    // initial layout + resize observer
    updatePaths();
    const onResize = () => updatePaths();
    window.addEventListener("resize", onResize);
    const ro = new (window as any).ResizeObserver(() => updatePaths());
    if (containerRef.current) ro.observe(containerRef.current);

    // animation timeline
    const tl = gsap.timeline();

    // center pop
    tl.from(centerRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.55,
      ease: "back.out(1.7)",
    });

    // prepare stroke dash (must be set after paths are laid out)
    pathRefs.current.forEach((p) => {
      if (!p) return;
      const len = p.getTotalLength();
      gsap.set(p, {
        strokeDasharray: len,
        strokeDashoffset: len,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      });
    });

    // draw connectors one-by-one
    pathRefs.current.forEach((p, i) => {
      if (!p) return;
      tl.to(
        p,
        {
          strokeDashoffset: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        `-=${0.12 - i * 0.02}` // slight overlap
      );
    });

    // cards pop after connectors
    tl.from(
      [leftCardRef.current, midCardRef.current, rightCardRef.current],
      {
        y: 26,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=${0.06}"
    );

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <section className="w-full px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-white to-blue-50 text-center">
      <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 md:mb-4">
        Why Choose <span className="text-blue-600">Hanexis ?</span>
      </h2>
      <p className="text-gray-600 max-w-lg md:max-w-2xl mx-auto mb-8 md:mb-12 text-base md:text-lg">
        We built Hanexis to make B2B selling as smooth as B2C — but with the
        tools wholesalers need.
      </p>

      {/* Diagram container */}
      <div
        ref={containerRef}
        className="relative w-full mx-auto min-h-[600px] md:min-h-[420px] flex items-center justify-center"
      >
        {/* Center badge */}
        <div
        ref={centerRef}
        className="absolute left-1/2 -translate-x-1/2 top-6 z-20"
        >
        <div className="relative">
          <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden">
          <img
            src="/assets/bg.svg"
            alt=""
            className="h-full w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center text-base md:text-lg lg:text-2xl font-semibold text-white">
            Hanexis
          </span>
          </div>
        </div>
        </div>

        {/* SVG - paths get set dynamically from JS so path d's are empty initially */}
        <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
          ref={(el) => (pathRefs.current[0] = el)}
          stroke="#bfdbfe"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={(el) => (pathRefs.current[1] = el)}
          stroke="#bfdbfe"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={(el) => (pathRefs.current[2] = el)}
          stroke="#bfdbfe"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        </svg>

        {/* Feature cards - responsive row */}
        <div className="absolute bottom-4 md:bottom-8 left-0 w-full flex flex-col md:flex-row justify-center md:justify-between items-end gap-6 md:gap-0 px-2 md:px-8 lg:px-20">
        <div ref={leftCardRef} className="w-full md:w-72 p-4 md:p-6 relative flex flex-col items-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-blue-200 shadow-md overflow-hidden flex items-center justify-center">
            <img
            src="/assets/bg.svg"
            alt=""
            className="h-full w-full object-cover"
            />
            <img
            src="/assets/time.svg"
            alt=""
            className="absolute inset-0 m-auto w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          </div>
          <p className="mt-8 text-gray-700 font-medium text-sm md:text-base text-center">
          Saves time & reduces errors.
          </p>
        </div>

        <div ref={midCardRef} className="w-full md:w-72 p-4 md:p-6 relative flex flex-col items-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-blue-200 shadow-md overflow-hidden flex items-center justify-center">
            <img
            src="/assets/bg.svg"
            alt=""
            className="h-full w-full object-cover"
            />
            <img
            src="/assets/clock.svg"
            alt=""
            className="absolute inset-0 m-auto w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          </div>
          <p className="mt-8 text-gray-700 font-medium text-sm md:text-base text-center">
          Lets buyers self-serve <span className="font-bold">24/7</span>
          </p>
        </div>

        <div ref={rightCardRef} className="w-full md:w-72 p-4 md:p-6 relative flex flex-col items-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-blue-200 shadow-md overflow-hidden flex items-center justify-center">
            <img
            src="/assets/bg.svg"
            alt=""
            className="h-full w-full object-cover"
            />
            <img
            src="/assets/growth.svg"
            alt=""
            className="absolute inset-0 m-auto w-5 h-5 md:w-6 md:h-6"
            />
          </div>
          </div>
          <p className="mt-8 text-gray-700 font-medium text-sm md:text-base text-center">
          Scales with your business growth.
          </p>
        </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyChoose;
