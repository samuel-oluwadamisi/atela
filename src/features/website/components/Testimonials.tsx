const testimonials = [
  {
    quote:
      "Atela transformed how we manage production. We can now track every order in real-time and reduce delays significantly.",
    name: "Amara Osei",
    role: "CEO, House of Chi",
    initials: "AO",
    color: "#6366f1",
  },
  {
    quote:
      "The earnings system is transparent and accurate. My team loves the mobile app — it's simple and easy to use.",
    name: "Zara Lagos",
    role: "Operations Manager, Zara Lagos",
    initials: "ZL",
    color: "#f59e0b",
  },
  {
    quote:
      "Inventory alerts have saved us multiple times. We always know what's in stock and what to reorder.",
    name: "Kemi Adeyemi",
    role: "Production Head, Vlisco Co.",
    initials: "KA",
    color: "#10b981",
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-2">
              Trusted by Fashion Professionals
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2" aria-label="Scroll testimonials">
            <button
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:border-amber-500 hover:text-amber-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 flex flex-col gap-5"
            >
              <QuoteIcon className="w-8 h-8 text-amber-200 dark:text-amber-900" />

              <blockquote className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-1">
                {t.quote}
              </blockquote>

              <footer className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <div>
                  <cite className="not-italic text-sm font-semibold text-slate-900 dark:text-white block">
                    {t.name}
                  </cite>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{t.role}</span>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}