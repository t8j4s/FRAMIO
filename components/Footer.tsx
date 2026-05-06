import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 h-auto min-h-[64px] pt-12 max-w-6xl mx-auto w-full flex flex-col items-center border-t border-zinc-200 px-4 sm:px-6 text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest pb-0">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 mb-16">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <Link href="/about" className="hover:text-zinc-600 cursor-pointer transition-colors">About</Link>
          <Link href="/product" className="hover:text-zinc-600 cursor-pointer transition-colors">Product</Link>
          <Link href="/company" className="hover:text-zinc-600 cursor-pointer transition-colors">Company</Link>
          <Link href="/legal" className="hover:text-zinc-600 cursor-pointer transition-colors">Legal</Link>
        </div>
        <div className="text-center md:text-right">© {new Date().getFullYear()} FRAMIO CREATIVE SYSTEMS. ALL RIGHTS RESERVED.</div>
      </div>
      
      <div className="w-full text-center pointer-events-none select-none mt-auto">
        <h2 className="text-[15vw] leading-[0.8] font-black text-zinc-200 tracking-tighter uppercase translate-y-[0.1em]">
          Framio
        </h2>
      </div>
    </footer>
  );
}
