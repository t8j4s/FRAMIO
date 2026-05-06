import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Product() {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-12 md:pb-24 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-28 sm:mt-36 flex-1 w-full">
        <div className="bg-black text-white p-6 sm:p-12 md:p-24 rounded-[24px] sm:rounded-[32px] shadow-xl flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-8">Our Product System</h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-8 sm:mb-12">
            The FRAMIO system is designed to be frictionless. Submit raw files, receive polished, high-retention content ready to be published.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl text-left">
            <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Dashboard</h3>
              <p className="text-sm sm:text-base text-zinc-400">Track your video progress, communicate directly with editors, and approve thumbnails all in one organized workspace.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Asset Management</h3>
              <p className="text-sm sm:text-base text-zinc-400">We store and organize your B-roll, music preferences, and brand assets to ensure absolute consistency across every edit.</p>
            </div>
          </div>
          
          <Link href="/#pricing" className="mt-8 sm:mt-12 flex items-center gap-2 bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:scale-105 transition-transform">
            View Plans <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
