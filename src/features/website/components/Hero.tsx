import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300"
      aria-label="Hero"
    >
      {/* Background gradient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 w-150 h-150 rounded-full bg-amber-400/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-60 -left-40 w-100 h-100 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Copy */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
              Built for Fashion Houses &amp; Garment Factories
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white mb-6">
            Streamline Your Fashion Production{" "}
            <span className="text-amber-500">Workflow</span>
          </h1>

          <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed mb-10 max-w-lg">
            Atela helps you manage orders, tasks, inventory, approvals, and worker earnings on one intelligent platform. Save time, reduce errors, and scale your production with confidence.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-white font-semibold transition-colors text-sm"
            >
              Start Managing Production
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-500 font-semibold transition-colors text-sm"
            >
              Book a Demo
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {["#6366f1", "#f59e0b", "#10b981"].map((color, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "B", "C"][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-500" aria-label="4.7 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill={i < 5 ? "currentColor" : "none"} className="w-4 h-4" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 ml-1">4.7</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">Trusted by 500+ fashion teams worldwide</p>
            </div>
          </div>
        </div>

        {/* Right: UI screenshot mockup */}
        <div className="relative lg:pl-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 dark:shadow-slate-900/60 border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-4/3">
            {/* Placeholder dashboard — replace src with your actual screenshot */}
            <Image
              src="/images/login-image.jpg"
              alt="Atela dashboard showing order management, production overview, and bottlenecks"
              className="w-full h-full object-cover object-top"
              fill
              onError={(e) => {
                // Fallback: show a stylised placeholder if image isn't present
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector(".placeholder-ui")) {
                  parent.insertAdjacentHTML(
                    "beforeend",
                    `<div class="placeholder-ui absolute inset-0 flex flex-col p-6 bg-slate-900">
                      <div class="flex items-center gap-2 mb-4">
                        <div class="w-3 h-3 rounded-full bg-red-400"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div class="w-3 h-3 rounded-full bg-green-400"></div>
                        <div class="ml-4 flex-1 h-5 rounded bg-slate-700 max-w-xs"></div>
                      </div>
                      <div class="grid grid-cols-4 gap-3 mb-4">
                        ${["125", "48", "76", "₦2.4M"].map(v => `<div class="bg-slate-800 rounded-lg p-3"><div class="text-white font-bold text-sm">${v}</div><div class="h-2 mt-1 rounded bg-slate-700 w-3/4"></div></div>`).join("")}
                      </div>
                      <div class="flex-1 rounded-lg bg-slate-800 p-3">
                        <div class="h-3 w-32 rounded bg-slate-600 mb-3"></div>
                        <div class="h-24 rounded bg-linear-to-r from-amber-500/30 to-indigo-500/30 flex items-end px-2 pb-2 gap-1">
                          ${[40,65,50,80,55,90,70].map(h => `<div class="flex-1 rounded-t bg-amber-400" style="height:${h}%"></div>`).join("")}
                        </div>
                      </div>
                    </div>`
                  );
                }
              }}
            />
          </div>

          {/* Floating badge */}
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center text-green-600 dark:text-green-400 text-sm font-bold">↑</span>
            <div>
              <p className="text-xs font-semibold text-slate-800 dark:text-white">Production up 30%</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">vs last quarter</p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -top-4 -right-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-amber-600 dark:text-amber-400" aria-hidden="true">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-800 dark:text-white">24/7 Real-time</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">Visibility &amp; alerts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}