import Link from "next/link";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="bg-[#FDF9F4] text-[#121211] font-sans antialiased">
      {/* ===== NAV ===== */}
      <nav className="flex items-center justify-between max-w-[1200px] mx-auto px-6 md:px-8 py-5">
        <div className="flex items-center gap-2 font-bold text-lg">
          <span className="w-7 h-7 rounded-[7px] bg-[#DF5A36] text-white flex items-center justify-center text-sm font-bold">
            A
          </span>
          Atela
        </div>
        <div className="hidden md:flex gap-9 text-[14.5px]">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#footer">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium rounded-lg px-5 py-2.5 border border-[#E5E0D8]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="text-sm font-medium rounded-lg px-5 py-2.5 bg-[#121211] text-white hover:bg-[#2a2a28]"
          >
            Sign up
          </Link>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative overflow-hidden max-w-[1200px] mx-auto px-6 md:px-8 pb-16">
        <div className="absolute top-0 right-0 w-[38%] h-[70%] pointer-events-none z-0 bg-[radial-gradient(circle_at_top_right,_#F4804B_0%,_rgba(244,128,75,0)_70%)]" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-center pt-6">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-[#F3E4D9] text-[#DF5A36] text-[12.5px] font-medium px-3.5 py-1.5 rounded-full mb-5">
              ✦ Built for Fashion Houses &amp; Garment Factories
            </span>
            <h1 className="text-[34px] md:text-[42px] leading-[1.12] font-bold tracking-tight mb-5">
              Run Your Factory Floor, Payroll, and Inventory{" "}
              <span className="text-[#E8985F]">in One Place</span>
            </h1>
            <p className="text-base leading-relaxed text-[#6B6560] max-w-[460px] mb-8">
              Atela helps fashion houses and garment factories manage employees,
              calculate payroll, track raw materials and finished dresses, assign
              tasks, and follow every order from cutting table to delivery.
            </p>
            <div className="flex gap-3 flex-wrap mb-9">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 text-[15px] font-medium rounded-lg px-6 py-3.5 bg-[#121211] text-white hover:bg-[#2a2a28]"
              >
                Sign Up Your Factory →
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 text-[15px] font-medium rounded-lg px-6 py-3.5 border-[1.5px] border-[#121211]"
              >
                Staff Log In
              </Link>
            </div>
            <p className="text-[13px] text-[#8C8680] max-w-[420px]">
              Only factory owners and managers sign up. Staff accounts are created
              by the admin and use Log In only.
            </p>
          </div>

          {/* Dashboard mock */}
          <div className="relative">
            <div className="flex bg-white rounded-2xl border border-[#E5E0D8] shadow-[0_30px_60px_-20px_rgba(18,18,17,0.25)] overflow-hidden">
              <div className="w-[38%] bg-[#121211] text-white p-4 text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-[13px] mb-6">
                  <span className="w-5 h-5 rounded-[6px] bg-[#DF5A36] text-[10px] flex items-center justify-center">
                    A
                  </span>
                  Atela
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Employees" },
                  { label: "Payroll" },
                  { label: "Inventory" },
                  { label: "Orders" },
                  { label: "Tasks" },
                  { label: "Settings" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2 px-2.5 py-2 rounded-lg mb-0.5 text-[11.5px] ${
                      item.active
                        ? "bg-[#DF5A36] text-white"
                        : "text-white/65"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="flex-1 p-4">
                <div className="text-[13px] font-semibold mb-3">Dashboard</div>
                <div className="grid grid-cols-2 gap-2 mb-3.5">
                  <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded-lg px-2.5 py-2">
                    <div className="text-[9px] text-[#8C8680] mb-1">Employees</div>
                    <div className="text-sm font-bold">86</div>
                  </div>
                  <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded-lg px-2.5 py-2">
                    <div className="text-[9px] text-[#8C8680] mb-1">Active Orders</div>
                    <div className="text-sm font-bold text-[#DF5A36]">23</div>
                  </div>
                  <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded-lg px-2.5 py-2">
                    <div className="text-[9px] text-[#8C8680] mb-1">Low Stock Items</div>
                    <div className="text-sm font-bold text-[#DF5A36]">4</div>
                  </div>
                  <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded-lg px-2.5 py-2">
                    <div className="text-[9px] text-[#8C8680] mb-1">Payroll Due</div>
                    <div className="text-sm font-bold">₦2,450,000</div>
                  </div>
                </div>
                <div className="grid grid-cols-[1.4fr_1fr] gap-2.5">
                  <div className="bg-white border border-[#E5E0D8] rounded-lg p-2.5">
                    <div className="text-[10.5px] font-semibold mb-2">Production Overview</div>
                    <div className="h-[50px] rounded bg-[linear-gradient(180deg,rgba(244,128,75,0.18),rgba(244,128,75,0))]" />
                  </div>
                  <div className="bg-white border border-[#E5E0D8] rounded-lg p-2.5">
                    <div className="text-[10.5px] font-semibold mb-2">Bottlenecks</div>
                    {["Cutting", "Sewing", "Quality Check"].map((label) => (
                      <div key={label} className="flex items-center gap-1.5 text-[9.5px] text-[#6B6560] mb-1.5">
                        <span className="w-[5px] h-[5px] rounded-full bg-[#DF5A36] shrink-0" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE ===== */}
      <section id="features" className="max-w-[1200px] mx-auto px-6 md:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6">
          {/* Web dashboard panel */}
          <div className="bg-white border border-[#E5E0D8] rounded-[18px] p-9">
            <h3 className="text-[23px] font-bold tracking-tight mb-2.5">
              One Dashboard to Run the Factory
            </h3>
            <p className="text-[14.5px] text-[#6B6560] leading-relaxed mb-4 max-w-[380px]">
              Owners and managers track every order by production stage, assign
              tasks to staff, manage raw material and finished dress inventory,
              and calculate payroll — all from one screen.
            </p>
            <div className="mt-6 rounded-xl overflow-hidden bg-[#F4F1EC] min-h-[220px] flex items-end">
              <div className="w-full bg-white border border-[#E5E0D8] rounded-t-[10px] p-3.5 shadow-[0_-10px_30px_-15px_rgba(18,18,17,0.15)]">
                <div className="flex gap-4 text-[10.5px] text-[#8C8680] mb-3 border-b border-[#E5E0D8] pb-2">
                  <span className="text-[#121211] font-semibold">Cutting</span>
                  <span>Sewing</span>
                  <span>Quality Check</span>
                  <span>Packed</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5">
                  <div>
                    <div className="text-[9px] font-semibold text-[#8C8680] mb-1.5">Cutting</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1.5 text-[8px] text-[#6B6560] mb-1.5">Order #441</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1.5 text-[8px] text-[#6B6560]">Order #440</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold text-[#8C8680] mb-1.5">Sewing</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1.5 text-[8px] text-[#6B6560]">Order #439</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold text-[#8C8680] mb-1.5">Quality Check</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1.5 text-[8px] text-[#6B6560]">Order #438</div>
                  </div>
                  <div>
                    <div className="text-[9px] font-semibold text-[#8C8680] mb-1.5">Packed</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1.5 text-[8px] text-[#6B6560]">Order #437</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile app panel */}
          <div className="bg-white border border-[#E5E0D8] rounded-[18px] p-9">
            <h3 className="text-[23px] font-bold tracking-tight mb-2.5">
              A Simple App for Factory Staff
            </h3>
            <p className="text-[14.5px] text-[#6B6560] leading-relaxed mb-4 max-w-[380px]">
              Staff log in with an account created by the admin, view assigned
              tasks, update production progress, and track their earnings —
              right from their phone.
            </p>
            <div className="mt-6 rounded-xl bg-[#F4F1EC] min-h-[220px] flex items-end pt-6">
              <div className="flex justify-center gap-3.5 items-end w-full pb-0">
                <div className="w-[30%] aspect-[9/18] bg-[#121211] rounded-[22px] p-2 shadow-[0_20px_40px_-15px_rgba(18,18,17,0.3)]">
                  <div className="w-full h-full bg-white rounded-2xl px-2 py-2.5 overflow-hidden">
                    <div className="text-[8px] font-bold mb-2">My Tasks</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1 text-[6.5px] text-[#6B6560] mb-1">Cutting · 7:30 PM</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1 text-[6.5px] text-[#6B6560] mb-1">Sewing · 6:15 PM</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1 text-[6.5px] text-[#6B6560]">Finishing · 5:00 PM</div>
                  </div>
                </div>
                <div className="w-[30%] aspect-[9/18] bg-[#121211] rounded-[22px] p-2 shadow-[0_20px_40px_-15px_rgba(18,18,17,0.3)]">
                  <div className="w-full h-full bg-white rounded-2xl px-2 py-2.5 overflow-hidden">
                    <div className="text-[8px] font-bold mb-2">Earnings</div>
                    <div className="text-[13px] font-bold text-[#DF5A36] my-2">₦245,000</div>
                    <div className="bg-[#DF5A36] text-white text-[7px] font-semibold text-center py-1.5 rounded-md">Withdraw</div>
                  </div>
                </div>
                <div className="w-[30%] aspect-[9/18] bg-[#121211] rounded-[22px] p-2 shadow-[0_20px_40px_-15px_rgba(18,18,17,0.3)]">
                  <div className="w-full h-full bg-white rounded-2xl px-2 py-2.5 overflow-hidden">
                    <div className="text-[8px] font-bold mb-2">Notifications</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1 text-[6.5px] text-[#6B6560] mb-1">Task approved</div>
                    <div className="bg-[#FAFAF9] border border-[#E5E0D8] rounded p-1 text-[6.5px] text-[#6B6560]">Order #440 ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section id="how-it-works" className="max-w-[1136px] mx-auto px-6 md:px-8 pb-20">
        <div className="bg-[#121211] rounded-[18px] grid grid-cols-2 sm:grid-cols-4 gap-7 px-6 md:px-10 py-12">
          {[
            { title: "Employees", desc: "Manage staff profiles, roles, and access in one place." },
            { title: "Payroll", desc: "Calculate pay automatically from logged production work." },
            { title: "Inventory", desc: "Track raw materials and finished dresses as stock moves." },
            { title: "Orders & Tasks", desc: "Follow every order and assign tasks by stage." },
          ].map((f) => (
            <div key={f.title}>
              <div className="text-white text-lg font-bold mb-1.5">{f.title}</div>
              <div className="text-[12.5px] text-white/55 leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-8 pb-12">
        <div className="bg-[linear-gradient(120deg,#121211_55%,#2b2622_100%)] rounded-[18px] p-10 md:p-14 text-center md:text-left">
          <h2 className="text-white text-2xl md:text-[27px] font-bold tracking-tight mb-3">
            Bring Your Factory Onto Atela
          </h2>
          <p className="text-white/60 text-[14.5px] leading-relaxed mb-7 max-w-[420px] mx-auto md:mx-0">
            Sign up as the owner or manager to set up your factory. Your staff
            log in with accounts you create for them — no sign-up needed on
            their end.
          </p>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <Link
              href="/signup"
              className="text-[15px] font-medium rounded-lg px-6 py-3.5 bg-[#DF5A36] text-white"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="text-[15px] font-medium rounded-lg px-6 py-3.5 border-[1.5px] border-white/30 text-white"
            >
              Log In
            </Link>
          </div>
        </div>
      </section>
          <Footer />

    </main>
  );
}