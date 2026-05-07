import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <div id="get-started" className="relative bg-black p-12 md:p-24 lg:p-32 rounded-[32px] overflow-hidden flex flex-col justify-center items-center text-center">
      {/* Dark gradient blur effect */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800/40 blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-2xl px-4">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 md:mb-10 leading-[1.1]">
          Ready to scale your content?
        </h2>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#pricing" 
            className="flex items-center justify-center rounded-xl bg-white px-8 md:px-10 py-4 w-full sm:w-auto text-sm md:text-base font-bold text-black transition-transform hover:scale-105"
          >
            Get Started
          </Link>
          <a
            href="https://calendar.app.google/urU7z5iQpERDAFTj8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl border border-zinc-700 w-full sm:w-auto bg-black px-8 md:px-10 py-4 text-sm md:text-base font-bold text-white transition-all hover:bg-zinc-900 hover:scale-105"
          >
            Book a Call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
