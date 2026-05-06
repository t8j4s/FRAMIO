import { Zap, Brain, Video, LayoutDashboard } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Zap className="h-5 w-5 text-zinc-900" />,
      title: "Fast turnaround",
      description: "Get your videos back in 24-48 hours. Never miss an upload schedule again."
    },
    {
      icon: <Brain className="h-5 w-5 text-zinc-900" />,
      title: "Strategy-backed editing",
      description: "We don't just cut clips. We edit for retention, engagement, and viral potential."
    },
    {
      icon: <Video className="h-5 w-5 text-zinc-900" />,
      title: "Built for creators",
      description: "Our team consists of former creators and managers who actually understand YouTube."
    },
    {
      icon: <LayoutDashboard className="h-5 w-5 text-zinc-900" />,
      title: "Scalable systems",
      description: "From 1 video a week to 30 shorts a month, our team scales seamlessly with your ambitions."
    }
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-100 flex flex-col h-full w-full">
      <h3 className="text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-400 mb-6 md:mb-8">
        Benefits
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
        {benefits.map((b, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="w-10 h-10 flex-shrink-0 bg-zinc-100 rounded-[10px] flex items-center justify-center">
              {b.icon}
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-zinc-900 mb-2">
                {b.title}
              </div>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
