import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 bg-white flex flex-col items-center">
      <button
        className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full font-semibold 
    shadow-[8px_8px_16px_#d1b35f,-8px_-8px_16px_#fff5cc] 
    transition-all duration-300 hover:shadow-[inset_8px_8px_16px_#d1b35f,inset_-8px_-8px_16px_#fff5cc]"
      >
        Try For Free →
      </button>

      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Flexible Plans for Every Business Size
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-6 text-sm md:text-base">
        Start free, scale as you grow — whether you’re a solo seller or a large
        B2B distributor.
      </p>

      {/* Toggle */}
      <div className="flex items-center bg-gray-100 rounded-full p-1 mb-10">
        <button className="px-4 py-1 text-sm md:text-base font-semibold bg-white rounded-full shadow">
          Monthly
        </button>
        <button className="px-4 py-1 text-sm md:text-base text-gray-500">
          Yearly
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full justify-items-center md:justify-items-stretch">
        {/* Starter Plan */}
        <div
          className="border border-gray-200 rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col w-full max-w-[480px] sm:max-w-[550px] sm:text-lg md:max-w-full 
        transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h3 className="font-semibold text-lg md:text-xl mb-2 sm:text-lg">
            Starter Plan
          </h3>
          <p className="text-3xl md:text-4xl font-bold mb-1 sm:text-4xl">
            ₹ 499
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-4">
            /Mo + ₹1,999 setup
          </p>
          <ul className="list-disc list-inside text-sm sm:text-lg md:text-base text-gray-600 mb-6 space-y-2">
            <li>300 products</li>
            <li>5 pricing rules</li>
            <li>20 Excel uploads</li>
            <li>Gold & Silver rates</li>
            <li>Chat + Email support</li>
          </ul>
          <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
            Start Now
          </button>
        </div>

        {/* Advanced Plan */}
        <div
          className="border border-blue-400 rounded-2xl bg-gradient-to-b from-blue-400 to-blue-500 text-white p-6 flex flex-col shadow-lg scale-105 w-full max-w-[480px] sm:max-w-[550px] sm:text-lg md:max-w-full 
        transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-center">
            Most Popular
          </span>
          <h3 className="font-semibold text-lg md:text-xl mb-2">
            Advanced Plan
          </h3>
          <p className="text-3xl md:text-4xl font-bold mb-1">₹ 999</p>
          <p className="text-sm md:text-base mb-4">/Mo + ₹1,999 setup</p>
          <ul className="list-disc list-inside text-sm md:text-base mb-6 space-y-2">
            <li>1,000 products</li>
            <li>10 pricing rules</li>
            <li>40 Excel uploads</li>
            <li>Gold, Silver, Platinum rates</li>
            <li>Priority support</li>
          </ul>
          <button className="px-6 py-2 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100">
            Get Advanced
          </button>
        </div>

        {/* Pro Plan */}
        <div
          className="border border-gray-200 rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col w-full max-w-[480px] sm:max-w-[550px] sm:text-lg md:max-w-full 
        transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        >
          <h3 className="font-semibold text-lg md:text-xl mb-2">Pro Plan</h3>
          <p className="text-3xl md:text-4xl font-bold mb-1">₹ 4999</p>
          <p className="text-sm md:text-base text-gray-500 mb-4">
            /Mo + ₹1,999 setup
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-600 mb-6 space-y-2">
            <li>5,000 products</li>
            <li>20 smart rules</li>
            <li>Bulk & conditional uploads</li>
            <li>API auto-sync rates</li>
            <li>WhatsApp support</li>
          </ul>
          <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100">
            Go Pro
          </button>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-col md:flex-row gap-4 mt-10">
        <button
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full font-semibold 
    shadow-[8px_8px_16px_#d1b35f,-8px_-8px_16px_#fff5cc] 
    transition-all duration-300 hover:shadow-[inset_8px_8px_16px_#d1b35f,inset_-8px_-8px_16px_#fff5cc]"
        >
          Start Free →
        </button>

        <button
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 px-6 py-2 rounded-full font-semibold 
    shadow-[8px_8px_16px_#d1b35f,-8px_-8px_16px_#fff5cc] 
    transition-all duration-300 hover:shadow-[inset_8px_8px_16px_#d1b35f,inset_-8px_-8px_16px_#fff5cc]"
        >
          Request Pricing →
        </button>
      </div>
    </section>
  );
};

export default Pricing;
