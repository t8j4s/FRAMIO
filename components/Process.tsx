export default function Process() {
  const steps = [
    {
      step: "01",
      title: "Submit content in seconds",
      description: "Drop your raw footage into our dashboard. Provide any notes or let our creative team take the lead."
    },
    {
      step: "02",
      title: "We edit & optimize for growth",
      description: "Our dedicated editors craft high-retention videos with perfect sound, pacing, and graphics."
    },
    {
      step: "03",
      title: "You publish & scale revenue",
      description: "Receive your ready-to-post content in 24-48 hours. Review, approve, publish, and scale.",
      fade: true
    }
  ];

  return (
    <div className="bg-white p-8 md:p-12 rounded-[32px] border border-zinc-100 flex flex-col h-full w-full">
      <h3 className="text-[10px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-400 mb-6 md:mb-10">
        Process
      </h3>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 relative">
        <div className="hidden md:block absolute top-[28px] left-[10%] right-[30%] h-[2px] bg-zinc-100 z-0" />
        
        {steps.map((step, idx) => (
          <div key={idx} className={`flex flex-col flex-1 relative z-10 ${step.fade ? 'opacity-70' : 'opacity-100'}`}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm md:text-base font-bold italic mb-6 shadow-sm border ${step.fade ? 'bg-zinc-50 border-zinc-100 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-900'}`}>
              {step.step}
            </div>
            <div className="text-lg md:text-xl font-bold mb-3">
              {step.title}
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
