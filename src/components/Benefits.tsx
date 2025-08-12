import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  return (
    <section className="max-w-7xl mx-auto p-6 sm:p-10">
      {/* Heading & Paragraph */}
      <div className="text-center mb-12 px-4 sm:px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Why Businesses Love{" "}
          <span className="gradient-primary bg-clip-text text-transparent glow-text">
            Hanexis
          </span>
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed flex items-center justify-center gap-2">
          From Manual Work to Automated Growth
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 mt-2 w-3 text-blue-600"
            fill="none"
            viewBox="0 0 24 48"
            stroke="currentColor"
            strokeWidth={5} // stroke thoda mota
          >
            {/* Vertical line */}
            <line x1="12" y1="0" x2="12" y2="30" />
            {/* Arrowhead */}
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
        {/* 1 */}
        <div className="flex flex-col items-center max-w-xs mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-lg mb-6">
            1
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase">CUSTOM PRICING</h4>
          <p className="text-sm max-w-xs leading-7">
            Different prices for retailers,
            <br />
            wholesalers, or region.
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center max-w-xs mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-lg mb-6">
            2
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase">
            INSTANT QUOTATION
          </h4>
          <p className="text-sm max-w-xs leading-7">
            Auto GST or VAT-compliant
            <br /> quotes in seconds.
          </p>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center max-w-xs mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-lg mb-6">
            3
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase">STOCK MANAGEMENT</h4>
          <p className="text-sm max-w-xs leading-7">
            Region-wise stock allocation and tracking.
          </p>
        </div>

        {/* 4 */}
        <div className="flex flex-col items-center max-w-xs mx-auto">
          <div className="w-16 h-16 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-lg shadow-lg mb-6">
            4
          </div>
          <h4 className="font-bold text-lg mb-3 uppercase">
            EFFORTLESS ORDERING
          </h4>
          <p className="text-sm max-w-xs leading-7">
            One-click reorders & bulk uploads
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;