export default function Services() {
  const services = [
    {
      title: "Short-form Vertical Content",
      description: "TikTok, Reels, & Shorts optimized for high retention and viral reach."
    },
    {
      title: "Long-form YouTube Systems",
      description: "A-Z editing, pacing, storytelling, and asset management for creators."
    },
    {
      title: "Thumbnails & optimization",
      description: "Custom, high-CTR thumbnails and strategic SEO optimization."
    }
  ];

  return (
    <div className="bg-black p-8 md:p-14 rounded-[32px] text-white flex-1 w-full h-full">
      <div className="flex flex-col mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-2 md:mb-4">FRAMIO handles everything</h2>
        <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-widest">Full-service creative production</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="bg-zinc-900/50 p-6 md:p-8 rounded-[24px] border border-zinc-800">
            <div className="text-base md:text-lg font-bold mb-2 md:mb-3">{service.title}</div>
            <div className="text-zinc-400 text-xs md:text-sm leading-relaxed">{service.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
