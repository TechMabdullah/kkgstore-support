"use client";

import { Check, RotateCw } from "lucide-react";
import React, { useState } from "react";

interface Plan {
  badge: string;
  name: string;
  price: string;
  accentText: string;
  checkColor: string;
  glimmerBg: string;
  glimmerBorder: string;
  features: string[];
  buttonText: string;
  disabled?: boolean;
}

const greenTickCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%234ade80' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>") 11 11, pointer`;

const redCrossCursor = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='%23f87171' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'/><line x1='6' y1='6' x2='18' y2='18'/></svg>") 11 11, not-allowed`;

const plans: Plan[] = [
  {
    badge: "POPULAR",
    name: "Starter",
    price: "$0",
    accentText: "text-sky-300",
    checkColor: "text-sky-300/70",
    glimmerBg: "from-sky-300/[0.07] via-sky-200/[0.02] to-transparent",
    glimmerBorder: "border-sky-300/15",
    features: [
      "100 Conversations/mo",
      "1 Knowledge Source",
      "Community Support",
      "Basic Analytics",
    ],
    buttonText: "Start Free",
  },
  {
    badge: "BEST",
    name: "Pro",
    price: "$49",
    accentText: "text-indigo-300",
    checkColor: "text-indigo-300/70",
    glimmerBg: "from-indigo-300/[0.07] via-indigo-200/[0.02] to-transparent",
    glimmerBorder: "border-indigo-300/15",
    features: [
      "1000 Conversations",
      "5 Knowledge Sources",
      "Community Support",
      "Fast Response",
      "Priority Support",
    ],
    buttonText: "Get Started",
  },
  {
    badge: "WORTH IT",
    name: "Team",
    price: "$131",
    accentText: "text-emerald-300",
    checkColor: "text-emerald-300/70",
    glimmerBg: "from-emerald-300/[0.07] via-emerald-200/[0.02] to-transparent",
    glimmerBorder: "border-emerald-300/15",
    features: [
      "Unlimited Conversations",
      "Unlimited Knowledge Sources",
      "Community Support",
      "Custom Branding",
      "Dedicated Account Manager",
      "API Access & Webhooks",
      "Advanced Analytics",
    ],
    buttonText: "Coming Soon",
    disabled: true,
  },
];

const Pricing = () => {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (index: number) => {
    setFlipped((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="pricing" className="py-32 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
        Fair, usage-based pricing.
      </h2>
      <p className="text-zinc-500 font-light mb-16">
        Click any plan to flip and reveal pricing.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => {
          const isFlipped = !!flipped[index];

          return (
            <div
              key={index}
              onClick={() => toggleFlip(index)}
              className="group relative perspective-distant min-h-107.5"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-3d ${
                  isFlipped ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT FACE (Features Only - No Price) */}
                <div className="relative w-full h-full p-8 pt-10 rounded-3xl border border-white/5 bg-zinc-900/20 flex flex-col items-start text-left overflow-hidden transition-colors duration-500 hover:bg-zinc-900/40 backface-hidden">
                  {/* Top-Right Corner Tag */}
                  <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-white/10 text-[10px] font-semibold uppercase tracking-wider text-zinc-200">
                    {plan.badge}
                  </div>

                  {/* Whisper-Light Glimmer Layer */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-linear-to-br ${plan.glimmerBg} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <div className="w-full flex items-center justify-between mb-6">
                    <span className={`text-sm font-medium ${plan.accentText}`}>
                      {plan.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors cursor-pointer">
                      View Price <RotateCw className="w-3 h-3" />
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 text-sm text-zinc-300 font-light w-full">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check
                          className={`w-4 h-4 shrink-0 ${plan.checkColor}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="w-full py-3 rounded-xl border border-white/10 text-center text-zinc-300 group-hover:text-white group-hover:bg-white/5 transition-colors text-sm font-medium mt-auto cursor-pointer"
                  >
                    Flip for Price
                  </button>
                </div>

                {/* BACK FACE (Price Reveal + Soft Glimmer + Action Button) */}
                <div
                  className={`absolute inset-0 w-full h-full p-8 pt-10 rounded-3xl border ${plan.glimmerBorder} bg-zinc-900/40 backdrop-blur-md flex flex-col items-start text-left overflow-hidden backface-hidden rotate-y-180`}
                >
                  {/* Top-Right Corner Tag */}
                  <div className="absolute top-0 right-0 z-10 px-4 py-1.5 rounded-bl-2xl bg-white/10 text-[10px] font-semibold uppercase tracking-wider text-zinc-200">
                    {plan.badge}
                  </div>

                  {/* Whisper-Light Glimmer Glow on Flip */}
                  <div
                    className={`pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-linear-to-br ${plan.glimmerBg} blur-3xl transition-opacity duration-1000 ${
                      isFlipped ? "opacity-100" : "opacity-0"
                    }`}
                  />

                  <div className="w-full flex items-center justify-between mb-4 relative z-10">
                    <span className={`text-sm font-medium ${plan.accentText}`}>
                      {plan.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer">
                      Features <RotateCw className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="my-auto relative z-10">
                    <div className="text-5xl font-medium text-white tracking-tight mb-2">
                      {plan.price}
                      <span
                        className={`text-sm ${plan.accentText} font-light ml-1`}
                      >
                        /mo
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 font-light">
                      {plan.disabled
                        ? "Launching soon for high-volume teams."
                        : "Billed monthly. Cancel or switch anytime."}
                    </p>
                  </div>

                  {plan.disabled ? (
                    <button
                      disabled
                      onClick={(e) => e.stopPropagation()}
                      style={{ cursor: redCrossCursor }}
                      className="relative z-10 w-full py-3 rounded-xl border border-white/5 bg-zinc-800/40 text-zinc-500 text-sm font-medium mt-auto"
                    >
                      {plan.buttonText}
                    </button>
                  ) : (
                    <button
                      onClick={(e) => e.stopPropagation()}
                      style={{ cursor: greenTickCursor }}
                      className="relative z-10 w-full py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-medium mt-auto"
                    >
                      {plan.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
