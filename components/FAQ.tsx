'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What kind of creators do you work with?",
      a: "We primarily work with YouTubers, personal brands, and content-driven businesses looking to scale consistently."
    },
    {
      q: "How fast is the turnaround time?",
      a: "Most projects are delivered within 24–48 hours depending on complexity and volume."
    },
    {
      q: "Do you help with content strategy?",
      a: "Yes — we don’t just edit, we help optimize your content for growth, retention, and consistency."
    },
    {
      q: "Can I cancel anytime?",
      a: "Absolutely. All plans are flexible with no long-term lock-ins."
    },
    {
      q: "Do you offer revisions?",
      a: "Yes, we include revisions to ensure the final output matches your vision."
    },
    {
      q: "How do I get started?",
      a: "Simply click “Get Started” or book a call and we’ll guide you through everything."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-white p-8 md:p-14 rounded-[32px] border border-zinc-100 flex flex-col gap-4 md:gap-6">
      <h4 className="text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-400 mb-4 md:mb-6">FAQ</h4>
      <div className="space-y-0">
        {faqs.map((faq, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col flex-1 ${idx !== faqs.length - 1 ? 'border-b border-zinc-100 pb-4 md:pb-6 mb-4 md:mb-6' : ''}`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full justify-between items-center text-left focus:outline-none"
            >
              <span className="text-sm md:text-base lg:text-lg font-bold text-zinc-900">{faq.q}</span>
              <span className="text-zinc-300 ml-4">
                {openIndex === idx ? (
                  <Minus className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Plus className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="text-xs md:text-sm text-zinc-500 leading-relaxed pt-3 md:pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
