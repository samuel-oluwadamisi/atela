import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Sign Up", href: "/signup" },
      { label: "Log In", href: "/login" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="max-w-[1200px] mx-auto px-6 md:px-8 pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-[#E5E0D8]">
        {/* Brand */}
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-[#121211]">
            <span className="w-7 h-7 rounded-[7px] bg-[#DF5A36] text-white flex items-center justify-center text-sm">
              A
            </span>
            Atela
          </Link>
          <p className="text-[13.5px] text-[#8C8680] leading-relaxed mt-3.5 mb-4 max-w-[240px]">
            Employee management, payroll, inventory, and order tracking for
            fashion houses and garment factories.
          </p>
          <div className="flex gap-2.5">
            {["f", "x", "in"].map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="w-8 h-8 rounded-full border border-[#E5E0D8] flex items-center justify-center text-xs text-[#6B6560] hover:bg-[#F3E4D9] hover:text-[#DF5A36] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[13.5px] font-semibold mb-4">{col.title}</h4>
            {col.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-[13.5px] text-[#8C8680] mb-3 hover:text-[#121211] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6 text-[12.5px] text-[#8C8680]">
        <span>© {new Date().getFullYear()} Atela. All rights reserved.</span>
        <span>Made for fashion houses &amp; garment factories.</span>
      </div>
    </footer>
  );
}