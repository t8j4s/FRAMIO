import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-0 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-32 sm:mt-36 flex-1 w-full">
        <div className="bg-white p-8 sm:p-12 md:p-24 rounded-[32px] border border-zinc-100 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight mb-8">About FRAMIO</h1>
          <p className="text-base md:text-xl text-zinc-500 max-w-3xl leading-relaxed">
            We are a team of former creators, editors, and growth strategists who understand exactly what it takes to scale an audience on YouTube and short-form platforms.
          </p>
          <div className="mt-12 p-8 md:p-12 bg-zinc-50 rounded-3xl max-w-3xl">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-zinc-600">
              To give creators their time back by providing a seamless, scalable, and high-quality production system that feels like an in-house team.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
