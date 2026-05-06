import { Clock, TrendingDown, UserX } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Clock className="h-5 w-5 text-zinc-900" />,
      title: "Editing takes too much time",
      description: "You&apos;re spending 10+ hours a week in Premiere or CapCut instead of filming."
    },
    {
      icon: <TrendingDown className="h-5 w-5 text-zinc-900" />,
      title: "Inconsistent posting kills growth",
      description: "Missing uploads because an edit wasn&apos;t ready breaks momentum and hurts your reach."
    },
    {
      icon: <UserX className="h-5 w-5 text-zinc-900" />,
      title: "Scaling alone is impossible",
      description: "Managing freelancers is a full-time job. You need a trusted team to handle the volume."
    }
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-100 flex flex-col h-full w-full">
      <h3 className="text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-400 mb-6 md:mb-8">
        The Problem
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
        {features.map((feature, idx) => (
          <div key={idx} className="flex gap-4">
            <div className="w-10 h-10 flex-shrink-0 bg-zinc-100 rounded-[10px] flex items-center justify-center">
              {feature.icon}
            </div>
            <div>
              <div className="text-sm md:text-base font-bold text-zinc-900 mb-2">
                {feature.title}
              </div>
              <p className="text-xs md:text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
