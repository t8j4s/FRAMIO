import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-6 inset-x-0 z-50 px-4 sm:px-6 flex justify-center pointer-events-none">
      <nav className="w-full max-w-6xl h-14 md:h-16 flex items-center justify-between px-5 md:px-8 bg-white/60 backdrop-blur-md border border-white/20 rounded-[32px] shadow-sm pointer-events-auto">
        <div className="flex items-center gap-2">
          <Link href="/#hero" className="font-bold tracking-tighter text-xl md:text-3xl text-black">
            FRAMIO
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[11px] md:text-[13px] font-medium text-zinc-500 uppercase tracking-widest">
          <Link href="/#hero" className="text-black hover:text-black transition-colors">Home</Link>
          <Link href="/#pricing" className="hover:text-black transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-black transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link 
            href="/#pricing" 
            className="bg-black text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wider hover:scale-105 transition-transform"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
