import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Legal() {
  return (
    <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-24 flex flex-col min-h-screen">
      <Navbar />
      <main className="mt-32 sm:mt-36 flex-1 w-full">
        <div className="bg-white p-8 sm:p-12 md:p-24 rounded-[32px] border border-zinc-100 flex flex-col items-start text-left max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-12">Legal Information</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-zinc-600 leading-relaxed">
                At FRAMIO, we take your privacy seriously. All raw footage, assets, and unreleased content shared with us is treated with the strictest confidentiality. 
                We do not use your content for anything other than fulfilling our service obligations unless explicitly agreed upon.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <p className="text-zinc-600 leading-relaxed">
                By using FRAMIO&apos;s services, you agree to our terms. We operate on a subscription basis with no long-term contracts. 
                Turnaround times are estimates based on standard project complexity. Significant revisions or highly complex edits may require additional time.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Content Ownership</h2>
              <p className="text-zinc-600 leading-relaxed">
                You retain 100% ownership of all original content provided to us, as well as the final edited videos once payment has been processed. 
                We reserve the right to feature completed public videos in our portfolio with your permission.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
