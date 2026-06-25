const stats = [
  { value: "30%", label: "Faster Production Workflow" },
  { value: "95%", label: "Reduction in Manual Errors" },
  { value: "500+", label: "Fashion Businesses Trust Us" },
  { value: "24/7", label: "Real-time Visibility & Support" },
];

export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="relative py-20 bg-slate-900 dark:bg-slate-950 overflow-hidden transition-colors duration-300"
    >
      {/* Subtle texture overlay */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-indigo-500/5" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h2 id="stats-heading" className="sr-only">Key statistics</h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-700">
          {stats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center text-center px-4">
              <dt className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                <span className="text-amber-400">{stat.value.replace(/\d+/, "")}</span>
                {stat.value.replace(/[^0-9]/g, "")}
                {stat.value.match(/[+%]/) ? (
                  <span className="text-amber-400">{stat.value.match(/[+%]/)?.[0]}</span>
                ) : null}
              </dt>
              <dd className="text-sm text-slate-400 leading-snug max-w-[120px]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}