import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "STARTER",
      price: "$497",
      description: "Creators just getting consistent\n5K–20K followers",
      features: [
        "8 short-form video edits",
        "Captions + hashtags",
        "1 revision per video",
        "5-day turnaround"
      ],
      highlighted: false,
      cta: "Get Started",
      href: "https://www.paypal.com/ncp/payment/WQBQDABM3N8DW"
    },
    {
      name: "GROWTH",
      price: "$997",
      description: "Coaches & influencers scaling\n20K–100K followers",
      features: [
        "16 short-form video edits",
        "4 long-form YouTube edits",
        "Thumbnails included",
        "Captions + hashtags",
        "2 revisions per asset",
        "3-day turnaround"
      ],
      highlighted: true,
      popular: "★ MOST POPULAR",
      cta: "Get Started",
      href: "https://www.paypal.com/ncp/payment/LGAEXRSGG3KBG"
    },
    {
      name: "AUTHORITY",
      price: "$1,997",
      description: "Established personal brands\nFull delegation",
      features: [
        "20 short-form video edits",
        "8 long-form YouTube edits",
        "Thumbnails + covers",
        "Captions + hashtags",
        "Dedicated editor + Slack access",
        "48hr turnaround"
      ],
      highlighted: false,
      cta: "Get Started",
      href: "https://www.paypal.com/ncp/payment/S2D83XGLDF8FU"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
      {plans.map((plan, idx) => (
        <div 
          key={idx} 
          className={`relative flex flex-col p-8 sm:p-10 rounded-[32px] max-w-lg mx-auto lg:max-w-none w-full ${
            plan.highlighted 
              ? "bg-black text-white shadow-2xl shadow-black/10 z-10" 
              : "bg-white text-zinc-900 border border-zinc-200"
          }`}
        >
          {plan.popular && (
            <div className="text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-400 mb-2 md:mb-4">
              {plan.popular}
            </div>
          )}
          
          <div className="text-sm sm:text-base md:text-lg font-bold mb-1 md:mb-2">{plan.name}</div>
          <div className="text-xs text-zinc-500 whitespace-pre-line mb-3 md:mb-4">{plan.description}</div>
          <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight">
            {plan.price}
          </div>
          
          <ul className="mb-8 flex-1 space-y-3 md:space-y-4">
            {plan.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex gap-x-3 text-xs sm:text-sm md:text-base text-left items-center">
                <Check className={`h-4 w-4 md:h-5 md:w-5 flex-none ${plan.highlighted ? "text-zinc-400" : "text-zinc-400"}`} />
                <span className={plan.highlighted ? "text-zinc-200" : "text-zinc-600"}>{feature}</span>
              </li>
            ))}
          </ul>
          
          <a 
            href={plan.href || "https://calendar.app.google/urU7z5iQpERDAFTj8"}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-4 block text-center text-sm md:text-base font-bold rounded-xl transition-transform hover:scale-105 ${
              plan.highlighted
                ? "bg-white text-black"
                : "border border-zinc-200 bg-white text-black hover:bg-zinc-50"
            }`}
          >
            {plan.cta || "Get Started"}
          </a>
        </div>
      ))}
    </div>
  );
}
