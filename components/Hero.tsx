'use client';
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="bg-white p-8 sm:p-12 md:p-16 rounded-[32px] shadow-sm flex flex-col justify-center relative overflow-hidden isolate h-full min-h-[400px] md:min-h-[500px]">
      <div className="absolute -top-4 -right-4 w-48 h-48 bg-zinc-100 rounded-2xl rotate-12 blur-[2px] -z-10" />
      <div className="absolute top-1/2 -left-6 w-32 h-32 bg-zinc-50 rounded-xl -rotate-6 blur-[3px] -z-10" />
      
      <div className="relative">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[0.95] mb-6 text-zinc-900"
        >
          Scale Your Content <br/>Without Burning Out
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-500 text-sm md:text-base mb-8 max-w-md"
        >
          We are the growth partners for creators and brands. Get consistent, high-retention video editing without the stress.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4"
        >
          <Link 
            href="/#pricing" 
            className="bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm font-bold hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
          <Link 
            href="/#pricing" 
            className="border border-zinc-200 px-6 py-3 md:px-8 md:py-4 rounded-xl text-sm font-bold hover:bg-zinc-50 transition-colors"
          >
            View Plans
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
