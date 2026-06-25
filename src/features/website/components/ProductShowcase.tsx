export default function ProductShowcase() {
  return (
    <section
      id="product"
      aria-labelledby="product-heading"
      className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Web dashboard */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3">
              For Administrators
            </p>
            <h2
              id="product-heading"
              className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4"
            >
              Powerful Web Dashboard for Administrators
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Manage everything from one place with real-time dashboards, task boards, approvals, and analytics. Full visibility over every order, worker, and stage of production.
            </p>
            <a
              href="#learn-more"
              className="inline-flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Web UI mockup */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-slate-900/50 bg-slate-50 dark:bg-slate-900 aspect-[16/10]">
            <img
              src="/web-dashboard.png"
              alt="Atela web dashboard showing task boards and analytics"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector(".fallback")) {
                  parent.insertAdjacentHTML(
                    "beforeend",
                    `<div class="fallback w-full h-full bg-slate-900 p-4 flex flex-col gap-3">
                      <div class="flex gap-2">
                        <div class="w-24 h-5 rounded bg-slate-700"></div>
                        <div class="flex-1 h-5 rounded bg-slate-800"></div>
                        <div class="w-16 h-5 rounded bg-amber-500/40"></div>
                      </div>
                      <div class="grid grid-cols-3 gap-2 flex-1">
                        ${["In Progress", "Review", "Approved"].map(col => `
                          <div class="rounded-lg bg-slate-800 p-2 flex flex-col gap-2">
                            <div class="text-xs text-slate-500 font-semibold">${col}</div>
                            ${[1,2,3].map(() => `<div class="rounded bg-slate-700 h-8"></div>`).join("")}
                          </div>
                        `).join("")}
                      </div>
                    </div>`
                  );
                }
              }}
            />
          </div>
        </div>

        {/* Mobile app */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mobile screenshots */}
          <div className="flex gap-4 justify-center order-2 lg:order-1">
            {["/mobile-1.png", "/mobile-2.png", "/mobile-3.png"].map((src, i) => (
              <div
                key={i}
                className={`relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-100 dark:bg-slate-900 ${i === 1 ? "w-32 aspect-[9/19]" : "w-28 aspect-[9/19] mt-6"}`}
              >
                <img
                  src={src}
                  alt={`Atela mobile app screen ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector(".fallback")) {
                      parent.insertAdjacentHTML(
                        "beforeend",
                        `<div class="fallback absolute inset-0 bg-slate-900 flex flex-col p-2 gap-2">
                          <div class="w-full h-2 rounded bg-slate-700"></div>
                          <div class="flex-1 rounded bg-slate-800 flex items-center justify-center">
                            <div class="w-8 h-8 rounded-full bg-amber-500/30 flex items-center justify-center text-amber-400 text-xs font-bold">A</div>
                          </div>
                          <div class="w-3/4 h-2 rounded bg-slate-700 mx-auto"></div>
                          <div class="w-full h-6 rounded bg-amber-500/80"></div>
                        </div>`
                      );
                    }
                  }}
                />
              </div>
            ))}
          </div>

          {/* Mobile copy */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-amber-500 mb-3">
              For Your Factory Team
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Mobile App for Your Factory Team
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Workers can view tasks, accept jobs, update progress, and track earnings — anytime, anywhere. No desktop required.
            </p>
            <a
              href="#learn-more-mobile"
              className="inline-flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-400 transition-colors"
            >
              Learn More
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}