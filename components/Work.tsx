export default function Work() {
  const videos = [
    {
      src: "https://www.youtube.com/embed/Wx6Te3yKcgY?rel=0",
      title: "From $0 to $100K with Content Systems",
      description: "See how structured editing and strategic content helped scale a creator to consistent revenue."
    },
    {
      src: "https://www.youtube.com/embed/TmnLggQBapY?rel=0",
      title: "High-Retention Editing Breakdown",
      description: "We transformed average footage into engaging content that keeps viewers watching till the end."
    },
    {
      src: "https://www.youtube.com/embed/yTJHJvBDNyQ?rel=0",
      title: "Viral Content Formula in Action",
      description: "Watch how storytelling, pacing, and thumbnails combine to drive massive reach."
    }
  ];

  return (
    <div className="bg-white p-8 md:p-14 rounded-[32px] border border-zinc-100 flex-1 flex flex-col">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 tracking-tight">Our Work</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        {videos.map((vid, idx) => (
          <div key={idx} className="group relative flex flex-col transition-all">
            <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-100 aspect-video mb-4 md:mb-5">
              <iframe 
                src={vid.src}
                title={vid.title}
                className="absolute inset-0 w-full h-full pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div>
              <h4 className="text-sm md:text-base font-bold text-zinc-900 mb-1 md:mb-2">{vid.title}</h4>
              <p className="mt-1 text-xs md:text-sm text-zinc-500 leading-relaxed">{vid.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
