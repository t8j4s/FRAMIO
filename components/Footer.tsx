import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 h-auto min-h-[64px] py-12 max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between border-t border-zinc-200 px-4 sm:px-6 text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-widest gap-6 md:gap-0 pb-16">
      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        <Link href="/about" className="hover:text-zinc-600 cursor-pointer transition-colors">About</Link>
        <Link href="/product" className="hover:text-zinc-600 cursor-pointer transition-colors">Product</Link>
        <Link href="/company" className="hover:text-zinc-600 cursor-pointer transition-colors">Company</Link>
        <Link href="/legal" className="hover:text-zinc-600 cursor-pointer transition-colors">Legal</Link>
      </div>
      <div className="text-center md:text-right">© {new Date().getFullYear()} FRAMIO CREATIVE SYSTEMS. ALL RIGHTS RESERVED.</div>
    </footer>
  );
}
