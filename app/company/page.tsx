import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Company() {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-0 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-32 sm:mt-36 flex-1 w-full">
        <div className="bg-white p-8 sm:p-12 md:p-24 rounded-[32px] border border-zinc-100 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-8">Company</h1>
          <p className="text-base md:text-lg text-zinc-500 max-w-2xl leading-relaxed">
            FRAMIO Creative Systems builds scalable teams for top-tier creators.
          </p>
          
          <div className="mt-16 w-full max-w-3xl text-left space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Careers</h3>
              <p className="text-zinc-600 mb-4">We are always looking for exceptional video editors and thumbnail designers.</p>
              <a href="mailto:careers@framio.example.com" className="text-black font-bold border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors">careers@framio.com</a>
            </div>
            
            <div className="pt-8 border-t border-zinc-100">
              <h3 className="text-2xl font-bold mb-4">Press</h3>
              <p className="text-zinc-600 mb-4">For media inquiries, please contact our PR team.</p>
              <a href="mailto:press@framio.example.com" className="text-black font-bold border-b border-black pb-1 hover:text-zinc-600 hover:border-zinc-600 transition-colors">press@framio.com</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
