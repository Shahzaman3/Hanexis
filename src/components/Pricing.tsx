import React, { useState } from "react";

const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  // Plans ka data
  const plans = {
    monthly: [
      {
        name: "Starter Plan",
        price: "₹ 499",
        setup: "/Mo + ₹1,999 setup",
        features: [
          "300 products",
          "5 pricing rules",
          "20 Excel uploads",
          "Gold & Silver rates",
          "Chat + Email support",
        ],
        btn: "Start Now",
      },
      {
        name: "Advanced Plan",
        price: "₹ 999",
        setup: "/Mo + ₹1,999 setup",
        features: [
          "1,000 products",
          "10 pricing rules",
          "40 Excel uploads",
          "Gold, Silver, Platinum rates",
          "Priority support",
        ],
        btn: "Get Advanced",
        popular: true,
      },
      {
        name: "Pro Plan",
        price: "₹ 4999",
        setup: "/Mo + ₹1,999 setup",
        features: [
          "5,000 products",
          "20 smart rules",
          "Bulk & conditional uploads",
          "API auto-sync rates",
          "WhatsApp support",
        ],
        btn: "Go Pro",
      },
    ],
    yearly: [
      {
        name: "Starter Plan",
        price: "₹ 4,999",
        setup: "/Yr + ₹9,999 setup",
        features: [
          "300 products",
          "5 pricing rules",
          "Unlimited Excel uploads",
          "Gold & Silver rates",
          "Chat + Email support",
        ],
        btn: "Start Now",
      },
      {
        name: "Advanced Plan",
        price: "₹ 9,999",
        setup: "/Yr + ₹9,999 setup",
        features: [
          "1,000 products",
          "20 pricing rules",
          "Unlimited Excel uploads",
          "Gold, Silver, Platinum rates",
          "Priority support",
        ],
        btn: "Get Advanced",
        popular: true,
      },
      {
        name: "Pro Plan",
        price: "₹ 49,999",
        setup: "/Yr + ₹9,999 setup",
        features: [
          "5,000 products",
          "Unlimited smart rules",
          "Bulk & conditional uploads",
          "API auto-sync rates",
          "WhatsApp support",
        ],
        btn: "Go Pro",
      },
    ],
  };

  return (
    <section className="w-full py-12 px-4 bg-white flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
        Flexible Plans for Every Business Size
      </h2>
      <p className="text-gray-600 text-center max-w-xl mb-6 text-sm md:text-base">
        Start free, scale as you grow — whether you’re a solo seller or a large
        B2B distributor.
      </p>

      {/* Toggle */}
<div className="relative flex items-center w-64 bg-gradient-to-b from-white to-blue-200 border-2 border-blue-400 rounded-full p-1 mb-10">
  {/* Sliding Background */}
  <div
    className={`absolute top-1 bottom-1 rounded-full bg-blue-600 transition-transform duration-300 ease-in-out 
      w-[48%] 
      ${billing === "yearly" ? "translate-x-full" : "translate-x-0"}`}
    style={{ marginLeft: "2px", marginRight: "2px" }}
  ></div>

  {/* Buttons */}
  <div className="relative flex w-full z-10">
    <button
      onClick={() => setBilling("monthly")}
      className={`w-1/2 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
        billing === "monthly" ? "text-white" : "text-gray-700"
      }`}
    >
      Monthly
    </button>
    <button
      onClick={() => setBilling("yearly")}
      className={`w-1/2 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
        billing === "yearly" ? "text-white" : "text-gray-700"
      }`}
    >
      Yearly
    </button>
  </div>
</div>


      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full justify-items-center md:justify-items-stretch">
        {plans[billing].map((plan, idx) => (
          <div
            key={idx}
            className={`border rounded-2xl p-6 flex flex-col w-full max-w-[480px] sm:max-w-[550px] sm:text-lg md:max-w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl ${
              plan.popular
                ? "border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 text-white shadow-lg scale-105 hover:scale-110 hover:shadow-2xl"
                : "border-gray-200 bg-gradient-to-b from-blue-50 to-white"
            }`}
          >
            {plan.popular && (
              <span className="bg-white text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 self-center">
                Most Popular
              </span>
            )}
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              {plan.name}
            </h3>
            <p className="text-3xl md:text-4xl font-bold mb-1">{plan.price}</p>
            <p className="text-sm md:text-base mb-4">{plan.setup}</p>
            <ul
              className={`list-disc list-inside text-sm md:text-base mb-6 space-y-2 ${
                plan.popular ? "text-white" : "text-gray-600"
              }`}
            >
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button
              className={`px-6 py-2 rounded-full ${
                plan.popular
                  ? "bg-white text-blue-600 font-semibold hover:bg-gray-100"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {plan.btn}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;

