import { Quote } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      body: "Working with FRAMIO completely changed my workflow. I used to spend 15 hours a week editing, now I just record and they handle the rest. My retention has never been higher.",
      author: "Alex Hormozi Style Creator",
      handle: "@alexcreative",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    {
      body: "Their thumbnail strategy alone doubled my click-through rate. I wasn't just getting an editor; I got a full growth team that actually understands the algorithm.",
      author: "Sarah Jenks",
      handle: "@sarahj_vlogs",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      body: "I was burning out trying to post 3 times a week. With FRAMIO, we scaled to daily uploads without a drop in quality. Insane turnaround time and communication.",
      author: "David L.",
      handle: "@davidtech",
      avatar: "https://picsum.photos/seed/david/100/100"
    }
  ];

  return (
    <div className="bg-black p-8 md:p-14 rounded-[32px] text-white flex-1 flex flex-col">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-8 md:mb-12">Creators love FRAMIO</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-6 md:p-8 rounded-[24px] border border-zinc-800 flex flex-col">
            <Quote className="h-6 w-6 text-zinc-600 mb-4 md:mb-6" />
            <p className="text-zinc-300 flex-1 leading-relaxed text-sm md:text-base">
              &quot;{t.body}&quot;
            </p>
            <div className="mt-6 md:mt-8 flex items-center gap-x-4">
              <Image
                src={t.avatar}
                alt={t.author}
                width={48}
                height={48}
                unoptimized
                className="rounded-full bg-zinc-800"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-sm md:text-base font-bold text-white mb-1">{t.author}</div>
                <div className="text-xs md:text-sm text-zinc-500">{t.handle}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
